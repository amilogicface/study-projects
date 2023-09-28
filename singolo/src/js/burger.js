const burgerButton = document.querySelector('.burger')
const burgerNavigation = document.querySelector('.main-navigation')

function hideBurgerNavigation() {
  burgerButton.classList.remove('burger_active')
  burgerNavigation.classList.remove('main-navigation_burger-visible')
}

burgerButton.addEventListener('click', function () {
  this.classList.toggle('burger_active')
  burgerNavigation.classList.toggle('main-navigation_burger-visible')
})

addEventListener('resize', function () {
  hideBurgerNavigation()
})

document.addEventListener('keydown', function (e) {
  if (e.keyCode === 27) {
    hideBurgerNavigation()
  }
})

document.addEventListener('click', function (e) {
  const burgerClickArea = e.composedPath().includes(burgerButton)
  if (!burgerClickArea) {
    hideBurgerNavigation()
  }
})
