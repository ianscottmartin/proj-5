// Contact.js
import React from 'react';
import withNavbar from './Layout';

const Contact = () => {
    return (
        <div>
            <h2>Contact Us</h2>
            <p>Have questions or feedback? We'd love to hear from you.</p>
        </div>
    );
};

export default withNavbar(Contact);