import Image1 from "./assets/icons_assets/restaurant.jpg"
import Image2 from "./assets/icons_assets/Mario and Adrian A.jpg"
export default function About() {
    return (
        <>
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(12, 1fr)",
                gridTemplateRows: "repeat(11, 40px)",
                gap: "20px",
            }}>
                <div id="text-container" style={{
                    marginTop: "100px",
                    marginBottom: "100px",
                    gridColumn: "3/7",
                    gridRow: "2"
                }}>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                </div>

                <div id='image-container1' style={{
                    gridColumn: "7/11",
                    gridRow: "3",
                    width: "55%",
                    height: "400px",
                    overflow: "hidden",
                    borderRadius: "16px",
                    boxShadow: "1px 1px 5px #aaaaaa",

                }}>
                    <img src={Image1} style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                    }} /></div>
                <div id='image-container2' style={{
                    gridColumn: "7/11",
                    gridRow: "2",
                    boxShadow: "1px 1px 5px #aaaaaa",

                    width: "55%",
                    height: "400px",
                    overflow: "hidden",
                    borderRadius: "16px",
                    justifySelf: "right"
                }}>
                    <img src={Image2} style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                    }} />
                </div>



            </div>
        </>
    )
}