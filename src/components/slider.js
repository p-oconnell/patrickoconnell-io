import React, { useState } from 'react'
import { css, jsx } from 'react-emotion'
import SliderContent from './slider-content'
import Slide from './slide'

/**
 * @function Slider
 */

const Slider = props => {
  const getWidth = () => window.innerWidth

  const [state, setState] = useState({
    translate: 0,
    transition: 0.45,
  })

  const { translate, transition } = state

  return (
    <div css={SliderCSS}>
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth() * props.slides.length}
      >
        {props.slides.map((slide, i) => (
          <Slide
            key={slide + i}
            content={'https://media.graphcms.com/auto_image/compress/' + slide}
          />
        ))}
      </SliderContent>
    </div>
  )
}

const SliderCSS = css`
  poistion: relative;
  width: 100%;
  height: 74vh;
  margin: 0 auto;
  overflow: hidden;
`

export default Slider
