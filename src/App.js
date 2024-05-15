import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer'; // Import the Footer component
import Home from './Home';
import AboutUs from './AboutUs';
import Products from './Products';
import ContactUs from './ContactUs';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer /> {/* Include the Footer component */}
      </div>
    </Router>
  );
}

export default App;
