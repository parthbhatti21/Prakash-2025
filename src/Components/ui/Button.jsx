import React from 'react';

export const Button = ({ children, ...props }) => {
  return (
    <button {...props} className="px-4 py-2 bg-cyan-400 text-white rounded hover:bg-cyan-500">
      {children}
    </button>
  );
};
