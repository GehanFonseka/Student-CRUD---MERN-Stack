import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div className="container">
        <p style={textStyle}>© 2024 Student CRUD. All rights reserved.</p>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#282c34',
  color: '#fff',
  padding: '10px 0',
  textAlign: 'center',
  position: 'fixed',
  left: '0',
  bottom: '0',
  width: '100%',
};

const textStyle = {
  margin: '0',
};

export default Footer;
