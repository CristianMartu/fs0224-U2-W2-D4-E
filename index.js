const list = [
  'assets/media/media0.webp',
  'assets/media/media1.jpg',
  'assets/media/media2.webp',
  'assets/media/media3.webp',
  'assets/media/media5.webp',
  'assets/media/media6.jpg',
  'assets/media/media7.webp',
  'assets/media/media8.webp',
  'assets/media/media9.jpg',
  'assets/media/media10.jpg',
  'assets/media/media11.jpg',
  'assets/media/media12.jpg',
  'assets/media/media13.jpg',
  'assets/media/media14.webp',
  'assets/media/media15.jpg',
  'assets/media/media16.webp',
  'assets/media/media17.jpg',
  'assets/media/media18.jpg',
  'assets/media/media19.webp',
]

const pos1 = document.querySelector('#carousel > div')
const pos2 = document.querySelector('#carousel2 > div')
const pos3 = document.querySelector('#carousel3 > div')

const carousel = document.createElement('div')

const createCarousel = (position, item, number) => {
  let img = 0
  for (let i = 0; i < item; i++) {
    const carousel = document.createElement('div')
    if (i === 0) {
      carousel.classList.add('carousel-item', 'active')
    } else {
      carousel.classList.add('carousel-item')
    }
    const row = document.createElement('div')
    row.classList.add(
      'row',
      'row-cols-1',
      'row-cols-sm-3',
      'row-cols-md-4',
      'row-cols-lg-5',
      'row-cols-xl-6'
    )
    if (i < item) {
      for (let n = 1; n <= number; n++) {
        const divCol = document.createElement('div')
        divCol.classList.add('col')
        divCol.innerHTML = `<img src="${
          list[n + img]
        }" class="d-block w-100 zoom" alt="..." />`
        row.appendChild(divCol)
      }
    }
    carousel.appendChild(row)
    position.appendChild(carousel)
    img += number
  }
}
createCarousel(pos1, 3, 6)
createCarousel(pos2, 3, 6)
createCarousel(pos3, 3, 6)

// const handleMediaQueryChange = (media) => {
//   if (media.matches) {
//     console.log(media)
//   } else {
//     console.log('La media query non è attiva:')
//   }
// }

// const mediaQueries = [
//   '(min-width: 200px)',
//   '(min-width: 576px)',
//   '(min-width: 768px)',
//   '(min-width: 992px)',
//   '(min-width: 1200px)',
// ]
// for (let i = 0; i < mediaQueries.length; i++) {
//   const mediaQuery = window.matchMedia(mediaQueries[i])
//   mediaQuery.addEventListener('change', () =>
//     handleMediaQueryChange(mediaQuery)
//   )
// }
// createCarousel(pos, 3, 6)
// createCarousel(pos, 3, 5)
// createCarousel(pos, 4, 4)
// createCarousel(pos, 6, 3)
// createCarousel(pos, 18, 1)
