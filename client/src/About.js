// About.js
import React from 'react';
import withNavbar from './Layout';

const About = () => {
  return (
    <div>
      <h2>About Us</h2>
      <p>Learn more about our company and our mission.</p>
    </div>
  );
};

export default withNavbar(About);
