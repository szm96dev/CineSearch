import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

const BackButton = ({ 
  to = '/',
  children = 'Back to Search',
  className = ''
}) => {
  return (
    <Link
      to={to}
      className={cn(
        'inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors',
        className
      )}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      <span>{children}</span>
    </Link>
  );
};

export default BackButton;
