import React, { useState } from 'react'
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
`

export default function Gallery(props) {
  const [biz, setBiz] = useState(props.galleryImage[0].url)
  const incrementCount = e => changeImage(e)

  function changeImage(i) {
    setBiz(props.galleryImage[i].url)
  }

  return (
    <div>
      <MainImgWrap>
        <img src={biz} />
      </MainImgWrap>
      <Wrapper>
        <GalleryWrap className="thumbs">
          {props.galleryImage.map(({ url, altText }, index) => (
            <Thumb
              url={url}
              altText={altText}
              key={index}
              position={index}
              click={incrementCount}
            />
          ))}
        </GalleryWrap>
      </Wrapper>
    </div>
  )
}
