
import React from "react";
import { Nav, NavLink, NavMenu }
    from "./Styled";
 
const Navbar = () => {
    return (
        <>
        <Nav>
        <NavMenu>
        <h1>WORKFLOW        
        </h1>
        <NavLink to="/signup" activeStyle>
        Sign Up
        </NavLink>
        <NavLink to="/signin" activeStyle>
        SignIn
        </NavLink>
        </NavMenu>
        </Nav>
        </>
    );
};
 
export default Navbar;
