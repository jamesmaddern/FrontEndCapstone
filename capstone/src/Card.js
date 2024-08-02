import star from "./assets/icons_assets/star.svg"
export function SpecialCard(props) {
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
                gridColumn: "span 2",
                padding: "10px",
                fontSize: "24pt"
            }}>{props.special}</h2>

            <h2 style={{
                color: "#ee9972",
                padding: "10px",
                fontSize: "24pt",
                justifySelf: "right",
            }}>{props.price}</h2>

            <p style={{
                margin: "0",
                gridColumn: "span 3",
                padding: "10px"
            }}>{props.desc}</p>

            <h3 style={{
                gridColumn: "span 3",
                padding: "10px",
                fontWeight: "700",
                fontSize: "16pt"
            }}>Order a delivery</h3>
        </div>


    )
}
export function ReviewCard(props) {
    return (
        <div style={{
            display:"grid",
            gridTemplateColumns:"1fr 1fr 1fr",
            gap:"20px",
            padding:"20px",
            backgroundColor:"white",
            borderRadius:"16px"
        }}>
            <h3 style={{
                gridColumn:"span 3"
            }}>{props.name}</h3>
            <img src={props.photo} style={{
                gridColumn:"1"
            }} />
            <div style={{
                gridColumn:"2/4"
            }}>{props.review}</div>
            <h2>{props.rating}<img src={star} height="15px" style={{
                fill:"yellow"
            }}/></h2>
        </div>
    )
}