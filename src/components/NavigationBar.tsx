import React from 'react';

const NavigationBar: React.FunctionComponent = ({ children }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <span className="navbar-brand mb-0 h1">Star Wars Characters</span>
      {children}
    </nav>
  );
};

export default NavigationBar;
