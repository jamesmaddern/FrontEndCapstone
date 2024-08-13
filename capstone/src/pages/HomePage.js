import { useEffect, useRef, useState } from "react";
import About from "../About";
import CallToAction from "../CallToAction";
import CallToActionMd from "../CallToAction-md";
import Highlights from "../Highlights";
import Testimonials from "../Testimonials";
import useWindowDimensions from "../useWindowDimensions";

function HomePage({aboutRef}) {
  const dims = useWindowDimensions()
  const [matches, setMatches] = useState(dims.width > 1400);
  useEffect(() => {
    setMatches(dims.width > 1400);
    
  }, [dims]);
  
  return (
    <>
      
        {!matches && <CallToActionMd />}
        {matches && <CallToAction />}
      
      <div style={{ height: "100px" }}></div>
      <Highlights />
      <Testimonials />
      <div ref={aboutRef}>
        <About />
      </div>
    </>
  );
}
export default HomePage;
