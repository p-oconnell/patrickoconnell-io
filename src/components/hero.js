import React from 'react'
import styled from 'react-emotion'

import background from '../images/diag-lines.svg'

const MainImgWrap = styled.div`
  width: 100%;
  border: solid 2px #e5e5e5;
  height: 68vh;
  padding: 1.5vh;
  background: url(${background});
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  cursor: pointer;
  @media (max-width: 600px) {
    background: none;
    border: none;
    padding: 0;
    height: auto;
  }
  img {
    display: block;
    max-height: 100%;
    max-width: 100%;
    margin: 0 auto;
    object-fit: contain;
    @media (max-width: 600px) {
      max-width: 100%;
      max-height: 60vh;
    }
  }
`

export default function Hero(props) {
  return (
    <div>
      <MainImgWrap className="lightbox">
        <img
          src={'https://media.graphcms.com/auto_image/compress/' + props.handle}
          alt={props.altText}
        />
      </MainImgWrap>
    </div>
  )
}
