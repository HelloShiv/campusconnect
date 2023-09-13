import React from 'react';
import '../styles/NotFound.css';

function NotFound() {
  return (
    <div className="not-found">
      <div className="centered-content">
        <h2>404 - Page Not Found</h2>
        <p>Sorry, the page you are looking for does not exist.</p>
        {/* You can add a link to the home page or any other page here */}
      </div>
    </div>
  );
}

export default NotFound;
