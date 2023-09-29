const carouselCart = document.querySelector('.carousel__cart')
const leftCarouselButton = document.querySelector('.carousel__control-button_left')
const rightCarouselButton = document.querySelector('.carousel__control-button_right')

const carouselItems = document.querySelectorAll('.carousel__item')
let transformSize = 100
let maxTransformSize = transformSize * (carouselItems.length - 1)
let carouselPosition = 0

rightCarouselButton.addEventListener('click', function () {
  if (carouselPosition > -maxTransformSize) {
    carouselPosition -= transformSize
    carouselCart.style.transform = `translateX(${carouselPosition}%)`
  } else {
    carouselPosition = 0
    carouselCart.style.transform = `translateX(${carouselPosition}%)`
  }
})

leftCarouselButton.addEventListener('click', function () {
  if (carouselPosition < 0) {
    carouselPosition += transformSize
    carouselCart.style.transform = `translateX(${carouselPosition}%)`
  } else {
    carouselPosition = -maxTransformSize
    carouselCart.style.transform = `translateX(${carouselPosition}%)`
  }
})
