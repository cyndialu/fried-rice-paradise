import React from 'react';
import './App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MenuPage from './pages/MenuPage';
import ContactPage from './pages/ContactPage';
import { Container } from 'reactstrap';

function App() {
  return (
    <>
    <Header />
    {/* <Container fluid className="App"> */}
        
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='about' element={<AboutPage />} />
            <Route path='menu' element={<MenuPage />} />
            <Route path='contact' element={<ContactPage />} />
        </Routes>
    {/* </Container> */}
    </>
  );
}

export default App;
