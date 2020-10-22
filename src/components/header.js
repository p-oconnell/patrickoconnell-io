import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'

import logo from '../images/LOGO.svg'

const HeadWrapper = styled.header`
  width: 100%;
  padding: 0 10.41%;
  display: flex;
  flex-direction: column;
  @media (max-width: 420px) {
    flex-direction: column-reverse;
  }
`
const Logo = styled.img`
  display: block;
  height: 32px;
  @media (max-width: 420px) {
    width: 100%;
    height: auto;
    margin-top: 22px;
  }
`
const LogoLnk = styled(Link)`
  display: block;
  padding: 50px 0 50px;
  @media (max-width: 420px) {
    padding: 25px 0 50px;
  }
`
const Menu = styled.nav`
  float: right;
  margin-top: 34px;
  @media (max-width: 420px) {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: auto;
    margin-top: 17px;
  }
`
const MenuLnk = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: ${props => props.theme.whisper};
  font-weight: 400;
  padding-left: 34px;
  &:hover {
    color: #57963f;
  }
  @media (max-width: 420px) {
    padding: 0;
  }
`

const Header = ({ siteTitle }) => {
  return (
    <HeadWrapper>
      <LogoLnk to="/">
        <Logo src={logo} alt={siteTitle} />
      </LogoLnk>
    </HeadWrapper>
  )
}

export default Header
