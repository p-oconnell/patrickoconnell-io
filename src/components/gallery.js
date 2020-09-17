import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'

const Wrapper = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
`

const GalleryWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 23px 23px 0;
  @media (max-width: 420px) {
    margin: 23px 0 0;
  }
  div {
    width: calc(100% / 6);
    padding: 30px;
    border: 2px solid #e5e5e5;
    border-radius: 8px;
    @media (max-width: 420px) {
      padding: 0;
      border: none;
      border-radius: 0;
      width: calc(100% / 3);
    }
  }
  img {
    width: 100%;
  }
`

export default function Gallery(props) {
  if (props.galleryImage.length === 0) {
    return null
  }

  return (
    <Wrapper>
      <GalleryWrap className="thumbs">
        <div>
          <img src={props.heroThumb} data-selected />
        </div>
        {props.galleryImage.map(({ url, altText }, index) => (
          <div key={index}>
            <img src={url} alt={altText} />
          </div>
        ))}
      </GalleryWrap>
    </Wrapper>
  )
}
