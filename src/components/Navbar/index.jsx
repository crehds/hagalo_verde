import React from 'react'
import { DivLogo, DivTitleLogo, H3, Nav, P } from './styles'
import logo from '../../assets/hagaloverde_logo.png'

export const NavBar = () => {
  return <Nav>
    <DivLogo to='/'>
      <img src={logo} alt="logo de hagalo verde"/>
      <DivTitleLogo>
        <H3>Hágalo Verde</H3>
        <P>Un paso a la vez</P>
      </DivTitleLogo>
    </DivLogo>
  </Nav>
}