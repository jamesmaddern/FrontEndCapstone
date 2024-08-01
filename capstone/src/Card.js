export default function Card(props) {


    return (
        <div style={{
            backgroundColor: "#edefee",
            
            borderRadius: "16px",
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            gridTemplateRows: "15rem 2rem 6rem auto",

            gap: "10px"
        }}>


            <div id="image-container" style={{
                width: "100%",
                height: "100%",
                gridColumn: "span 3",
                overflow: "hidden"
            }}><img src={props.img}
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"

                }} /></div>
            <h2 style={{
                gridColumn:"span 2",
                padding: "10px",
                fontSize: "24pt"
            }}>{props.special}</h2>

            <h2 style={{
                color:"#ee9972",
                padding: "10px",
                fontSize: "24pt",
                justifySelf:"right",
            }}>{props.price}</h2>

            <p style={{
                margin:"0",
                gridColumn: "span 3",
                padding:"10px"
            }}>{props.desc}</p>

            <h3 style={{
                gridColumn:"span 3",
                padding:"10px",
                fontWeight:"700",
                fontSize:"16pt"
            }}>Order a delivery</h3>
        </div>


    )
}