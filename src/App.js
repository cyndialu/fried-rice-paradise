import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MenuPage from './pages/MenuPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <>
    <Header />  
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='menu' element={<MenuPage />} />
            <Route path='about' element={<AboutPage />} />
            <Route path='cart' element={<CartPage />} />
        </Routes>
    <Footer />
    </>
  );
}

export default App;
