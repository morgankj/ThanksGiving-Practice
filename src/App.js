// Styles
import styled from 'styled-components';
import './App.css';
import { Route, Routes } from 'react-router-dom';
// Components
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Home from './Components/Home';

export default function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Nav/>
        
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>


        <div className="push"></div>
      </div>
      <Footer/>
    </div>
  );
}