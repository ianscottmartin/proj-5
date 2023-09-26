import React from 'react';

const Contact = () => {
    return (
        <div>
            <h2>Contact Us</h2>
            <p>
                Have questions or feedback? We'd love to hear from you. Feel free to reach out to us using the form below or through our contact information.
            </p>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Your Name" />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Your Email" />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" placeholder="Your Message" rows="4"></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
            <div>
                <h3>Contact Information</h3>
                <p>Email: contact@example.com</p>
                <p>Phone: +1 (123) 456-7890</p>
                <p>Address: 123 Main Street, City, Country</p>
            </div>
        </div>
    );
};

export default Contact;
