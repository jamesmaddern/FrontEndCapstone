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
  const [scrollToAbout, setScrollToAbout] = useState(false);

  const handleClick= () =>{
    setScrollToAbout(true);
  };

  useEffect(() => {
    if(scrollToAbout && aboutRef){
      aboutRef.current.scrollIntoView();
      setScrollToAbout(false);
    }
  
  }, [scrollToAbout]);





  return (

    <>
      
      <Nav handleClick={handleClick}/>
        <Routes>
            <Route path="/" element={<HomePage aboutRef={aboutRef} />}></Route>
            <Route path="booking" element={<BookingPage />}></Route>
        </Routes>
      <Footer></Footer>
     
    </>
  );
}

export default App;
