import React from 'react'
import styled from 'react-emotion'

const Foot = styled.footer`
    width: auto;
    font-size: 19px;
    color: #c7ccc7;
    padding-left: 50px;
    padding-right: 50px;
    padding-bottom: 25px;
    padding-top: 14px;
`

const Footer = () => (
  <Foot>
    &copy; 2009 &ndash; {new Date().getFullYear()}{'  '}  Patrick O'Connell
  </Foot>
)

export default Footer
