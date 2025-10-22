import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './index';

const EmptyState = ({ 
  icon = '🎬',
  title,
  description,
  actionText = 'Go Back',
  actionLink = '/',
  className = ''
}) => {
  return (
    <div className={`text-center py-12 ${className}`}>
      <div className="text-6xl mb-4">{icon}</div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        {description}
      </p>
      {actionLink === '#' ? (
        <Button variant="primary" className="cursor-default">
          {actionText}
        </Button>
      ) : (
        <Link to={actionLink}>
          <Button variant="primary">
            {actionText}
          </Button>
        </Link>
      )}
    </div>
  );
};

export default EmptyState;
