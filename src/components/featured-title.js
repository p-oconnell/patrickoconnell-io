import React from 'react'
import styled from 'react-emotion'

const Info = styled.header`
  height: 450px;
  border: ${props => props.theme.border};
  width: calc(100% / 3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #373737;
  transition: border 100ms ease;
  &:hover {
    border: inset 17px #e5e5e5;
    transition: border 100ms ease;
  }
  @media (max-width: 850px) {
    border: ${props => props.theme.borderMobile};
    height: auto;
    width: 100%;
    padding: 16px;
  }
`

const Proj = styled.div`
  margin-left: 0.75rem;
  margin-right: 0.75rem;
  display: block;
  outline: none;
  @media (max-width: 600px) {
    margin: 0;
  }
`

const Client = styled.h2`
  font-weight: 500;
  font-size: 1.42rem;
`

const Industry = styled.h4`
  font-size: 1rem;
  margin-top: 7px;
  margin-bottom: 16px;
  font-style: italic;
  @media (max-width: 600px) {
    font-size: 1rem;
    margin-top: 10px;
    margin-bottom: 12px;
  }
`

const Job = styled.h3`
  font-weight: 500;
  font-size: 1rem;
  margin-top: 34px;
  @media (max-width: 600px) {
    margin-top: 0;
  }
`

export default function FeaturedTitle(props) {
  return (
    <Info className={props.hoverClass}>
      <Proj>
        <Client>{props.title}</Client>
        <Industry>{props.industry}</Industry>
        <Job>{props.workType}</Job>
      </Proj>
    </Info>
  )
}
