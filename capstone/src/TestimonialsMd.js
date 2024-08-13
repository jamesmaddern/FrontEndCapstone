import { ReviewCard } from "./Card"
import basket from "./assets/icons_assets/Basket.svg"
import user1 from "./assets/user1.jpg"
import user2 from "./assets/user2.jpg"
import user3 from "./assets/user3.jpg"
import user4 from "./assets/user4.jpg"

const reviews = [
    {
        name: "James",
        photo: user1,
        rating: 5,
        review: "An absolute gem with exceptional flavors and warm, attentive service—every bite was a delight!"
    },
    {
        name: "Laura",
        photo: user4,
        rating: 5,
        review: "A perfect dining experience with beautifully presented dishes and a cozy, inviting atmosphere."
    },
    {
        name: "Aaron",
        photo: user2,
        rating: 5,
        review: "The fusion of flavors here is outstanding, paired with impeccable service that made our meal unforgettable."

    },
    {
        name: "Ashley",
        photo: user3,
        rating: 5,
        review: "A hidden treasure where every dish is crafted with care, making it a must-visit for food lovers."
    }]
export default function TestimonialsMd() {
    return (
        <div style={{
            backgroundColor: "#f4ce14",
            display: "grid",
            gridTemplateColumns: "repeat(12,1fr)",
            gridTemplateRows:"repeat(6,1fr)",
            
            gap: "20px"
        }}>
            <div style={{
                gridColumn: "3/11",
                gridRow: "2",
                textAlign: "center"
                
            }}><h1>Testimonials</h1></div>
            <div id="card-container"
                style={{
                    gridRow: "span 3",
                    gridColumn: "3/11",
                    
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "20px"
                }}>

                {reviews.map((review, index) => {
                    return (<ReviewCard
                        key={index}
                        name={review.name}
                        photo={review.photo}
                        rating={review.rating}
                        review={review.review} />)
                })}
            </div>

        </div>
    )
}