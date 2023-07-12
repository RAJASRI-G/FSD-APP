
import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
 
export const Nav = styled.nav`
background: grey;
height: 40px;
display: flex;
  justify-content: space-between;
  padding: 0.3rem calc((100vw - 1000px) / 2);
  margin-left:20px;
  margin-top:10px;
  margin-right:20px;
  
  `;
  
  export const NavLink = styled(Link)`
color: #f1f1f1;
  display: flex;
  text-decoration: none;
  padding: 0 5rem;
  height: 100%;
  font-size:30px;
  cursor: pointer;
  font-family:Algerian;
  gap: 3rem;
  &.active {
      color: #4d4dff;
      background-color:black;
      border-radius:5cm;
      border:none;
  }
 
`;
 
export const Bars = styled(FaBars)`
display: none;
color: #f1f1f1;
@media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 2rem;
    cursor: pointer;
    margin-right:20px;
}
`;

export const NavMenu = styled.div`
display: flex;
backround:white;
align-items: center;
margin-right: -24px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
    display: none;
  }
  `;