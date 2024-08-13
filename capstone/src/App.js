import "./App.css";
import Nav from "./Nav.js";
import NavMd from "./NavMd.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import BookingPage from "./pages/BookingPage.js";
import HomePage from "./pages/HomePage.js";
import { useEffect, useRef, useState } from "react";
import useWindowDimensions from "./useWindowDimensions.js";
import FooterMd from "./FooterMd.js";
function App() {
  console.log("Rendering App...");
  const aboutRef = useRef();
  const [scrollToAbout, setScrollToAbout] = useState(false);
  const dims = useWindowDimensions()
  const [matches, setMatches] = useState(dims.width > 1400);
  useEffect(() => {
    setMatches(dims.width > 1400);
    
  }, [dims]);


  const handleClick = () => {
    setScrollToAbout(true);
  };

  useEffect(() => {
    if (scrollToAbout && aboutRef) {
      aboutRef.current.scrollIntoView();
      setScrollToAbout(false);
    }
  }, [scrollToAbout]);

  return (
    <>
      {!matches && <NavMd handleClick={handleClick}/>}
      {matches && <Nav handleClick={handleClick}/>}
      
      <Routes>
        <Route path="/" element={<HomePage aboutRef={aboutRef}/>}/>
        <Route path="booking" element={<BookingPage />}></Route>
      </Routes>
      {!matches && <FooterMd/>}
      {matches && <Footer/>}
      
    </>
  );
}

export default App;
