// SEO utility functions for React 19 compatibility
export const updatePageTitle = title => {
  if (typeof document !== 'undefined') {
    document.title = title;
  }
};

export const updateMetaDescription = description => {
  if (typeof document !== 'undefined') {
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
  }
};

export const updateMetaKeywords = keywords => {
  if (typeof document !== 'undefined') {
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }
  }
};

export const updateCanonicalUrl = url => {
  if (typeof document !== 'undefined') {
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', url);
    }
  }
};

export const updateOpenGraphTags = data => {
  if (typeof document !== 'undefined') {
    const { title, description, url, image } = data;

    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector(
      'meta[property="og:description"]'
    );
    const ogUrl = document.querySelector('meta[property="og:url"]');
    const ogImage = document.querySelector('meta[property="og:image"]');

    if (ogTitle && title) ogTitle.setAttribute('content', title);
    if (ogDescription && description)
      ogDescription.setAttribute('content', description);
    if (ogUrl && url) ogUrl.setAttribute('content', url);
    if (ogImage && image) ogImage.setAttribute('content', image);
  }
};

export const updateTwitterTags = data => {
  if (typeof document !== 'undefined') {
    const { title, description, url, image } = data;

    const twitterTitle = document.querySelector(
      'meta[property="twitter:title"]'
    );
    const twitterDescription = document.querySelector(
      'meta[property="twitter:description"]'
    );
    const twitterUrl = document.querySelector('meta[property="twitter:url"]');
    const twitterImage = document.querySelector(
      'meta[property="twitter:image"]'
    );

    if (twitterTitle && title) twitterTitle.setAttribute('content', title);
    if (twitterDescription && description)
      twitterDescription.setAttribute('content', description);
    if (twitterUrl && url) twitterUrl.setAttribute('content', url);
    if (twitterImage && image) twitterImage.setAttribute('content', image);
  }
};

// Comprehensive SEO update function
export const updateSEO = seoData => {
  const { title, description, keywords, url, image, section = '' } = seoData;

  // Update page title
  const fullTitle = section
    ? `${section} | Aquif Zubair - Senior Software Engineer`
    : title ||
      'Aquif Zubair - Senior Software Engineer | Node.js & Backend Expert';

  updatePageTitle(fullTitle);

  // Update meta tags
  if (description) updateMetaDescription(description);
  if (keywords) updateMetaKeywords(keywords);
  if (url) updateCanonicalUrl(url);

  // Update social media tags
  const socialData = {
    title: fullTitle,
    description:
      description ||
      'Experienced Software Engineer specializing in Node.js, PostgreSQL, and microservices architecture.',
    url: url || 'https://aquifzubair.dev/',
    image: image || 'https://aquifzubair.dev/og-image.jpg',
  };

  updateOpenGraphTags(socialData);
  updateTwitterTags(socialData);
};

// Section-specific SEO data
export const seoData = {
  home: {
    title: 'Aquif Zubair - Senior Software Engineer | Node.js & Backend Expert',
    description:
      'Experienced Software Engineer specializing in Node.js, PostgreSQL, and microservices architecture. 5+ years building scalable backend solutions for enterprise applications.',
    keywords:
      'Aquif Zubair, Software Engineer, Node.js Developer, Backend Developer, PostgreSQL, Microservices, JavaScript, TypeScript, React, Full Stack Developer, Bangalore, India',
    url: 'https://aquifzubair.dev/',
  },
  about: {
    section: 'About',
    description:
      "Learn about Aquif Zubair's journey as a Software Engineer, passion for backend development, and 5+ years of experience building scalable applications.",
    keywords:
      'About Aquif Zubair, Software Engineer Background, Backend Developer Experience, Node.js Expert',
    url: 'https://aquifzubair.dev/#about',
  },
  skills: {
    section: 'Skills & Technologies',
    description:
      "Explore Aquif Zubair's technical skills including Node.js, PostgreSQL, React, TypeScript, Microservices, and modern development tools.",
    keywords:
      'Node.js Skills, PostgreSQL, React, TypeScript, Microservices, Backend Technologies, Software Development Skills',
    url: 'https://aquifzubair.dev/#skills',
  },
  experience: {
    section: 'Work Experience',
    description:
      "Discover Aquif Zubair's professional experience at Leucine Tech, Zopsmart, Lal10, and other companies. 5+ years of backend development expertise.",
    keywords:
      'Software Engineer Experience, Leucine Tech, Zopsmart, Backend Development Career, Node.js Projects',
    url: 'https://aquifzubair.dev/#experience',
  },
  projects: {
    section: 'Projects Portfolio',
    description:
      "View Aquif Zubair's portfolio of 20+ projects including enterprise analytics platforms, SSO systems, microservices, and full-stack applications.",
    keywords:
      'Software Projects, Node.js Projects, Enterprise Applications, Microservices Projects, Full Stack Development',
    url: 'https://aquifzubair.dev/#projects',
  },
  education: {
    section: 'Education & Certifications',
    description:
      "Aquif Zubair's educational background including B.E. in Computer Science from SLIET and professional certifications in software development.",
    keywords:
      'Computer Science Education, SLIET, Software Engineering Degree, Technical Certifications',
    url: 'https://aquifzubair.dev/#education',
  },
  contact: {
    section: 'Contact',
    description:
      'Get in touch with Aquif Zubair for software development opportunities, collaborations, or technical discussions. Based in Bangalore, India.',
    keywords:
      'Contact Aquif Zubair, Software Engineer Contact, Bangalore Developer, Hire Node.js Developer',
    url: 'https://aquifzubair.dev/#contact',
  },
};
