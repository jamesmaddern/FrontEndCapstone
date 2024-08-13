import { useRef } from "react";
import About from "../About";
import CallToAction from "../CallToAction";
import Highlights from "../Highlights";
import Testimonials from "../Testimonials"
function HomePage(props){
    
    return(
        <>
        <div ref={props.actionRef}>
            <CallToAction />
        </div>
        <div style={{height:"100px"}}></div>
        <Highlights />
        <Testimonials/>
        <div ref={props.aboutRef}>
            <About/>
        </div>
        </>
    )
}
export default HomePage;