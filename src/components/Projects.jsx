import { motion } from 'framer-motion';
import { HiCode, HiStar } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import Section, { SectionHeader } from './Section';
import Card, { CardBody, CardHeader, CardTitle, CardDescription } from './Card';
import Button from './Button';

const Projects = () => {
  const projects = [
    {
      title: 'Enhancing Object Tracking Using Multi-Expert Framework',
      description:
        'The MEEM framework dynamically selects the most accurate tracker, ensuring robust and precise aerial object tracking under varying conditions. Excels in applications like border surveillance, search and rescue, and autonomous systems.',
      image: '/api/placeholder/400/250',
      technologies: ['Python', 'YOLOv5s', 'Streamlit', 'Computer Vision'],
      features: [
        'Dynamic tracker selection',
        'Real-time performance',
        'Adaptive model switching',
        'Aerial object tracking',
        'Border surveillance applications',
      ],
      github: 'https://github.com/ashifalam',
      demo: '#',
<<<<<<< HEAD
      // status: 'Demo',
=======
      status: 'Demo',
>>>>>>> 8719df63029fb4be14546f7aefb3df5bd8fe0cdf
      company: 'Personal Project',
    },
    {
      title: 'SignSense - ISL Translation System',
      description:
        'Integrates computer vision and machine learning to offer real-time communication assistance, translating ISL and detecting emotional states in spoken language. Benefits individuals with hearing impairments.',
      image: '/api/placeholder/400/250',
<<<<<<< HEAD
      technologies: [
        'Python',
        'RoboFlow',
        'YOLOv5s',
        'Streamlit',
        'Computer Vision',
      ],
=======
      technologies: ['Python', 'RoboFlow', 'YOLOv5s', 'Streamlit', 'Computer Vision'],
>>>>>>> 8719df63029fb4be14546f7aefb3df5bd8fe0cdf
      features: [
        'Real-time ISL translation',
        'Emotional state detection',
        'Communication assistance',
        'Dataset augmentation',
        'Accessibility enhancement',
<<<<<<< HEAD
      ],
      github: 'https://github.com/ashifalam',
      demo: '#',
      // status: 'Demo',
      company: 'Personal Project',
    },
    {
      title: 'Duplicate Question Pairs Detection',
      description:
        'Duplicate question pairs based on Quora questions that share identical or closely similar meanings, capturing semantic equivalence using advanced NLP techniques.',
      image: '/api/placeholder/400/250',
      technologies: ['Python', 'Machine Learning', 'NLTK', 'NLP'],
      features: [
        'Semantic equivalence detection',
        'TF-IDF implementation',
        'Word embeddings',
        'Deep learning models',
        'False positive minimization',
      ],
      github: 'https://github.com/ashifalam',
      demo: '#',
      // status: 'Demo',
      company: 'Personal Project',
    },
    {
      title: 'Medical Diagnostic Application',
      description:
        'Developed an application using machine learning and deep learning to address challenges in interpreting laboratory test results, specifically focusing on TyphifastICT cards for classification.',
      image: '/api/placeholder/400/250',
      technologies: [
        'Python',
        'YOLOv8',
        'Roboflow',
        'Deep Learning',
        'Computer Vision',
      ],
      features: [
        'Medical image analysis',
        'Automated classification',
        'Multi-card segmentation',
        'Error reduction',
        'Robust preprocessing',
=======
>>>>>>> 8719df63029fb4be14546f7aefb3df5bd8fe0cdf
      ],
      github: 'https://github.com/ashifalam',
      demo: '#',
      // status: 'Production',
      company: 'Anand Neuburg Diagnostic Laboratory',
    },
    {
      title: 'Duplicate Question Pairs Detection',
      description:
        'Duplicate question pairs based on Quora questions that share identical or closely similar meanings, capturing semantic equivalence using advanced NLP techniques.',
      image: '/api/placeholder/400/250',
      technologies: ['Python', 'Machine Learning', 'NLTK', 'NLP'],
      features: [
        'Semantic equivalence detection',
        'TF-IDF implementation',
        'Word embeddings',
        'Deep learning models',
        'False positive minimization',
      ],
      github: 'https://github.com/ashifalam',
      demo: '#',
      status: 'Demo',
      company: 'Personal Project',
    },
    {
      title: 'Medical Diagnostic Application',
      description:
        'Developed an application using machine learning and deep learning to address challenges in interpreting laboratory test results, specifically focusing on TyphifastICT cards for classification.',
      image: '/api/placeholder/400/250',
      technologies: ['Python', 'YOLOv8', 'Roboflow', 'Deep Learning', 'Computer Vision'],
      features: [
        'Medical image analysis',
        'Automated classification',
        'Multi-card segmentation',
        'Error reduction',
        'Robust preprocessing',
      ],
      github: '#',
      demo: '#',
      status: 'Production',
      company: 'Anand Neuburg Diagnostic Laboratory',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <Section id="projects">
      <SectionHeader
        subtitle="What I've built"
        title="Featured Projects"
        description="A showcase of my professional work and personal projects demonstrating technical expertise and problem-solving skills"
      />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="h-full flex flex-col hover:shadow-2xl transition-all duration-300">
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-t-xl">
                <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <HiCode className="h-12 w-12 mx-auto mb-2" />
                    <p className="text-sm font-medium">{project.title}</p>
                  </div>
                </div>

                {/* Status Badge
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Production'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                    }`}
                  >
                    {project.status}
                  </span>
                </div> */}
              </div>

              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-1">
                      {project.title}
                    </CardTitle>
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                      {project.company}
                    </p>
                  </div>
                  {/* {project.status === 'Production' && (
                    <HiStar className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                  )} */}
                </div>
              </CardHeader>

              <CardBody className="flex-1 flex flex-col">
                <CardDescription className="mb-4 flex-1">
                  {project.description}
                </CardDescription>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {project.features
                      .slice(0, 3)
                      .map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start space-x-2"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                          <span className="text-xs text-gray-600 dark:text-gray-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                  </ul>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Projects Summary */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Card className="p-8">
          <CardBody>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              More Projects Available
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              These are just a few highlights from my portfolio. I have worked
              on 20+ projects ranging from enterprise applications to personal
              experiments. Each project has taught me valuable lessons and
              helped me grow as a developer.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                icon={FaGithub}
                onClick={() =>
                  window.open('https://github.com/ashifalam', '_blank')
                }
              >
                View All Projects
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  document
                    .querySelector('#contact')
                    .scrollIntoView({ behavior: 'smooth' })
                }
              >
                Let's Discuss Your Project
              </Button>
            </div>
          </CardBody>
        </Card>
      </motion.div>
    </Section>
  );
};

export default Projects;
