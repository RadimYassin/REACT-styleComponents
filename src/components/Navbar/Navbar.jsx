import React, { useState } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { 
  Nav, NavContainer, NavIcon, NavLogo, MobileIcon,NavItem,Navlinks,NavMenu

} from './Navbar.element'
function Navbar() {
  const [click, setClick] = useState(false)

  const handelClick=()=>setClick(!click);
  return (
    <IconContext.Provider value={{color:'#fff'}}>
      <Nav>
        <NavContainer>
          <NavLogo to='/'>
            <NavIcon />
            Radim

          </NavLogo>
          <MobileIcon onClick={handelClick}>{click ? <FaTimes /> : <FaBars />}</MobileIcon>
           <NavMenu  onClick={handelClick} click={click} >
            <NavItem>
              <Navlinks to='/'>home</Navlinks>
            </NavItem>
            <NavItem>
              <Navlinks to='/'>Services</Navlinks>
            </NavItem>
            <NavItem>
              <Navlinks to='/'>Products</Navlinks>
            </NavItem>
          

           </NavMenu>
        </NavContainer>
      </Nav>
    </IconContext.Provider>
  )
}

export default Navbar
