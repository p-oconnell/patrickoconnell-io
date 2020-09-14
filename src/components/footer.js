import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'
import toTheTop from './tothetop'

import arrow from '../images/up-arrow.svg'

const Foot = styled.footer`
  width: auto;
  height: 150px;
  font-size: 19px;
  color: #c7ccc7;
  padding: 14px 10.41% 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  background-color: #98cc84;
  @media (max-width: 420px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`

const Copy = styled.div`
  color: ${props => props.theme.charcoal};
`

const Top = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const TopLnk = styled(Link)`
  display: block;
  outline: none;
  text-decoration: none;
  &:hover div {
    color: #57963f;
  }
`

const Arrow = styled.img`
  display: block;
  margin: 0 auto;
  height: 44px:
`
const TopLabel = styled.div`
  font-size: 26px;
  color: ${props => props.theme.charcoal};
  text-decoration: none;
  margin-top: 5px;
`

const currentYear = new Date().getFullYear()

const Footer = ({ siteTitle }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log('USE EFFECT FUNCTION TRIGGERED')
      toTheTop()
    }
  })

  return (
    <Foot>
      <Copy>&copy;{currentYear} &nbsp; Patrick O'Connell</Copy>
      <Top>
        <TopLnk className="top-lnk" to="#top">
          <Arrow src={arrow} alt={siteTitle} />
          <TopLabel>TOP</TopLabel>
        </TopLnk>
      </Top>
    </Foot>
  )
}

export default Footer
