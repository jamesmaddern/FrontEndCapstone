import Logo from './.\\assets\\icons_assets\\Logo.svg'
import * as React from "react";
import { Link, Outlet } from "react-router-dom"



function Nav() {

  
   



    return (
        <div style={{
            width: "100%",
            position: "fixed",
            backgroundColor: "white",
            margin: "0",
            padding: "0",
            boxSizing: "border-box",
            display: 'grid',
            gridTemplateColumns: "repeat(12,1fr)",
            gap: "20px",
            gridTemplateRows: "7em",
            alignItems: "center",


        }}>
            <img src={Logo} style={{ height: "5em", gridColumn: "3/5" }}></img>
            <nav id='topNav' style={{
                gridColumn: "5/11",
                justifySelf: 'right'
            }}>
                <ul style={{
                    display: "flex",
                    padding: "0",
                    margin: "auto",
                }}>
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="about">About</Link>
                    <Link className="nav-link" to="/">Menu</Link>
                    <Link className="nav-link" to="booking">Reservations</Link>
                    <Link className="nav-link" to="order">Order Online</Link>
                    <Link className="nav-link" to="login">Login</Link>
                </ul>
            </nav>

        </div>
    )
}
export default Nav;