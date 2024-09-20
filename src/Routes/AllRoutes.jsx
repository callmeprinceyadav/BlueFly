import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Home from '../components/Home/Home';
import Footer from '../components/Footer/Footer';
import Login from '../components/Login/Login';
import HomeLog from '../components/Home/HomeLog';
import Signup from '../components/Signup/Signup';
import Profile from '../components/Profile/Profile';
import Cart from '../components/Cart/cart';



const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/homelog" element={<HomeLog />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
