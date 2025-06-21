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
      'meta[property="og:description"]',
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
      'meta[property="twitter:title"]',
    );
    const twitterDescription = document.querySelector(
      'meta[property="twitter:description"]',
    );
    const twitterUrl = document.querySelector('meta[property="twitter:url"]');
    const twitterImage = document.querySelector(
      'meta[property="twitter:image"]',
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
    ? `${section} | Ashif Alam - Software Developer`
    : title || 'Ashif Alam - Software Developer | Python & AI/ML Expert';

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
    url: url || 'https://ashifalam.dev/',
    image: image || 'https://ashifalam.dev/og-image.jpg',
  };

  updateOpenGraphTags(socialData);
  updateTwitterTags(socialData);
};

// Section-specific SEO data
export const seoData = {
  home: {
    title: 'Ashif Alam - Software Developer | Python & AI/ML Expert',
    description:
      'Software Developer specializing in Python, Machine Learning, and AI technologies. Expert in automation testing, computer vision, and building intelligent applications.',
    keywords:
      'Ashif Alam, Software Developer, Python Developer, Machine Learning Engineer, AI Developer, Computer Vision, Data Science, Automation Testing, Bangalore, India',
    url: 'https://ashifalam.dev/',
  },
  about: {
    section: 'About',
    description:
      "Learn about Ashif Alam's journey as a Software Developer, passion for AI/ML development, and expertise in building intelligent applications.",
    keywords:
      'About Ashif Alam, Software Developer Background, Python Developer Experience, AI/ML Expert',
    url: 'https://ashifalam.dev/#about',
  },
  skills: {
    section: 'Skills & Technologies',
    description:
      "Explore Ashif Alam's technical skills including Python, Machine Learning, TensorFlow, Scikit-learn, Computer Vision, and modern AI/ML tools.",
    keywords:
      'Python Skills, Machine Learning, TensorFlow, Scikit-learn, Computer Vision, AI Technologies, Data Science Skills',
    url: 'https://ashifalam.dev/#skills',
  },
  experience: {
    section: 'Work Experience',
    description:
      "Discover Ashif Alam's professional experience at ZopSmart (Kroger), Anand Neuburg Diagnostic Laboratory, and expertise in AI/ML development.",
    keywords:
      'Software Developer Experience, ZopSmart, Kroger, AI/ML Development Career, Python Projects',
    url: 'https://ashifalam.dev/#experience',
  },
  projects: {
    section: 'Projects Portfolio',
    description:
      "View Ashif Alam's portfolio of AI/ML projects including object tracking, sign language translation, duplicate detection, and medical diagnostic applications.",
    keywords:
      'AI/ML Projects, Python Projects, Computer Vision, Machine Learning Applications, Data Science Projects',
    url: 'https://ashifalam.dev/#projects',
  },
  education: {
    section: 'Education & Certifications',
    description:
      "Ashif Alam's educational background including B.E. in Artificial Intelligence and Machine Learning from Dayananda Sagar College of Engineering.",
    keywords:
      'AI/ML Education, Dayananda Sagar College, Machine Learning Degree, Technical Certifications',
    url: 'https://ashifalam.dev/#education',
  },
  contact: {
    section: 'Contact',
    description:
      'Get in touch with Ashif Alam for software development opportunities, AI/ML collaborations, or technical discussions. Based in Bangalore, India.',
    keywords:
      'Contact Ashif Alam, Software Developer Contact, Bangalore Developer, Hire Python Developer',
    url: 'https://ashifalam.dev/#contact',
  },
};
