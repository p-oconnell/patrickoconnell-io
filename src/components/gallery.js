import React, { useState } from 'react'
import styled from 'react-emotion'
import Thumb from './gallery-thumb'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import ImageLoad from './imageloader'

import background from '../images/diag-lines.svg'
import next from '../images/next.svg'
import back from '../images/back.svg'
import nextHover from '../images/next-hover.svg'
import backHover from '../images/back-hover.svg'
import './gallery-transitions.css'

const MainImgWrap = styled.div`
  width: 100%;
  border: solid 2px #e5e5e5;
  height: 74vh;
  padding: 5vh;
  background: url(${background});
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
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
      max-width: 100%;
      height: 30vh;
    }
  }
`
const BackBtn = styled.button`
  background: url(${back});
  background-size: contain;
  background-repeat: no-repeat;
  width: 0;
  height: 10%;
  padding-right: 2.19%; /* (img-height / img-width * width) */
  border: none;
  z-index: 100;
  transition: background 300ms ease-out;
  &:focus {
    outline: thin dotted;
  }
  &:hover {
    background: url(${backHover});
    background-size: contain;
    background-repeat: no-repeat;
    width: 0;
    height: 10%;
    padding-right: 2.19%;
    transition: background 300ms ease-out;
  }
  span {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }
  @media (max-width: 420px) {
    display: none;
  }
`

const FwdBtn = styled.button`
  background: url(${next});
  background-size: contain;
  background-repeat: no-repeat;
  width: 0;
  height: 10%;
  padding-left: 2.19%; /* (img-height / img-width * width) */
  border: none;
  z-index: 100;
  transition: background 300ms ease-out;
  &:focus {
    outline: thin dotted;
  }
  &:hover {
    background: url(${nextHover});
    background-size: contain;
    background-repeat: no-repeat;
    width: 0;
    height: 10%;
    padding-left: 2.19%;
    transition: background 300ms ease-out;
  }
  span {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }
  @media (max-width: 420px) {
    display: none;
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
  justify-content: center;
  margin: 23px 23px 0;
  width: 100%;
  @media (max-width: 420px) {
    margin: 23px 0 0;
    justify-content: center;
    flex-direction: column;
  }
`

export default function Gallery(props) {
  const [index, setIndex] = useState(0)
  const [startTransition, setStartTransition] = useState(false)
  const [direction, setDirection] = useState('thumb')
  const clickThumb = e => changeImage(e)
  const isDisplayable = hasImages()

  function hasImages() {
    if (props.galleryImage.length > 1) {
      return true
    } else {
      return false
    }
  }

  function onClickForward() {
    if (index + 1 === props.galleryImage.length) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }

  function onClickBack() {
    if (index - 1 === -1) {
      setIndex(props.galleryImage.length - 1)
    } else {
      setIndex(index - 1)
    }
  }

  function changeImage(i) {
    setIndex(i)
  }

  return (
    <div>
      <MainImgWrap>
        {isDisplayable && (
          <BackBtn onClick={onClickBack}>
            <span>Previous Image</span>
          </BackBtn>
        )}
        <SwitchTransition>
          <CSSTransition
            in={startTransition}
            onEntered={() => setStartTransition(false)}
            timeout={{ enter: 400, exit: 250 }}
            classNames={direction}
            key={index}
          >
            <img
              src={
                'https://media.graphcms.com/auto_image/compress/' +
                props.galleryImage[index].handle
              }
              alt={props.galleryImage[index].altText}
            />
          </CSSTransition>
        </SwitchTransition>
        {isDisplayable && (
          <FwdBtn onClick={onClickForward}>
            <span>Next Image</span>
          </FwdBtn>
        )}
      </MainImgWrap>
      {isDisplayable && (
        <Wrapper>
          <GalleryWrap className="thumbs">
            {props.galleryImage.map(({ url, altText }, key) => (
              <Thumb
                url={url}
                altText={altText}
                key={key}
                position={key}
                click={clickThumb}
                index={index}
              />
            ))}
          </GalleryWrap>
        </Wrapper>
      )}
    </div>
  )
}
