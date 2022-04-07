
import React, { useState } from 'react'
import { Nav,Logo,Hamburger,MenuLink,Menu } from './NavbarStyles'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo to>
        <i>{"<Clarusway>"}</i>
        <span>recipe</span>
      </Logo>
      <Hamburger onClick={()=>setIsOpen(!isOpen)}>
        <span/>
        <span/>
        <span/>
      </Hamburger>

      <Menu openMenu = {!isOpen}>
        <MenuLink to="/about">About</MenuLink>
        <MenuLink to="/github">Github</MenuLink>
        <MenuLink to="/about">About</MenuLink>
      </Menu>

    </Nav>
  )
}

export default Navbar