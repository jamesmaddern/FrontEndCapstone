import Logo from "./.\\assets\\icons_assets\\Logo.svg";
import Logo2 from './assets/logos/Asset 18@4x.png'
import BurgerWhite from "./assets/icons_assets/hamburgerWhite.svg";
import BurgerBlack from "./assets/icons_assets/hamburger.svg";
import * as React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Nav.css";

const NavMd = ({ handleClick }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const openHamburger = () => {
    setMenuVisible(!menuVisible)
  };

  useEffect(()=>{console.log(menuVisible)},[menuVisible])
  return (
    <>
      <div
        id="top-nav"
        style={{
          width: "100%",

          position: "fixed",
          backgroundColor: "white",
          margin: "0",
          padding: "0",
          boxSizing: "border-box",
          display: "grid",
          gridTemplateColumns: "repeat(12,1fr)",
          gap: "20px",
          gridTemplateRows: "7em",
          alignItems: "center",
        }}
      >
        <img src={Logo} style={{ height: "5em", gridColumn: "3/5" }}></img>
        <img
          src={BurgerBlack}
          style={{ height: "5em", gridColumn: "6/11", justifySelf:"right"  }}
          onClick={openHamburger}
        ></img>
      </div>
      {menuVisible&&<nav
        id="topNav-md"
        style={{
          display: "grid",
          gridTemplateColumns:"repeat(12,1fr)",
          gap:"20px",
          gridTemplateRows:"112px auto",
          position: "fixed",
          width: "100%",
          
          backgroundColor: "#495e57",
          height: "100%",
          zIndex:"50"
        }}
        >
        <img
          src={BurgerWhite}
          style={{ height: "5em", gridColumn: "6/11", justifySelf:"right", alignSelf:"center" }}
          onClick={openHamburger}
        ></img>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft:"auto",
            marginRight:"auto",
            paddingLeft:"0",
            paddingBottom:"100px",
            marginRight:"auto",
            textAlign: "center",
            gridRow:"2",
            gridColumn:"span 12",
            alignItems:"center"
          }}
        >
          <Link
            className="nav-link-md"
            to="/"
            onClick={() => {window.scrollTo(0, 0);openHamburger()}}
          >
            Home
          </Link>
          <Link className="nav-link-md" to="/" onClick={()=>{openHamburger();handleClick()}}>
            About
          </Link>
          <Link className="nav-link-md" to="/" onClick={openHamburger}>
            Menu
          </Link>
          <Link className="nav-link-md" to="booking" onClick={openHamburger}>
            Reservations
          </Link>
          <Link className="nav-link-md" to="order" onClick={openHamburger}>
            Order Online
          </Link>
          <Link className="nav-link-md" to="login" onClick={openHamburger}>
            Login
          </Link>
          <img src={Logo2} style={{width:"100px",filter: "brightness(2000%)", }}></img>
        </ul>
      </nav>}
    </>
  );
};

export default NavMd;
