import React from 'react';
import Products from './Products'; // Import the Products component
import AboutUs from './AboutUs'; // Import the AboutUs component
import ContactUs from './ContactUs'; // Import the ContactUs component

function Home() {
  return (
    <div className="container mb-5 d-flex flex-column justify-content-center align-items-center">
  <h1>Welcome to our Clothing Brand!</h1>
  <p>Explore our latest collections and trends.</p>

      {/* Render the Products component */}
      <Products />

      {/* Render the AboutUs component */}
      <AboutUs />

      {/* Render the ContactUs component */}
      <ContactUs />
    </div>
  );
}

export default Home;
