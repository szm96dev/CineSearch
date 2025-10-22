import React from 'react';
import { cn } from '../../utils/cn';

const RatingBadge = ({ 
  source, 
  value, 
  className = '',
  variant = 'default'
}) => {
  const variants = {
    default: 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white',
    primary: 'bg-blue-600 text-white',
    success: 'bg-green-600 text-white',
    warning: 'bg-yellow-600 text-white'
  };

  return (
    <div className={cn(
      'px-3 py-2 rounded-lg text-sm font-medium',
      variants[variant],
      className
    )}>
      <span className="font-medium">{source}</span>
      <span className="ml-2 font-bold">{value}</span>
    </div>
  );
};

export default RatingBadge;
