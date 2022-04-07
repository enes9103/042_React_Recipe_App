
import React, { useState } from 'react'
import { Nav,Logo,Hamburger,MenuLink,Menu } from './NavbarStyles'
// import {GiHamburgerMenu} from 'react-icons/gi'               //Hamburger menünün react-icons'lardan alınıp yapılması

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo to="/home">
        <i>{"<Clarusway>"}</i>
        <span>recipe</span>
      </Logo>
      <Hamburger onClick={()=>setIsOpen(!isOpen)}>
        <span/>
        <span/>
        <span/>
        {/* <GiHamburgerMenu/>    //Hamburger menünün react-icons'lardan alınıp yapılması */}
      </Hamburger>

      <Menu openMenu = {!isOpen}>
        <MenuLink onClick={()=>setIsOpen(!isOpen)} to="/about">About</MenuLink>
        <MenuLink to="/github">Github</MenuLink>
        <MenuLink onClick={()=>setIsOpen(!isOpen)} to="/">Logout</MenuLink>
      </Menu>

    </Nav>
  )
}

export default Navbar