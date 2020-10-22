import React, { useState, useEffect } from 'react'

const ImageLoad = React.memo(({ src, placeholder, alt = '' }) => {
  const [loading, setLoading] = useState(true)
  const [currentSrc, updateSrc] = useState(placeholder)

  useEffect(() => {
    const imageToLoad = new Image()
    imageToLoad.src = src
    imageToLoad.onload = () => {
      setLoading(false)
      updateSrc(src)
    }
  }, [src])

  return (
    <img
      src={currentSrc}
      style={{
        opacity: loading ? 0.8 : 1,
        transition: 'opacity 250ms ease, filter 250ms ease',
      }}
      alt={alt}
    />
  )
})

export default ImageLoad
