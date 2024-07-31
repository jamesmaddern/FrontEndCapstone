import Logo from './.\\assets\\icons_assets\\Logo.svg'

const Footer = () => {
    return (
        <footer style={{display:"flex"}}>
            <nav style={{display:"flex"}}>
                <img src={Logo}></img>
                <ul>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Menu</a></li>
                    <li><a>Reservations</a></li>
                    <li><a>Order Online</a></li>
                    <li><a>Login</a></li>
                </ul>
            </nav>
            <section>
                Contact
            </section>
            <section>
                Social Media Links
            </section>
        </footer>
    )
}

export default Footer;