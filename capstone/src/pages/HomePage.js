import About from "../About";
import CallToAction from "../CallToAction";
import Highlights from "../Highlights";
import Testimonials from "../Testimonials"
function HomePage(){
    return(
        <>
        <CallToAction />
        <div style={{height:"100px"}}></div>
        <Highlights />
        <Testimonials/>
        <About />
        </>
    )
}
export default HomePage;