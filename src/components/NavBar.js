import React from 'react'
import {NavLink} from "react-router-dom";

export default function NavBar() {
    return (
        <div>
            <NavLink to="/HomePage">Home</NavLink>
            <NavLink to="/About">About Us</NavLink>
            <NavLink to="/DiscoverMovies">Movies</NavLink>
            <NavLink to="/Oops">Oops</NavLink>
            
        </div>
    )
}
