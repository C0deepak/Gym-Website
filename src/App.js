import React from 'react';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home'
import Product from './pages/product/Product'
import Footer from './components/footer/footer';

function App() {
  return (
    <>
      <Router>

        <Navbar/>

        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/product' element={<Product/>}></Route>
        </Routes>

        <Footer/>

      </Router>
      
    </>
  );
}

export default App;
