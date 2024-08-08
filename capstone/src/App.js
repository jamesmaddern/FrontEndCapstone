import './App.css';
import Nav from './Nav.js'
import Main from './Main.js'
import Footer from './Footer.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookingPage from './pages/BookingPage.js';
import HomePage from './pages/HomePage.js';
function App() {
  return (

    <>
      <BrowserRouter>
      <Nav></Nav>
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="booking" element={<BookingPage />}></Route>
        </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
