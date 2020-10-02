import React from 'react'
import styled from 'react-emotion'

const ThumbWrap = styled.a`
   {
    display: flex;
    align-items: center;
    flex-direction: row;
    width: calc(64% / 12);
    margin: 0 0.5%;
    padding: 0.2rem;
    border-radius: 8px;
    height: 9vh;
    min-height: 50px;
    @media (max-width: 420px) {
      padding: 0.5%;
      border: none;
      border-radius: 0;
      margin: 1%;
      width: calc(94% / 3);
      height: 10vh;
      min-height: 0;
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
    console.log(props.index, props.position)
  }

  function highlightSelected(currentPosition, position) {
    if (currentPosition === position) {
      return {
        border: '1px solid #98CC84',
        transition: 'border 250ms ease-in-out',
      }
    } else {
      return { border: '1px solid #E0E5DA' }
    }
  }

  const border = highlightSelected(props.index, props.position)

  return (
    <ThumbWrap onClick={handleClick} href={props.url} style={border}>
      <img src={props.url} alt={props.altText} />
    </ThumbWrap>
  )
}
