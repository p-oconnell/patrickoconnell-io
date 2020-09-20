import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'
import Thumb from './thumbnail'

import background from '../images/diag-lines.svg'

const MainImgWrap = styled.div`
  width: 100%;
  border: solid 2px #e5e5e5;
  height: 74vh;
  padding: 5vh;
  background: url(${background});
  @media (max-width: 420px) {
    background: none;
    border: none;
    padding: 0;
    height: auto;
  }
  img {
    display: block;
    max-height: 100%;
    margin: 0 auto;
    object-fit: contain;
    @media (max-width: 420px) {
      width: 100%;
    }
  }
`

const Wrapper = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
`

const GalleryWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 23px 23px 0;
  width: 100%;
  @media (max-width: 420px) {
    margin: 23px 0 0;
  }
  a {
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

export default function Gallery(props) {
  const [biz, setBiz] = useState(props.galleryImage[0].url)
  const incrementCount = e => changeImage(e)

  function changeImage(e) {
    e.preventDefault()
    setBiz(e.currentTarget)
  }

  return (
    <div>
      <MainImgWrap>
        <img src={biz} />
      </MainImgWrap>
      <Wrapper>
        <GalleryWrap className="thumbs">
          {props.galleryImage.map(({ url, altText }, index) => (
            <Thumb key={index} position={index} url={url} altText={altText} />
          ))}
        </GalleryWrap>
      </Wrapper>
    </div>
  )
}
