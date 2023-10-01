let tagsBlock = document.querySelector('.tags-block')
let tags = document.querySelectorAll('.tag')
let portfolioBlock = document.querySelector('.portfolio-list')
let portfolioItems = [...document.querySelectorAll('.portfolio-list__item')]
const animationTime = getComputedStyle(portfolioItems[0]).transition.slice(8, 9) * 1000

function portfolioShuffle(arr) {
  arr.sort(() => (Math.floor(Math.random() * 2) == 0 ? -1 : 1))
}

function tagsClassChanger(tags, tag) {
  tags.forEach(item => {
    item.classList.remove('tag_active')
  })

  tag.classList.add('tag_active')
}

function portfolioItemAppear(item, time) {
  setTimeout(() => {
    portfolioBlock.style.height = ''
    portfolioBlock.append(item)
  }, time)

  setTimeout(() => {
    item.style.opacity = '1'
  }, time + 50)
}

function portfolioListChanger(items, tag) {
  portfolioBlock.style.height = portfolioBlock.offsetHeight + 'px'

  items.forEach(item => {
    item.style.opacity = '0'

    setTimeout(() => {
      item.remove()
    }, animationTime)
  })

  if (tag.innerHTML === 'All') {
    items.forEach(item => {
      portfolioItemAppear(item, animationTime)
    })
  } else {
    items.forEach(item => {
      if (item.dataset.itemTag === tag.innerHTML) {
        portfolioItemAppear(item, animationTime)
      }
    })
  }
}

tagsBlock.addEventListener('click', e => {
  if (e.target.classList.contains('tag')) {
    let clickedTag = e.target

    if (!clickedTag.classList.contains('tag_active')) {
      portfolioShuffle(portfolioItems)
      tagsClassChanger(tags, clickedTag)
      portfolioListChanger(portfolioItems, clickedTag)
    }
  }
})
