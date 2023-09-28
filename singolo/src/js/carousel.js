const carouselCart = document.querySelector('.carousel__cart')
const leftCarouselButton = document.querySelector('.carousel__control-button_left')
const rightCarouselButton = document.querySelector('.carousel__control-button_right')

let transformSize = 0
let maxTransformSize = 0
const carouselItems = document.querySelectorAll('.carousel__item')
let carouselPosition = 0

function getCarouselItemsSizes() {
  transformSize = carouselItems[0].offsetWidth
  maxTransformSize = transformSize * (carouselItems.length - 1)
}

addEventListener('resize', () => {
  getCarouselItemsSizes()
})

rightCarouselButton.addEventListener('click', function () {
  if (carouselPosition > -maxTransformSize) {
    carouselPosition -= transformSize
    carouselCart.style.transform = `translateX(${carouselPosition}px)`
  } else {
    carouselPosition = 0
    carouselCart.style.transform = `translateX(${carouselPosition}px)`
  }
})

leftCarouselButton.addEventListener('click', function () {
  if (carouselPosition < 0) {
    carouselPosition += transformSize
    carouselCart.style.transform = `translateX(${carouselPosition}px)`
  } else {
    carouselPosition = -maxTransformSize
    carouselCart.style.transform = `translateX(${carouselPosition}px)`
  }
})
