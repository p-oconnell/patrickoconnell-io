import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'

import logo from '../images/LOGO.svg'

const HeadWrapper = styled.header`
  width: 100%;
  padding: 0 3%;
  display: flex;
  flex-direction: column;
  @media (min-width: 1300px) {
    padding: 0 10.41%;
  }
  @media (max-width: 600px) {
    flex-direction: column-reverse;
  }
`
const Logo = styled.img`
  display: block;
  height: 32px;
  @media (max-width: 600px) {
    width: 100%;
    height: auto;
    margin-top: 22px;
  }
`
const LogoLnk = styled(Link)`
  display: block;
  padding: 50px 0 50px;
  @media (max-width: 600px) {
    padding: 25px 0 50px;
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
