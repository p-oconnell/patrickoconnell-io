import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'

const HeroLnk = styled(Link)`
  color: inherit;
  text-decoration: none;
`

const HeroPicWrap = styled.div`
    width: calc(100%/3*2);
    height: 450px;
    @media (max-width: 420px) {
        height: 45vh;
        width: 100%;
    }
`

const HeroPic = styled.picture`
  img {
    border: ${props => props.theme.border};
    width:100%;
    height: 450px;
    object-fit: cover;
    @media (max-width: 420px) {
        height: 45vh;
        border: ${props => props.theme.borderMobile};
    }
  }
`

export default function FeaturedTitle(props) {
    return (
<HeroPicWrap>
<HeroLnk to={'/' + props.slug}>
  <HeroPic>
    <img src={props.src} alt={props.alt} />
  </HeroPic>
</HeroLnk>
</HeroPicWrap>
    )}
