import React from 'react'
import {
    Link
} from 'gatsby'
import styled from 'react-emotion'

import logo from 'images/logotype.svg'

const HeadWrapper = styled.header `
    width: 100%;
`

const Logo = styled.img `
    display: block;
`
const LogoLnk = styled(Link)
`
    display: block;
    padding-top: 48px;
    padding-left: 50px;
`
const Menu = styled.nav `
    float: right;
    margin-right: 50px;
    margin-top: 20px;
`
const MenuLnk = styled(Link)
`
    display: inline-block;
    font-size: 24px;
    font-decoration: none;
    font-weight: 200;
    color: #1E3783;
    padding-left: 44px;
`
const TaglineWrapper = styled.div `
        display: flex;
        justify-content: center;
        margin: 70px 0;
`
const Tagline = styled.div `
    font-size: 41px;
    font-weight: 200;
    width: calc(100% / 3 * 2);
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
        <TaglineWrapper>
            <Tagline>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra ipsum sed sapien dictum, ut tincidunt nisi.
            </Tagline>
        </TaglineWrapper>
    </HeadWrapper>
)

export default Header
