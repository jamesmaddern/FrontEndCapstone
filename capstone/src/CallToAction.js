import Food from './assets/icons_assets/restauranfood.jpg'
export default function CallToAction() {
    return (
        <section style={{
            margin: "0",
            paddingTop:"5em",
            padding: "0",
            boxSizing: "border-box",
            backgroundColor: "#495e57",
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",

            gap: "20px",
            gridTemplateRows: "25em",
            alignItems: "center",


        }}>
            <div id='left' style={{

                gridColumn: "3/7",
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                columnGap: "20px"
            }}>
                <h1 style={{ color: '#f4ce14', gridColumn: 'span 4' }}>Little Lemon</h1>
                <h2 style={{ color: 'white', gridColumn: 'span 4' }}>Chicago</h2>
                <h3 style={{ color: 'white', gridColumn: 'span 4',marginTop:"15px",marginBottom:"15px" }}>
                    We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                </h3>
                <div style={{
                    gridColumn: "span 2",
                    textAlign: 'center',
                    boxShadow: "0",
                    padding: "20px",
                    backgroundColor: "#f4ce14",
                    borderRadius: "16px",
                    fontFamily: "Karla, sans-serif",
                    fontOpticalSizing: "auto",
                    fontWeight: "700",
                    fontStyle: "normal",
                    fontSize: "18pt"
                }}>Reserve a Table</div>
            </div>
            <div id='image-container' style={{
                width:"400px",
                height:"400px",
                overflow:"hidden",
                gridColumn: "8/11",
                justifySelf: 'right',
                borderRadius: "16px",
                marginTop: "100px"
            }}>
                <img src={Food} style={{
                    width:"100%",
                    height:"100%",
                    objectFit:"cover"
                }} />
            </div>

        </section>
    )
}