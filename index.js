const list = [
  'assets/media/media0.webp',
  'assets/media/media1.jpg',
  'assets/media/media2.webp',
  'assets/media/media3.webp',
  'assets/media/media4.jpg',
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
  'assets/media/media20.jpg',
  'assets/media/media21.webp',
  'assets/media/media22.webp',
  'assets/media/media23.webp',
  'assets/media/media24.jpg',
  'assets/media/media25.webp',
  'assets/media/media26.webp',
  'assets/media/media27.jpg',
  'assets/media/media28.jpg',
  'assets/media/media29.jpg',
  'assets/media/media30.jpg',
  'assets/media/media31.webp',
  'assets/media/media32.jpg',
]

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5)
}
// const shuffled1 = shuffleArray([...list])
const shuffled1 = [...list]
const shuffled2 = shuffleArray([...shuffled1])
const shuffled3 = shuffleArray([...shuffled2])

const pos1XL = document.querySelector('#carousel-xl > div')
const pos1MD = document.querySelector('#carousel-md > div')
const pos1SM = document.querySelector('#carousel-sm > div')
const pos1 = document.querySelector('#carousel > div')

const pos2XL = document.querySelector('#carousel2-xl > div')
const pos2MD = document.querySelector('#carousel2-md > div')
const pos2SM = document.querySelector('#carousel2-sm > div')
const pos2 = document.querySelector('#carousel2 > div')

const pos3XL = document.querySelector('#carousel3-xl > div')
const pos3MD = document.querySelector('#carousel3-md > div')
const pos3SM = document.querySelector('#carousel3-sm > div')
const pos3 = document.querySelector('#carousel3 > div')

const createCarousel = (position, item, imgForEachItem, list) => {
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
      'row-cols-sm-2',
      'row-cols-md-3',
      'row-cols-xl-6'
    )
    if (i < item) {
      for (let n = 1; n <= imgForEachItem; n++) {
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
    img += imgForEachItem
  }
}
// funzione che crea un carosello:
// tre parametri: posizione di creazione, quantità di schede scorribili, numero di immagini a scheda e lista immagini
createCarousel(pos1XL, 5, 6, shuffled1)
createCarousel(pos1MD, 10, 3, shuffled1)
createCarousel(pos1SM, 15, 2, shuffled1)
createCarousel(pos1, 30, 1, shuffled1)

createCarousel(pos2XL, 5, 6, shuffled2)
createCarousel(pos2MD, 10, 3, shuffled2)
createCarousel(pos2SM, 15, 2, shuffled2)
createCarousel(pos2, 30, 1, shuffled2)

createCarousel(pos3XL, 5, 6, shuffled3)
createCarousel(pos3MD, 10, 3, shuffled3)
createCarousel(pos3SM, 15, 2, shuffled3)
createCarousel(pos3, 30, 1, shuffled3)
