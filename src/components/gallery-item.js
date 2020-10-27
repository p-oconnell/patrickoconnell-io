import React from 'react'
import { css } from 'react-emotion'

import background from '../images/diag-lines.svg'

const FullWidth = css`
  width: 100%;
  border: solid 2px #e5e5e5;
  height: 60vh;
  padding: 2.5vh;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: linear-gradient(180deg, #e4e4e4 45.83%, #d4e6be 100%);
  border: 2px solid #c4c4c4;
  @media (max-width: 600px) {
    background: none;
    border: none;
    padding: 0;
    height: auto;
  }
`

const HalfWidth = css`
  width: calc(50% - 15px);
  border: solid 2px #e5e5e5;
  height: 60vh;
  padding: 2.5vh;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: url(${background});
  margin-bottom: 30px;
  cursor: pointer;
  @media (max-width: 600px) {
    background: none;
    border: none;
    padding: 0;
    height: auto;
    width: 100%;
    max-height: 60vh;
  }
`

const GalleryImg = css`
  display: block;
  max-height: 100%;
  max-width: 100%;
  margin: 0 auto;
  object-fit: contain;
  @media (max-width: 600px) {
    max-width: 100%;
    height: 30vh;
  }
`

export default function GalleryItem(props) {
  return (
    <div css={props.isFull ? FullWidth : HalfWidth} className="lightbox">
      {console.log(props.size + ' ' + props.index)}
      <img
        css={GalleryImg}
        src={'https://media.graphcms.com/auto_image/compress/' + props.handle}
        alt={props.alt}
      />
    </div>
  )
}
