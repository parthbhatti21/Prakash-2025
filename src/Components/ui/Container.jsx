import React from 'react';

export const Container = ({ children, className, ...props }) => {
  return (
    <div {...props} className={`max-w-7xl mx-auto ${className}`}>
      {children}
    </div>
  );
};
