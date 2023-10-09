// About.js
import React from 'react';
import withNavbar from './Layout';

const About = () => {
  return (
    <div>
      <h2>Artists</h2>
      <p>Learn more about our artists and our museums.</p>
      <div>
        <h2>Featured Artists</h2>
        <p>Vincent van Gogh</p>
        <p>Pablo Picasso</p>
        <p>Leonardo da Vinci</p>
        <p>Claude Monet</p>
        <p>Michelangelo</p>

      </div>
    </div>

  );
};

export default withNavbar(About);
