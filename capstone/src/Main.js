import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from './pages/HomePage.js'
import BookingPage from './pages/BookingPage.js'
function Main() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="booking" element={<BookingPage />}></Route>
        </Routes>
        </BrowserRouter>
    )
}
export default Main;