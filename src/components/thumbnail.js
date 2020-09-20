import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'

const ThumbWrap = styled.a`
   {
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 12%;
    padding: 0.5rem;
    border: 2px solid #e5e5e5;
    border-radius: 8px;
    height: 14vh;
    min-height: 100px;
    @media (max-width: 420px) {
      padding: 0;
      border: none;
      border-radius: 0;
      width: calc(100% / 3);
    }
  }
  img {
    max-width: 100%;
    max-height: 100%;
    margin: 0 auto;
  }
`

export default function Thumb(props) {
  function handleClick(e) {
    e.preventDefault()
    props.click(props.position)
  }

  return (
    <ThumbWrap onClick={handleClick} href={props.url}>
      <img src={props.url} alt={props.altText} />
    </ThumbWrap>
  )
}
