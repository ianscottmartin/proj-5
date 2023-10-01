import React from 'react';
import withNavbar from './Layout';

 function Reviews() {
    return (
        <div>
            <h2>Reviews</h2>
            <p>
            See our latest reviews
            </p>
        </div>
    );
 }
 export default withNavbar(Reviews);