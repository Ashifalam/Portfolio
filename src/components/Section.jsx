import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Section = ({
  id,
  children,
  className = '',
  background = 'bg-white dark:bg-secondary-900',
  padding = 'section-padding',
  container = true,
  ...props
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id={id}
      className={`${background} ${padding} ${className}`}
      ref={ref}
      {...props}
    >
      {container ? (
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            {children}
          </motion.div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          {children}
        </motion.div>
      )}
    </section>
  );
};

// Section Header Component
export const SectionHeader = ({
  title,
  subtitle,
  description,
  centered = true,
  className = '',
}) => (
  <div className={`${centered ? 'text-center' : ''} mb-12 ${className}`}>
    {subtitle && (
      <motion.p
        className="text-primary-600 font-medium text-sm uppercase tracking-wider mb-2"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {subtitle}
      </motion.p>
    )}

    <motion.h2
      className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 dark:text-white mb-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
    >
      {title}
    </motion.h2>

    {description && (
      <motion.p
        className="text-lg text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {description}
      </motion.p>
    )}
  </div>
);

export default Section;
