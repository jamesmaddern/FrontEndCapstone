export default function Card(props) {
    return (
        <div style={{
            backgroundColor: "#edefee",
            margin: "10px",
            borderRadius:"16px",
            overflow:"hidden"
        }}>
            <img src={props.img}
                style={{
                    width: "100%"
                }} />
            <div id="content-container" style={{
                display:"grid",
                gap:"10px",
                gridTemplateColumns:"3fr 1fr",
                margin:"10px"
            }}>
                <h3>{props.special}</h3>
                <h3>{props.price}</h3>
                <p style={{
                    gridColumn:"span 2"
                }}>{props.desc}</p>
                <h3>Order a delivery</h3>
            </div>

        </div>
    )
}