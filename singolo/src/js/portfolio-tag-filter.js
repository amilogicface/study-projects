let tags = document.querySelectorAll('.tag')
let portfolioBlock = document.querySelector('.portfolio-list')
let portfolioItems = document.querySelectorAll('.portfolio-list__item')

function tagsClassChanger(tags, tag) {
  tags.forEach(item => {
    item.classList.remove('tag_active')
  })
  tag.classList.add('tag_active')
}

function portfolioItemAppear(item, time) {
  setTimeout(() => {
    portfolioBlock.style.height = ''
    item.style.display = 'block'
  }, time + 30)
  setTimeout(() => {
    item.style.opacity = '1'
  }, time + 60)
}

function portfolioListChanger(lists, tag) {
  portfolioBlock.style.height = portfolioBlock.offsetHeight + 'px'
  lists.forEach(item => {
    item.style.opacity = '0'

    setTimeout(() => {
      if (getComputedStyle(item).opacity === '0') {
        item.style.display = 'none'
      }
    }, 330)
  })

  if (tag.innerHTML === 'All') {
    lists.forEach(item => {
      portfolioItemAppear(item, 330)
    })
  } else {
    lists.forEach(item => {
      if (item.dataset.itemTag === tag.innerHTML) {
        portfolioItemAppear(item, 330)
      }
    })
  }
}

tags[0].addEventListener('click', function (e) {
  tagsClassChanger(tags, this)

  portfolioListChanger(portfolioItems, this)
})

tags[1].addEventListener('click', function (e) {
  tagsClassChanger(tags, this)

  portfolioListChanger(portfolioItems, this)
})

tags[2].addEventListener('click', function (e) {
  tagsClassChanger(tags, this)

  portfolioListChanger(portfolioItems, this)
})

tags[3].addEventListener('click', function (e) {
  tagsClassChanger(tags, this)

  portfolioListChanger(portfolioItems, this)
})
