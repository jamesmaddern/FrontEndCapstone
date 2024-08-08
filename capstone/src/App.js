import './App.css';
import Nav from './Nav.js'
import Main from './Main.js'
import Footer from './Footer.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookingPage from './pages/BookingPage.js';
import HomePage from './pages/HomePage.js';
import { useRef } from 'react';
function App() {
  const aboutRef = useRef();

  const scrollToAbout = () => {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (

    <>
      <BrowserRouter>
      <Nav scrollToAbout={scrollToAbout}/>
        <Routes>
            <Route path="/" element={<HomePage aboutRef={aboutRef} />}></Route>
            <Route path="booking" element={<BookingPage />}></Route>
        </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
