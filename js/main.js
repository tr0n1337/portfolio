// MENU TOGGLE
const nav = document.querySelector("#header nav")
const wm = document.querySelector(".show-wm")
const up = document.querySelector("#btn-up")
const toggle = document.querySelectorAll("nav .toggle")

for (const i of toggle) {
  i.addEventListener('click', e => {
    nav.classList.toggle('show-menu')
    wm.classList.toggle("show-wm")
    up.classList.toggle("show-up")
  })
}

// SHOW MENU
const links = document.querySelectorAll('nav ul li a')
for (const link of links) {
  link.addEventListener("click", e => {
    nav.classList.remove("show-menu")
    wm.classList.toggle("show-wm")
    up.classList.toggle("show-up")
  })
}

// WRITE MACHINE
function swm(element) {
  const arrayText = element.textContent.split('')
  element.textContent = ''
  arrayText.forEach((letter, i) => {
    setTimeout(e => {
      element.textContent += letter
    }, 100 * i)
  })
}
const nome = document.querySelector(".nome")
swm(nome)


// SWAP THEME
const theme = document.querySelector('html')
const c = document.getElementById('checkbox')

c.addEventListener('change', () => {
  theme.classList.toggle('dark-theme')
})

// SCROLL REVEAL
const scroll = ScrollReveal({
  origin: 'top',
  distance: '3rem',
  duration: 700,
  reset: true
})

scroll.reveal(`#home .container,
               #about .title-page, #about .text-about, #about .circle-about,
               #projects .title-page, .card, .title-project, .title-card, .resume, .btn-project, .languages i,
               #contact .title-page, #contact .circle-contact, .sm-wrapper a`, {
  interval: 100
})


// BACK TOP
const backtop = document.querySelector('.btn-up')
window.addEventListener('scroll', () => {
  if (window.scrollY >= 1200) {
    backtop.classList.add('show-up')
  } else {
    backtop.classList.remove('show-up')
  }
})