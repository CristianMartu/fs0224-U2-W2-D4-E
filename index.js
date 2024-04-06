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
let shuffled = list

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
      'row-cols-sm-2',
      'row-cols-md-3',
      'row-cols-xl-6'
    )
    if (i < item) {
      for (let n = 1; n <= number; n++) {
        const divCol = document.createElement('div')
        divCol.classList.add('col')
        divCol.innerHTML = `<img src="${
          shuffled[n + img]
        }" class="d-block w-100 zoom" alt="..." />`
        row.appendChild(divCol)
      }
    }
    carousel.appendChild(row)
    position.appendChild(carousel)
    img += number
    // per evitare ripetizioni sulla schede principali senza complicare il codice,
    // ho lasciato il primo carosello ordinato e mischiato solo gli altri due
    // per diminuire le probabilità xD
    shuffled = shuffleArray(list)
  }
}
// funzione che crea un carosello:
// tre parametri: posizione di creazione, quantità di schede scorribili, e numero di immagini a scheda
createCarousel(pos1, 5, 6)
createCarousel(pos2, 5, 6)
createCarousel(pos3, 5, 6)

//           Da sistemare per rendere il comportamento responsive

//  l'idea era di usare le media query per poi rimuovere e aggiungere ogni volta
//  i caroselli con createCarousel(). Testata (a fondo pagina) manualmente funziona,
//  però causa tempo ho dovuto abbandonare.

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

//          creazione dei caroselli in base alla grandezza del layout
// createCarousel(pos, 3, 6)    // 1200px
// createCarousel(pos, 3, 5)    // 992px
// createCarousel(pos, 4, 4)    // 768px
// createCarousel(pos, 6, 3)    // 576px
// createCarousel(pos, 18, 1)   // 200px
