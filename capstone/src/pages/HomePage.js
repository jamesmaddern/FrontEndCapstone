import { useRef } from "react";
import About from "../About";
import CallToAction from "../CallToAction";
import Highlights from "../Highlights";
import Testimonials from "../Testimonials"
function HomePage( {aboutRef}){
    
    return(
        <>
        <CallToAction />
        <div style={{height:"100px"}}></div>
        <Highlights />
        <Testimonials/>
        <div ref={aboutRef}>
        <About/>
        </div>
        </>
    )
}
export default HomePage;