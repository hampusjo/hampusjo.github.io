import React from 'react';

const Badge = ({ children }) => (

    <span className="bg-gray-200 text-xs font-medium me-2 px-2.5 py-0.5 rounded-md dark:bg-neutral-600 dark:text-gray-200 border border-gray-600 dark:border-gray-400">
      {children}
    </span>
    
  );

  export default Badge;

  