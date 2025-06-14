
import { motion } from 'framer-motion';
import { getCardClasses } from '../styles/design-system';

const Card = ({
  children,
  variant = 'default',
  className = '',
  padding = 'p-6',
  hover = true,
  onClick,
  ...props
}) => {
  const cardClasses = `${getCardClasses(variant)} ${padding} ${className}`;

  const MotionDiv = motion.div;

  return (
    <MotionDiv
      className={cardClasses}
      onClick={onClick}
      whileHover={hover ? { y: -2, scale: 1.02 } : {}}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </MotionDiv>
  );
};

// Card Header Component
export const CardHeader = ({ children, className = '' }) => (
  <div className={`mb-4 ${className}`}>{children}</div>
);

// Card Body Component
export const CardBody = ({ children, className = '' }) => (
  <div className={`${className}`}>{children}</div>
);

// Card Footer Component
export const CardFooter = ({ children, className = '' }) => (
  <div
    className={`mt-4 pt-4 border-t border-secondary-200 dark:border-secondary-700 ${className}`}
  >
    {children}
  </div>
);

// Card Title Component
export const CardTitle = ({ children, className = '' }) => (
  <h3
    className={`text-xl font-semibold text-secondary-900 dark:text-white ${className}`}
  >
    {children}
  </h3>
);

// Card Description Component
export const CardDescription = ({ children, className = '' }) => (
  <p className={`text-secondary-600 dark:text-secondary-300 ${className}`}>
    {children}
  </p>
);

export default Card;
