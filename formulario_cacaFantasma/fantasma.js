const form = document.querySelector("form");

const fantasmas = [
  {
    codigo: 1,
    nome: "Sussurro Assombroso",
    descricao: "Este fantasma silencioso é conhecido por sussurrar segredos sombrios no meio da noite.",
    foto: "https://source.unsplash.com/800x600/?ghost",
    combate: "Para enfrentar o Sussurro Assombroso, você precisa utilizar o Ecto-Visor para revelar sua forma etérea e usar uma armadilha de contenção de espectros."
  },
  {
    codigo: 2,
    nome: "Lambedor de Pés",
    descricao: "Este fantasma adora surpreender suas vítimas lambendo seus pés enquanto dormem.",
    foto: "https://source.unsplash.com/800x600/?ghost",
    combate: "Para combater o Lambedor de Pés, você precisa usar o Proton Pack para atordoá-lo e, em seguida, capturá-lo com o feixe de contenção."
  },
  {
    codigo: 3,
    nome: "Gargalhador Maluco",
    descricao: "Este fantasma tem um senso de humor distorcido e adora rir histéricamente enquanto assombra casas.",
    foto: "https://source.unsplash.com/800x600/?ghost",
    combate: "Para derrotar o Gargalhador Maluco, você precisa usar o Canhão de Prótons para enfraquecê-lo e, em seguida, prendê-lo em uma armadilha de espectros."
  },
  {
    codigo: 4,
    nome: "Vulto Sombrio",
    descricao: "Este fantasma misterioso se move rapidamente pelas sombras, deixando um rastro de frio intenso.",
    foto: "https://source.unsplash.com/800x600/?ghost",
    combate: "Para enfrentar o Vulto Sombrio, é recomendado usar uma câmera termal para detectar sua presença e armas com projéteis de energia."
  },
  {
    codigo: 5,
    nome: "Assombração da Mansão",
    descricao: "Esta entidade paranormal possui uma ligação profunda com uma antiga mansão abandonada.",
    foto: "https://source.unsplash.com/800x600/?ghost",
    combate: "Para combater a Assombração da Mansão, você deve pesquisar a história da mansão e encontrar um artefato que possa quebrar sua ligação com o local."
  },
  {
    codigo: 6,
    nome: "Chorona",
    descricao: "Este fantasma lamenta a perda de seus filhos e busca vingança contra aqueles que cruzam seu caminho.",
    foto: "https://source.unsplash.com/800x600/?ghost",
    combate: "Para enfrentar a Chorona, você precisa usar água benta para enfraquecê-la e, em seguida, conduzi-la para longe de seu local assombrado."
  },
  {
    codigo: 7,
    nome: "Poltergeist Traquinas",
    descricao: "Este fantasma adora brincar com objetos, causando tumulto e confusão por onde passa.",
    foto: "https://source.unsplash.com/800x600/?ghost",
    combate: "Para combater o Poltergeist Traquinas, você precisa usar armadilhas magnéticas para conter sua atividade e uma vassoura sagrada para exorcizá-lo."
  },
  {
    codigo: 8,
    nome: "Ceifador Sinistro",
    descricao: "Este fantasma assombra cemitérios e traz consigo uma aura de morte iminente.",
    foto: "https://source.unsplash.com/800x600/?ghost",
    combate: "Para derrotar o Ceifador Sinistro, você precisa utilizar uma lâmina sagrada e realizar um ritual de banimento em um local sagrado."
  },
  {
    codigo: 9,
    nome: "Espectro do Espelho",
    descricao: "Este fantasma está preso em um espelho amaldiçoado e busca libertação.",
    foto: "https://source.unsplash.com/800x600/?ghost",
    combate: "Para enfrentar o Espectro do Espelho, você deve encontrar um artefato que possa quebrar a maldição do espelho e conduzi-lo para uma armadilha de contenção."
  },
  {
    codigo: 10,
    nome: "Bruxa Vingativa",
    descricao: "Esta bruxa se tornou um fantasma após sua morte e busca vingança contra aqueles que a condenaram.",
    foto: "https://source.unsplash.com/800x600/?ghost",
    combate: "Para combater a Bruxa Vingativa, você precisa encontrar seu objeto pessoal amaldiçoado e destruí-lo, rompendo sua conexão com o mundo dos vivos."
  }
];

form.onsubmit = function (event) {
  event.preventDefault();
  const inputs = new FormData(event.target);
  const codigo = parseInt(inputs.get('codigo'));

  var fantasmaEncontrado = fantasmas.find(fantasma => fantasma.codigo === codigo);

  if (fantasmaEncontrado) {
    document.getElementById("nome").textContent = fantasmaEncontrado.nome;
    document.getElementById("descricao").textContent = fantasmaEncontrado.descricao;
    document.getElementById("foto").src = fantasmaEncontrado.foto;
    document.getElementById("combate").textContent = fantasmaEncontrado.combate;
  } else {
    document.getElementById("nome").textContent = "";
    document.getElementById("descricao").textContent = "";
    document.getElementById("foto").src = "";
    document.getElementById("combate").textContent = "Fantasma não encontrado.";
  }
};