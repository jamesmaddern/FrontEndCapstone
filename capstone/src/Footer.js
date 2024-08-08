import Logo from './assets/logos/Asset 7@4x.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(12,1fr)",
            gridTemplateRows:"repeat(6,20px)",
            gap: "20px",
            backgroundColor: "#495e57"
            
        }}>



            <img src={Logo} style={{
                gridColumn: "3",
                gridRow:"2",
                width:"80px",
                filter:"brightness(2000%)",
                justifySelf:"center"
            }}></img>
            <ul style={{
                margin:"0",
                gridColumn: "4",
                gridRow:"2",
                padding: "0",
                display:"flex",
                flexDirection:"column"

            }}>
                <h3>Navigation</h3>
                <Link className="footer-link" to="/">Home</Link>
                <Link className="footer-link" to="about">About</Link>
                <Link className="footer-link" to="/">Menu</Link>
                <Link className="footer-link" to="booking">Reservations</Link>
                <Link className="footer-link" to="order">Order Online</Link>
                <Link className="footer-link" to="login">Login</Link>
            </ul>

            <section style={{
                gridColumn: "7",
                gridRow: "2"
            }}>
                <h3>Contact</h3>
            </section>
            <section style={{
                gridColumn: "9/11",
                gridRow:"2",
                justifySelf:"right"
            }}>
                Social Media Links
            </section>

        </div>
    )
}

export default Footer;