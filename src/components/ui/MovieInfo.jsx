import React from 'react';
import { cn } from '../../utils/cn';

const MovieInfo = ({ 
  label,
  value,
  className = ''
}) => {
  if (!value || value === 'N/A') return null;

  return (
    <div className={cn('', className)}>
      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
        {label}
      </h4>
      <p className="text-gray-600 dark:text-gray-400">
        {value}
      </p>
    </div>
  );
};

export default MovieInfo;
