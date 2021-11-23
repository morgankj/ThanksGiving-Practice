// Styles
// import styled from 'styled-components';
import './App.css';
import { Route, Routes } from 'react-router-dom';
// Components
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Birds from './Components/Birds';
import About from './Components/About';

export default function App() {
  return (
    <div className="App">
      <div className="wrapper"> {/* <<<   Pushes footer down*/}
        <Nav/>
        
        <Routes>
          <Route path='/about' element={<About />}></Route>
          <Route path='/birds' element={<Birds />}></Route>
          <Route path='/' element={<Home />}></Route>
        </Routes>

        <div className="push"></div> {/* <<<   Pushes footer down*/}
      </div>
      <Footer/>
    </div>
  );
}