console.log('Main executando aqui')

// abre e fecha menu quando clicar no icone: hanburger e X
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
    console.log('menu acionado')
  })
}

// quando clicar em um item, esconde o menu
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
    console.log('item acionado')
  })
}

// aplicar sombra no header quando tiver scroll
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    //scroll maior que a altura
    header.classList.add('scroll')
  } else {
    //se for menor
    header.classList.remove('scroll')
  }
})

// ==========  swiper
const swiper = new Swiper('.swiper', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 20,

  // Optional parameters
  direction: 'horizontal',
  loop: true,

  mousewheel: {
    invert: false
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets'
  },

  pauseOnMouseEnter: true,
  disableOnInteraction: false,
  grabCursor: true,
  allowSlidePrev: false
})

//=============== ScrollReveal

ScrollReveal({ reset: true })

ScrollReveal().reveal(
  `#home .image, #home .text,
   #about .image, #about .text,
   #services header, #services .card,
   #testimonials header, #testimonials .testimonials-box,
   #contact .text, #contact .links
  `,
  { interval: 100, distance: '30px', origin: 'top', duration: 800 }
)
