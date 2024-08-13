import {SpecialCard} from "./Card.js";
import GreekSaladImage from './assets/icons_assets/greek salad.jpg'
import BruchettaImage from './assets/icons_assets/bruchetta.svg'
import LemonImage from './assets/icons_assets/lemon dessert.jpg'
const cardContent = [
    {
        special:"Greek Salad",
        price:"$12.99",
        img:GreekSaladImage,
        desc:"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
    },
    {
        special:"Bruchetta",
        price:"$5.99",
        img:BruchettaImage,
        desc:"Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
    },
    {
        special:"Lemon Dessert",
        price:"$5.00",
        img:LemonImage,
        desc:"This comes straight from grandma's recipe book, every last ingredient has been sourced and is authentic as can be imagined."
    }
]

export default function HighlightsMd() {
    return (
        <div style={{
            backgroundColor: "white",
            display: "grid",
            gridTemplateColumns: "repeat(12,1fr)",
            //gridTemplateRows: "repeat(50,1fr)",
            gap: "20px"
        }}>
            <h1 style={{
            
                gridColumn: "3/11",
                gridRow: "3"
            }}>This weeks specials!</h1>
            <div style={{
                gridRow: "4/4",
                gridColumn: "3/11",
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
                gridTemplateColumns:"1fr",
                gap:"20px"
            }}>


                {cardContent.map((item, index)=>{
                    return(
                    <SpecialCard key={index}
                    img={item.img}
                    special={item.special}
                    price={item.price}
                    desc={item.desc}/>)
                })}
                
            </section>
            <div style={{gridRow:"6",height:"10px", width:"100%", backgroundColor:"white"}}></div>
        </div>
    )
}