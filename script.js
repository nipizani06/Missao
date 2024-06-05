const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".caixa-resultado");

const perguntas = [
  {
    enunciado: "As unhas, como qualquer parte do corpo, não são isentas de doenças. Assinale a alternativa que indica o tipo de organismo que se 
      alimenta de queratina e causa a onicomicose, uma infecção relativamente comum nas unhas:,
    alternativas: [
      "Bactérias.",
      "Fungos."
      ]
  },
  {
    enunciado: "Marque a alternativa que apresenta uma informação incorreta sobre as unhas:",
    alternativas: [
      "As unhas das mãos crescem mais rapidamente que as dos pés.",
      "O prato ungueal é uma estrutura de coloração rosada por causa da presença de pigmentos."
       ]
  },
  {
    enunciado: "Ao estudar a unha, vemos que ela é formada por várias partes. Uma dessas partes é mais branca e opaca que o restante da unha e forma 
      um semicírculo característico. Entre as alternativas a seguir, qual representa o nome dessa porção da unha?",
    alternativas: [
      "Lúnula.",
      "Hiponíquio."
       ]
  },
  {
    enunciado: "As unhas são constituídas principalmente por queratina e são formadas por quatro epitélios básicos. Analise as alternativas e marque a região onde é encontrado o epitélio germinativo.",
    alternativas: [
      "Matriz ungueal.",
      "Leito ungueal."
       ]
  },
  {

    enunciado: "As unhas apresentam algumas partes básicas. Analise as alternativas abaixo e marque aquela que indica o nome da porção que tem a aparência de uma meia-lua, 
      de coloração esbranquiçada, localizada na parte proximal da lâmina ungueal.",
    alternativas: [
      "Eponíquio.",
      " Leito ungueal."
       ]
  }
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
  mostraAlternativas();
}
  function mostraAlternativas() {}

mostraPergunta();
