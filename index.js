const insta = document.querySelectorAll('.insta-hover a');

insta.forEach(e => {
  e.addEventListener('mouseover', () => {
    e.children[0].classList.replace('hidden', 'flex')
    console.log(e)
  })

  e.addEventListener('mouseleave', () => {
    e.children[0].classList.replace('flex', 'hidden')
  })
})