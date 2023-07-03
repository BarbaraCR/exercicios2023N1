document.addEventListener('DOMContentLoaded', () => {
  const arrayDeCartas = [
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
  arrayDeCartas.sort(() => 0.5 - Math.random())
  const tabuleiro = document.querySelector('.tabuleiro')
  const resultado = document.querySelector('#pontuacao')
  const placeholder = 'carta.png'
  const branco = 'https://cloud-5ystxzer7.vercel.app/6blank.png'

  var cartasClicadas = []
  var cartasClicadasId = []
  var cartasCombinadas = []

  function criarTabuleiro() {
    for (let i = 0; i < arrayDeCartas.length; i++) {
      var carta = document.createElement('img')
      carta.setAttribute('src', placeholder)
      carta.setAttribute('data-id', i)
      carta.addEventListener('click', viraCarta)
      tabuleiro.appendChild(carta)
    }
  }

  function viraCarta() {
    var cartaId = this.getAttribute('data-id')
    cartasClicadas.push(arrayDeCartas[cartaId].name)
    cartasClicadasId.push(cartaId)
    this.setAttribute('src', arrayDeCartas[cartaId].img)
    if (cartasClicadas.length === 2) {
      setTimeout(checarPorCombinacao, 500)
    }
  }
  function checarPorCombinacao() {
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
  criarTabuleiro()
})
