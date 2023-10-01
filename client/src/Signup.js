// // Signup.js
// import React from 'react';
// import withNavbar from './Layout';

// const Signup = () => {
//     return (
//         <div>
//             <h2>Sign up</h2>
//             <form>
//                 <div>
//             <label htmlFor="username">Username:</label>
//             <input type="text" id="username" name="username" />
//                 </div>
//                 <div>
//                     <label htmlFor="password">Password:</label>
//                     <input type="password" id="password" name="password" />
//                 </div>
//                 <div>
//                     <label htmlFor="confirmPassword">Conform Password:</label>
//                     <input type="password" id="confrimPassword" name="confirmPassword" />
//                 </div>
//             </form>

            
//         </div>
//     );
// };

// export default withNavbar(Signup);
// Signup.js


import React, { useState } from 'react';
import withNavbar from './Layout'
function Signup() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Perform form validation, API request, and success/error handling here

        // Reset the form
        setFormData({
            name: '',
            email: '',
            password: '',
        });
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default withNavbar(Signup);

