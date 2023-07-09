var logo = document.getElementById("fantasmaLogin");// Obtém o elemento do canvas pelo ID "fantasmaLogin"
var c = logo.getContext("2d");// Obtém o contexto 2D do canvas

function desenhaImagem() {
  var imagem = new Image();// Cria um objeto de imagem
  imagem.src = "https://seeklogo.com/images/G/Ghostbusters-logo-CC20C1F0CE-seeklogo.com.png";// Define a URL da imagem
  imagem.onload = function () { // Manipulador de eventos para quando a imagem é carregada
    c.drawImage(imagem, 10, 10);// Desenha a imagem no canvas
  }
}

desenhaImagem();// Chama a função para desenhar a imagem no canvas

document.addEventListener('DOMContentLoaded', () => {
  const arrayDeCartas = [   /* Array de cartas */
    {
      name: '1',
      img: 'ghost1-removebg-preview.png'
    },
    {
      name: '2',
      img: 'ghost2-removebg-preview.png'
    },
    {
      name: '3',
      img: 'ghost3-removebg-preview.png'
    },
    {
      name: '4',
      img: 'ghost4-removebg-preview.png'
    },
    {
      name: '5',
      img: 'ghost5-removebg-preview.png'
    },
    {
      name: '6',
      img: 'ghost6-removebg-preview.png'
    },
    {
      name: '1',
      img: 'ghost1-removebg-preview.png'
    },
    {
      name: '2',
      img: 'ghost2-removebg-preview.png'
    },
    {
      name: '3',
      img: 'ghost3-removebg-preview.png'
    },
    {
      name: '4',
      img: 'ghost4-removebg-preview.png'
    },
    {
      name: '5',
      img: 'ghost5-removebg-preview.png'
    },
    {
      name: '6',
      img: 'ghost6-removebg-preview.png'
    }
  ]
  arrayDeCartas.sort(() => 0.5 - Math.random()) // Embaralha o array de cartas
  const tabuleiro = document.querySelector('.tabuleiro') // Seleciona o elemento com a classe "tabuleiro"
  const resultado = document.querySelector('#pontuacao') // Seleciona o elemento com o ID "pontuacao"
  const placeholder = 'carta.png' // URL da imagem de placeholder
  const branco = 'https://cloud-5ystxzer7.vercel.app/6blank.png' // URL da imagem em branco 

  var cartasClicadas = [] // Armazena as cartas clicadas
  var cartasClicadasId = [] // Armazena os IDs das cartas clicadas
  var cartasCombinadas = [] // Armazena as cartas combinadas

  function criarTabuleiro() {  /* Cria o tabuleiro do jogo */
    for (let i = 0; i < arrayDeCartas.length; i++) {
      var carta = document.createElement('img')
      carta.setAttribute('src', placeholder)
      carta.setAttribute('data-id', i)
      carta.addEventListener('click', viraCarta)
      tabuleiro.appendChild(carta)
    }
  }

  function viraCarta() { /* Lida com o evento de virar uma carta */
    var cartaId = this.getAttribute('data-id')
    cartasClicadas.push(arrayDeCartas[cartaId].name)
    cartasClicadasId.push(cartaId)
    this.setAttribute('src', arrayDeCartas[cartaId].img)
    if (cartasClicadas.length === 2) {
      setTimeout(checarPorCombinacao, 500)
    }
  }
  function checarPorCombinacao() { /* Verifica se as cartas viradas são uma combinação */
    var cartas = document.querySelectorAll('img')
    const primeiraCarta = cartasClicadasId[0]
    const segundaCarta = cartasClicadasId[1]
    if (primeiraCarta === segundaCarta) {
      cartas[primeiraCarta].setAttribute('src', placeholder)
      cartas[segundaCarta].setAttribute('src', placeholder)
      alert('Você clicou na mesma carta!')
    }
    else if (cartasClicadas[0] === cartasClicadas[1]) {
      cartas[primeiraCarta].setAttribute('src', branco)
      cartas[segundaCarta].setAttribute('src', branco)
      cartasCombinadas.push(cartasClicadas)
      cartas[primeiraCarta].removeEventListener('click', viraCarta)
      cartas[segundaCarta].removeEventListener('click', viraCarta)
    }
    else {
      cartas[primeiraCarta].setAttribute('src', placeholder)
      cartas[segundaCarta].setAttribute('src', placeholder)
    }
    cartasClicadas = []
    cartasClicadasId = []
    resultado.textContent = cartasCombinadas.length
    if (cartasCombinadas.length === arrayDeCartas.length / 2) {
      resultado.textContent = 'Parabéns! Você capturou todos os fantasmas!'
    }
  }
  criarTabuleiro()  // Cria o tabuleiro do jogo
})