import anime from 'animejs/lib/anime.es.js'

export default function toTheTop() {
  const button = document.querySelector('.top-lnk')
  const scrollElement =
    window.document.scrollingElement ||
    window.document.body ||
    window.document.documentElement
  const html = document.getElementsByTagName('html')[0]

  button.addEventListener('click', e => {
    let pageHeight = html.scrollHeight
    let scrollTime = pageHeight / 2.5

    anime({
      targets: scrollElement,
      scrollTop: 0,
      duration: scrollTime,
      easing: 'easeOutExpo',
    })

    e.preventDefault()
  })
}
