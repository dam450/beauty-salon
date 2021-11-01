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
