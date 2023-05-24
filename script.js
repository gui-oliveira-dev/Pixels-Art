//------------------------------------Cores iniciais da página ---------------------------------------//

let cor2
let cor3
let cor4

cor2 = 'blue'
cor3 = 'green'
cor4 = 'pink'

const initialColors = {
  cor2, cor3, cor4
}
localStorage.setItem('colorPalette', JSON.stringify(initialColors))
const restaura = JSON.parse(localStorage.getItem('colorPalette'))

const paletteItens = document.getElementsByClassName('color')









paletteItens[0].style.backgroundColor = 'black'
paletteItens[1].style.backgroundColor = restaura.cor2
paletteItens[2].style.backgroundColor = restaura.cor3
paletteItens[3].style.backgroundColor = restaura.cor4


/* -------------------------------Adiciona o título da página------------------------------*/

// 1-  Cria o título da página
const text = "Paleta de Cores"

const title  = document.getElementById('title')

title.innerText = 'Paleta de Cores'



/* --------------------------Função que gera cores aleatórias------------------------------*/

const buttomRamdom = document.querySelector('#button-random-color')

let cor = buttomRamdom.addEventListener('click', (event) => {
  const paletteItens = document.querySelectorAll('.color')
  const letter = '0123456789ABCDEFG'
  
  
  function corAleatoria() {
     let color = '#'
     for (let index = 0; index < 6; index += 1) {
      color += letter[Math.floor(Math.random() * 16)]
    }
    return color
   }
     let cor2 = corAleatoria()
     let cor3 = corAleatoria()
     let cor4 = corAleatoria()
     paletteItens[1].style.backgroundColor = cor2
     paletteItens[2].style.backgroundColor = cor3
     paletteItens[3].style.backgroundColor = cor4
     
     let cores = {
      cor2, cor3, cor4
     }


    localStorage.setItem('colorPalette', JSON.stringify(cores))


} )


//------------------------------------- Adiciona quadro a página-----------------------------------------//

for (let index = 0; index < 25; index += 1) {
  const board = document.querySelector('#pixel-board')
  const newPixel = document.createElement('div')
  newPixel.classList.add('pixel')
  board.appendChild(newPixel)
}

//----------------------------------Define a cor inicial da paleta--------------------------------------//

let itenSelec = document.querySelector('#paleta1')
itenSelec.classList.add('selected')
localStorage.setItem('paleta selecionada', 'paleta1')
localStorage.setItem('tinta', 'black')


//-----------------------------Selecionar cor da paleta------------------------------------------------//



const paletaArray = document.querySelectorAll('.color')

for (let index = 0; index < paletaArray.length; index += 1) {
  const element = paletaArray[index].addEventListener('click', (evento => {
    localStorage.setItem('paleta selecionada', evento.target.id)
    localStorage.setItem('tinta', evento.target.style.backgroundColor)
    if (localStorage.getItem('paleta selecionada') === paletaArray[index].id ) {
    document.querySelector('.color.selected').classList.remove('selected')
    paletaArray[index].classList.add('selected')
    }
  }))
}

//---------------------------Pinta os quadrados do quadro-----------------------------------------------//

const pixels = document.querySelectorAll('.pixel')

for (let index = 0; index < pixels.length; index += 1) {
  const element = pixels[index].addEventListener('click', (evento => {
    pixels[index].style.backgroundColor = localStorage.getItem('tinta')
  }))
}

//-----------------------Botão para limparo o quadro---------------------------------------------------//
const clearButtom = document.querySelector('#clear-board')

const clearBoard = document.querySelector('#clear-board').addEventListener('click', (evento => {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white'

  }
}))

