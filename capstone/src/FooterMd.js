import { SocialIcon } from "react-social-icons";
import Logo from "./assets/logos/Asset 18@4x.png";
import { Link } from "react-router-dom";

const FooterMd = ({ scrollToAbout }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(12,1fr)",
        gridTemplateRows: "repeat(14,20px)",
        gap: "20px",
        backgroundColor: "#495e57",
      }}
    >
      <img
        src={Logo}
        style={{
          gridColumn: "span 12",
          gridRow: "10",
          justifySelf: "center",

          width: "75px",
          filter: "brightness(2000%)",
        }}
      ></img>

      <ul
        style={{
          margin: "0",
          gridColumn: "3/7",
          gridRow: "2",
          padding: "0",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h3 className="footer-header">Navigation</h3>
        <Link className="footer-link" to="/">
          Home
        </Link>
        <Link className="footer-link" to="/" onClick={scrollToAbout}>
          About
        </Link>
        <Link className="footer-link" to="/">
          Menu
        </Link>
        <Link className="footer-link" to="booking">
          Reservations
        </Link>
        <Link className="footer-link" to="order">
          Order Online
        </Link>
        <Link className="footer-link" to="login">
          Login
        </Link>
      </ul>

      <section
        style={{
          gridColumn: "7/11",
          gridRow: "2",
        }}
      >
        <h3 className="footer-header">Contact</h3>
        <p
          style={{
            margin: "0",
            color: "white",
          }}
        >
          Address: 123 Citrus Lane, Sunnyville, CA 90210<br></br>
          Phone: (555) 678-2345
          <br />
          Email: info@littlelemon.com
          <br />
          Website: www.littlelemon.com
        </p>
      </section>
      <section
        style={{
          gridColumn: "3/11",
          gridRow: "7",
        }}
      >
        
        <div
          id="social-container"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",

            gap: "5px",
          }}
        >
          <SocialIcon
          style={{margin:"auto"}} 
            bgColor="white"
            fgColor="#495e57"
            url="www.instagram.com"
            
          />

          <SocialIcon
          style={{margin:"auto"}} 
            bgColor="white"
            fgColor="#495e57"
            url="www.facebook.com"
          />

          <SocialIcon style={{margin:"auto"}} bgColor="white" fgColor="#495e57" url="www.x.com" />
        </div>
      </section>
    </div>
  );
};

export default FooterMd;
