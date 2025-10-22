import React from 'react';
import { EmptyState } from '../components/ui';

const NotFound = () => {
  return (
    <EmptyState
      icon="404"
      title="Page Not Found"
      description="The page you're looking for doesn't exist."
      actionText="Go Home"
      actionLink="/"
    />
  );
};

export default NotFound;
