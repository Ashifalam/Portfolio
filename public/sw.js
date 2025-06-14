// Service Worker for caching and offline functionality
// eslint-disable-next-line no-unused-vars
const CACHE_NAME = 'aquif-portfolio-v1';
const STATIC_CACHE = 'static-v1';
const DYNAMIC_CACHE = 'dynamic-v1';

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.svg',
  '/Aquif_Zubair_Resume.pdf',
  '/robots.txt',
  '/sitemap.xml',
];

// Install event - cache static assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then(cache => {
        console.log('Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        return self.skipWaiting();
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches
      .keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        return self.clients.claim();
      })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Handle navigation requests
  if (request.mode === 'navigate') {
    event.respondWith(
      caches.match(request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(request)
          .then(response => {
            // Cache successful responses
            if (response.status === 200) {
              const responseClone = response.clone();
              caches.open(DYNAMIC_CACHE).then(cache => {
                cache.put(request, responseClone);
              });
            }
            return response;
          })
          .catch(() => {
            // Return offline page if available
            return caches.match('/index.html');
          });
      })
    );
    return;
  }

  // Handle static assets
  if (STATIC_ASSETS.includes(url.pathname)) {
    event.respondWith(
      caches.match(request).then(cachedResponse => {
        return cachedResponse || fetch(request);
      })
    );
    return;
  }

  // Handle API requests and other resources
  event.respondWith(
    caches.match(request).then(cachedResponse => {
      if (cachedResponse) {
        // Serve from cache and update in background
        fetch(request)
          .then(response => {
            if (response.status === 200) {
              const responseClone = response.clone();
              caches.open(DYNAMIC_CACHE).then(cache => {
                cache.put(request, responseClone);
              });
            }
          })
          .catch(() => {
            // Network failed, but we have cache
          });
        return cachedResponse;
      }

      // Not in cache, fetch from network
      return fetch(request)
        .then(response => {
          // Cache successful responses
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(DYNAMIC_CACHE).then(cache => {
              cache.put(request, responseClone);
            });
          }
          return response;
        })
        .catch(() => {
          // Network failed and not in cache
          if (request.destination === 'image') {
            // Return placeholder for images
            return new Response(
              '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><rect width="200" height="200" fill="#f0f0f0"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#999">Image unavailable</text></svg>',
              { headers: { 'Content-Type': 'image/svg+xml' } }
            );
          }
          throw new Error('Network failed and resource not cached');
        });
    })
  );
});

// Background sync for form submissions
self.addEventListener('sync', event => {
  if (event.tag === 'contact-form') {
    event.waitUntil(
      // Handle offline form submissions
      handleOfflineFormSubmission()
    );
  }
});

// Handle offline form submissions
async function handleOfflineFormSubmission() {
  try {
    // Get stored form data from IndexedDB
    const formData = await getStoredFormData();
    if (formData) {
      // Try to submit the form
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Clear stored data on successful submission
        await clearStoredFormData();
        console.log('Offline form submission successful');
      }
    }
  } catch (error) {
    console.log('Offline form submission failed:', error);
  }
}

// Placeholder functions for IndexedDB operations
async function getStoredFormData() {
  // Implementation would use IndexedDB to retrieve stored form data
  return null;
}

async function clearStoredFormData() {
  // Implementation would clear stored form data from IndexedDB
}

// Push notification handling (for future use)
self.addEventListener('push', event => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/favicon.svg',
      badge: '/favicon.svg',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: data.primaryKey,
      },
      actions: [
        {
          action: 'explore',
          title: 'View Portfolio',
          icon: '/favicon.svg',
        },
        {
          action: 'close',
          title: 'Close',
          icon: '/favicon.svg',
        },
      ],
    };

    event.waitUntil(self.registration.showNotification(data.title, options));
  }
});

// Notification click handling
self.addEventListener('notificationclick', event => {
  event.notification.close();

  if (event.action === 'explore') {
    // eslint-disable-next-line no-undef
    event.waitUntil(clients.openWindow('/'));
  }
});
