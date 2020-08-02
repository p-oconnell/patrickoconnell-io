import React from 'react'
import {
    Link
} from 'gatsby'
import styled from 'react-emotion'

import logo from '../images/logotype.svg'

const HeadWrapper = styled.header `
    width: 100%;
    padding: 0 50px;
`
const Logo = styled.img `
    display: block;
    height: 63px;
`
const LogoLnk = styled(Link)`
    display: block;
    padding-top: 48px;
`
const Menu = styled.nav `
    float: right;
    margin-top: 20px;
`
const MenuLnk = styled(Link)`
    display: inline-block;
    font-size: ${props => props.theme.txtsm};
    font-decoration: none;
    font-weight: 200;
    color: #1E3783;
    padding-left: 44px;
`

const Header = ({siteTitle}) => (
    <HeadWrapper>
        <Menu>
            <MenuLnk to = "/resume" > R&eacute;sum&eacute; < /MenuLnk>
            <MenuLnk to = "/about" > About < /MenuLnk>
        </Menu>
        <LogoLnk to = "/" >
            < Logo src = {logo}
              alt = {siteTitle} />
        </LogoLnk>
    </HeadWrapper>
)

export default Header
