import './App.css';
import Nav from './Nav.js'
import Main from './Main.js'
import Footer from './Footer.js'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import BookingPage from './pages/BookingPage.js';
import HomePage from './pages/HomePage.js';
import { useEffect, useRef, useState } from 'react';
function App() {
  const aboutRef = useRef();
  const navigate = useNavigate();
  const [scrollToAbout, setScrollToAbout] = useState(false);

  const handleScrollToAbout= () =>{
    if (window.location.pathname !== '/'){
      setScrollToAbout(true);
      navigate('/');
    } else {
      aboutRef.current.scrollIntoView({behavior:'smooth'});
    }
  };

  useEffect(() => {
    if (scrollToAbout && aboutRef.current){
      aboutRef.current.scrollIntoView({ behavior:'smooth'});
      setScrollToAbout(false);
    }
  }, [scrollToAbout, aboutRef]);





  return (

    <>
      
      <Nav scrollToAbout={handleScrollToAbout}/>
        <Routes>
            <Route path="/" element={<HomePage aboutRef={aboutRef} />}></Route>
            <Route path="booking" element={<BookingPage />}></Route>
        </Routes>
      <Footer></Footer>
     
    </>
  );
}

export default App;
