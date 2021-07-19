// Toggle menu when click in icon.
const nav = document.querySelector("#header nav")
const toggle = document.querySelectorAll("nav .toggle")
const wm = document.querySelector(".show-wm")
const up = document.querySelector("#btn-up")

for (const i of toggle) {
  i.addEventListener('click', e => {
    nav.classList.toggle('show-menu')
    wm.classList.toggle("show-wm")
    up.classList.toggle("show-up")
  })
}

// Hidden menu when click in a link of list.
const links = document.querySelectorAll('nav ul li a')
for (const link of links) {
  link.addEventListener("click", e => {
    nav.classList.remove("show-menu")
    wm.classList.toggle("show-wm")
    up.classList.toggle("show-up")
  })
}

// Script write-machine
function swm(element) {
  const arrayText = element.textContent.split('')
  element.textContent = ''
  arrayText.forEach((letter, i) => { setTimeout(e => {
  element.textContent += letter }, 100 * i)})
}
const nome = document.querySelector("#nome")
swm(nome)
