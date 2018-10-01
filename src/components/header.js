import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'

import logo from 'images/white-logo.svg'

const HeadWrapper = styled.header`
    width: 100%;
    background-color: #e1d09a;
    z-index: 999;
    height: 76px;
    position: absolute;
`
const Marquee = styled.div`
    height: 76px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
`
const Logo = styled.img`
    height: 41px;
    padding-bottom: 14px;
    display: block;
`
const LogoLnk = styled(Link)`
    font-family: 'Asul', sans-serif;
    text-decoration: none;
    color: white;
    font-size: 41px;
    display: block;
    padding-top: 18px;
    padding-left: 50px;
`


const Header = ({ siteTitle }) => (
  <HeadWrapper>
    <Marquee>
        <LogoLnk
          to="/"
        >
          <Logo src={logo} alt={siteTitle} />
        </LogoLnk>
    </Marquee>
  </HeadWrapper>
)

export default Header
