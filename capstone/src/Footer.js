import Logo from './.\\assets\\icons_assets\\Logo.svg'

const Footer = () => {
    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(12,1fr)",
            gap: "20px",
            backgroundColor: "#333333"
        }}>



            <img src={Logo} style={{
                gridColumn:"3"
            }}></img>
            <ul style={{
                gridColumn:"5",
                padding:"0",
                
            }}>
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Menu</a></li>
                <li><a>Reservations</a></li>
                <li><a>Order Online</a></li>
                <li><a>Login</a></li>
            </ul>

            <section style={{
                gridColumn:"7"
            }}>
                Contact
            </section>
            <section style={{
                gridColumn:"9"
            }}>
                Social Media Links
            </section>

        </div>
    )
}

export default Footer;