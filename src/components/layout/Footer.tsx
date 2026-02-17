import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ 
      padding: '2rem', 
      backgroundColor: '#343a40', 
      color: '#fff',
      textAlign: 'center',
      marginTop: 'auto'
    }}>
      <p style={{ margin: 0 }}>
        &copy; {new Date().getFullYear()} React TypeScript Project. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

