import { SocialIcon } from 'react-social-icons';
import Logo from './assets/logos/Asset 18@4x.png'
import { Link } from 'react-router-dom';

const Footer = ({ scrollToAbout }) => {
    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(12,1fr)",
            gridTemplateRows: "repeat(9,20px)",
            gap: "20px",
            backgroundColor: "#495e57"

        }}>




            <img src={Logo} style={{
                gridColumn: "span 12",
                gridRow: "6",
                justifySelf: "center",

                width: "75px",
                filter: "brightness(2000%)",
            }}></img>

            <ul style={{
                margin: "0",
                gridColumn: "3/5",
                gridRow: "2",
                padding: "0",
                display: "flex",
                flexDirection: "column"

            }}>
                <h3 className='footer-header'>Navigation</h3>
                <Link className="footer-link" to="/">Home</Link>
                <Link className="footer-link" to="/" onClick={scrollToAbout}>About</Link>
                <Link className="footer-link" to="/">Menu</Link>
                <Link className="footer-link" to="booking">Reservations</Link>
                <Link className="footer-link" to="order">Order Online</Link>
                <Link className="footer-link" to="login">Login</Link>
            </ul>

            <section style={{
                gridColumn: "6/8",
                gridRow: "2"
            }}>
                <h3 className='footer-header'>Contact</h3>
                <p style={{
                    margin: "0",
                    color: "white"
                }}>Address: 123 Citrus Lane, Sunnyville, CA 90210<br></br>
                    Phone: (555) 678-2345<br />
                    Email: info@littlelemon.com<br />
                    Website: www.littlelemon.com</p>
            </section>
            <section style={{
                gridColumn: "9/11",
                gridRow: "2",

            }}>
                <h3 className='footer-header'>Social Media Links</h3>
                <div id="social-container" style={{
                    display:"grid",
                    gridTemplateColumns:"1fr 1fr 1fr",
                    
                    gap:"5px"
                }}>

                    <SocialIcon bgColor="white" fgColor="#495e57" url='www.instagram.com'/>
                    
                    <SocialIcon bgColor="white" fgColor="#495e57" url='www.facebook.com' />
                    
                    <SocialIcon bgColor="white" fgColor="#495e57" url="www.x.com" />
                   
                </div>
            </section>

        </div>
    )
}

export default Footer;