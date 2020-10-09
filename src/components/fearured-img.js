import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'

import LazyLoad from 'react-lazy-load'

import ImageLoad from './imageloader'

const Featured = styled.div`
  color: inherit;
  text-decoration: none;
`

const FeaturedPicWrap = styled.div`
  border: ${props => props.theme.border};
  width: calc(100% / 3 * 2);
  height: 450px;
  transition: border 100ms ease;
  @media (max-width: 420px) {
    height: 45vh;
    width: 100%;
    border: ${props => props.theme.borderMobile};
  }
`

const FeaturedPic = styled.picture`
  img {
    width: 100%;
    height: calc(450px - 30px);
    object-fit: cover;
    @media (max-width: 420px) {
      height: calc(45vh - 14px);
    }
  }
`

export default function FeaturedImg(props) {
  return (
    <FeaturedPicWrap className="featuredimg-hover">
      <Featured>
        <FeaturedPic>
          <LazyLoad debounce={false} offsetVertical={500}>
            <ImageLoad
              src={
                'https://media.graphcms.com/auto_image/compress/' + props.src
              }
              placeholder={
                'https://media.graphcms.com/resize=width:40/blur=amount:2/' +
                props.handle
              }
              alt={props.alt}
            />
          </LazyLoad>
        </FeaturedPic>
      </Featured>
    </FeaturedPicWrap>
  )
}
