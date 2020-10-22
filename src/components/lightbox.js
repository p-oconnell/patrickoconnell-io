import * as basicLightbox from 'basiclightbox'

export default function lightbox() {
  const boxes = document.querySelectorAll('.lightbox')

  boxes.forEach(box => {
    box.addEventListener('click', e => {
      console.log('CLICK!')

      const image =
        e.target.firstChild == null
          ? e.target.currentSrc
          : e.target.firstChild.currentSrc

      basicLightbox
        .create(
          `
      		<img width="1400" height="900" src=${image}>
      	`
        )
        .show()
    })
  })
}
