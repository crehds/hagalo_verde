import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const Nav = styled.nav`
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding: 15px 10px;
  padding-left: 40px; 
`

export const DivLogo = styled(LinkRouter)`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 10px;
  max-width:100%;
  text-decoration: none;
  color: black;
`

export const DivTitleLogo = styled.div`
  max-width:100%;
`

export const H3 = styled.h3`
  padding-top: 5px;
  font-family: 'Lato';
`

export const P = styled.p`
  font-family: 'Lato';
  font-weight: 300;
  font-size: 15px;
`