import React from 'react';

export const Card = ({ children, className, ...props }) => {
  return (
    <div {...props} className={`p-4 rounded shadow-md ${className}`}>
      {children}
    </div>
  );
};
