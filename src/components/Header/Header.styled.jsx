import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavBar = styled.header` 
 top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;

  display: flex;
  align-items: center;
  padding: 40px;
  background-color: #060606;
  box-shadow: 0px 2px 10px 1px #424a51;
  height: 80px;
  width: 100%;
`;


export const NavWrapper = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;

export const NavLinkStyled = styled(NavLink)`
    box-shadow: 0px 10px 14px -7px #44666c;
	background:linear-gradient(to bottom, #899092 5%, #8e9a9d 100%);
	/* background-color:#599bb3; */
	border-radius:8px;

    color:#ffffff;
	font-family:Arial;
	font-size:20px;
	font-weight:bold;
	padding:13px 32px;
	text-decoration:none;
	text-shadow:0px 1px 0px #3d768a;
  text-transform: uppercase;



  &:hover,
  &:focus {
    background:linear-gradient(to bottom, #232c2d 5%, #599bb3 100%);
	background-color:#c1c9ca;}
  
  &.active {
   
    background:linear-gradient(to bottom, #232c2d 5%, #599bb3 100%);
	background-color:#0a1314;}
  
`