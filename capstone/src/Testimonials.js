import { ReviewCard } from "./Card"
import basket from "./assets/icons_assets/Basket.svg"

const reviews = [
    {
        name: "James",
        photo: basket,
        rating: 5,
        review: "yummy"
    },
    {
        name: "Laura",
        photo: basket,
        rating: 5,
        review: "yummy"
    },
    {
        name: "Aaron",
        photo: basket,
        rating: 5,
        review: "yummy"

    },
    {
        name: "Ashley",
        photo: basket,
        rating: 5,
        review: "yummy"
    }]
export default function Testimonials() {
    return (
        <div style={{
            backgroundColor: "#f4ce14",
            display: "grid",
            gridTemplateColumns: "repeat(12,1fr)",

            gap: "20px"
        }}>
            <div style={{
                gridColumn: "3/11",
                gridRow: "2",
                textAlign: "center"
            }}><h1>Testimonials</h1></div>
            <div id="card-container"
                style={{
                    gridRow: "4",
                    gridColumn: "3/11",
                  
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr 1fr",
                    gap: "20px"
                }}>

                {reviews.map((review) => {
                    return (<ReviewCard
                        name={review.name}
                        photo={review.photo}
                        rating={review.rating}
                        review={review.review} />)
                })}
            </div>

        </div>
    )
}