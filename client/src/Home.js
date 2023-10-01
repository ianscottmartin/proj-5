// Home.js
import React from 'react';
import withNavbar from './Layout';

const Home = () => {
  return (
    <div>
      <h2>Welcome to Our Artists Reviews</h2>
      <p>We are excited to have you here! Explore our site to learn more about Artists.</p>
    </div>
  );
};

export default withNavbar(Home);

