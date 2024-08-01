import Card from "./Card";
import GreekSaladImage from './assets/icons_assets/greek salad.jpg'
const cardContent = [
    {
        special:"Greek Salad",
        price:"$12.99",
        img:GreekSaladImage,
        desc:"example text"
    },
    {
        special:"Greek Salad",
        price:"$12.99",
        img:GreekSaladImage,
        desc:"example text"
    },
    {
        special:"Greek Salad",
        price:"$12.99",
        img:GreekSaladImage,
        desc:"example text"
    }
]

export default function Highlights() {
    return (
        <div style={{
            backgroundColor: "white",
            height: "40em",
            display: "grid",
            gridTemplateColumns: "repeat(12,1fr)",
            //gridTemplateRows: "repeat(50,1fr)",
            gap: "20px"
        }}>
            <h1 style={{
                gridColumn: "3/9",
                gridRow: "3/9"
            }}>This weeks specials!</h1>
            <div style={{
                gridRow: "4/4",
                gridColumn: "9/11",
                textAlign: 'center',
                boxShadow: "0",
                padding: "20px",
                backgroundColor: "#f4ce14",
                borderRadius: "16px",
                fontFamily: "Karla, sans-serif",
                fontOpticalSizing: "auto",
                fontWeight: "700",
                fontStyle: "normal",
                fontSize: "18pt",

            }}>Online Menu</div>
            <section style={{
                backgroundColor:"white",
                gridColumn:"3/11",
                gridRow:"5",
                display:"grid",
                gridTemplateColumns:"1fr 1fr 1fr"
            }}>


                {cardContent.map((item)=>{
                    return(
                    <Card img={item.img}
                    special={item.special}
                    price={item.price}
                    desc={item.desc}/>)
                })}
                
            </section>
        </div>
    )
}