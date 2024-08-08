import Logo from './.\\assets\\icons_assets\\Logo.svg'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(12,1fr)",
            gap: "20px",
            backgroundColor: "#495e57"
            
        }}>



            <img src={Logo} style={{
                gridColumn: "3/5"
            }}></img>
            <ul style={{
                gridColumn: "5",
                padding: "0",
                display:"flex",
                flexDirection:"column"

            }}>
                <Link className="footer-link" to="/">Home</Link>
                <Link className="footer-link" to="about">About</Link>
                <Link className="footer-link" to="/">Menu</Link>
                <Link className="footer-link" to="booking">Reservations</Link>
                <Link className="footer-link" to="order">Order Online</Link>
                <Link className="footer-link" to="login">Login</Link>
            </ul>

            <section style={{
                gridColumn: "7"
            }}>
                Contact
            </section>
            <section style={{
                gridColumn: "9"
            }}>
                Social Media Links
            </section>

        </div>
    )
}

export default Footer;