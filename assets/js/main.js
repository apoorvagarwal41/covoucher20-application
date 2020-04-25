$('.owl-carousel').owlCarousel({
  slideSpeed: 300,
  paginationSpeed: 400,
  items: 1,
  itemsDesktop: false,
  itemsDesktopSmall: false,
  itemsTablet: false,
  itemsMobile: false,
  loop: true,
  autoplay: true,
  margin: 30,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
})

document.querySelector('.ham-icon').addEventListener('click', (e) => {
  const navlist = document.querySelector('.mobile-navlist')
  if (navlist.classList.contains('close')) {
    navlist.classList.remove('close')
    navlist.classList.add('open')
  }
  e.stopPropagation()
})

document.body.addEventListener('click', (e) => {
  const navlist = document.querySelector('.mobile-navlist')
  if (navlist.classList.contains('open')) {
    navlist.classList.remove('open')
    navlist.classList.add('close')
  }
})
