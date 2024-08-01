import Logo from './.\\assets\\icons_assets\\Logo.svg'
import * as React from "react";
import { Link, Outlet } from "react-router-dom"



function Nav() {
    return (
        <div style={{
            backgroundColor:"white",
            margin: "0",
            padding: "0",
            boxSizing: "border-box",
            display: 'grid',
            gridTemplateColumns: "repeat(12,1fr)",
            gap: "20px",
            gridTemplateRows: "7em",
            alignItems: "center",
        


        }}>
            <img src={Logo} style={{ height:"5em",gridColumn: "3/5" }}></img>
            <nav id='topNav' style={{ gridColumn: "5/11",
                justifySelf:'right'
             }}>
                <ul style={{
                    display: "flex",
                    padding: "0",
                    margin: "auto",
                }}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>
            </nav>

        </div>
    )
}
export default Nav;