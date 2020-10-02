import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'

const Info = styled.header`
  height: 450px;
  border: ${props => props.theme.border};
  width: calc(100% / 3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #373737;
  @media (max-width: 420px) {
    border: ${props => props.theme.borderMobile};
    height: auto;
    width: 100%;
    padding: 16px;
  }
`

const ProjLnk = styled(Link)`
  margin-left: 0.75rem;
  margin-right: 0.75rem;
  display: block;
  outline: none;
`

const Client = styled.h2`
  font-weight: 600;
  font-size: 1.42rem;
`

const Industry = styled.h4`
  font-size: 1rem;
  margin-top: 5px;
`

const Job = styled.h3`
  font-weight: 600;
  font-size: 1rem;
  margin-top: 34px;
  @media (max-width: 420px) {
    margin-top: 0;
  }
`

export default function FeaturedTitle(props) {
  return (
    <Info>
      <ProjLnk to={'/' + props.slug}>
        <Client>{props.title}</Client>
        <Industry>{props.industry}</Industry>
        <Job>{props.workType}</Job>
      </ProjLnk>
    </Info>
  )
}
