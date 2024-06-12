const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado:  "As unhas, como qualquer parte do corpo, não são isentas de doenças. Assinale a alternativa que indica o tipo de organismo que se alimenta de queratina e causa a onicomicose, uma infecção relativamente comum nas unhas:,
        alternativas: [
            {
                texto: "Bactérias.",
                afirmacao: "afirmação"
            },
            {
                texto: "Fungos.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Marque a alternativa que apresenta uma informação incorreta sobre as unhas:",
        alternativas: [
            {
                texto: "As unhas das mãos crescem mais rapidamente que as dos pés.",
                afirmacao: "afirmação"
            },
            {
                texto: "O prato ungueal é uma estrutura de coloração rosada por causa da presença de pigmentos.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Ao estudar a unha, vemos que ela é formada por várias partes. Uma dessas partes é mais branca e opaca que o restante da unha e forma um semicírculo característico. Entre as alternativas a seguir, qual representa o nome dessa porção da unha?",
        alternativas: [
            {
                texto: "Lúnula.",
                afirmacao: "afirmação"
            },
            {
                texto: "Hiponíquio.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "As unhas são constituídas principalmente por queratina e são formadas por quatro epitélios básicos. Analise as alternativas e marque a região onde é encontrado o epitélio germinativo.",
        alternativas: [
            {
                texto: "Matriz ungueal.",
                afirmacao: "afirmação"
            },
            {
                texto: "Leito ungueal.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "As unhas apresentam algumas partes básicas. Analise as alternativas abaixo e marque aquela que indica o nome da porção que tem a aparência de uma meia-lua, de coloração esbranquiçada, localizada na parte proximal da lâmina ungueal.",
        alternativas: [
            {
                texto: "Eponíquio.",
                afirmacao: "afirmação"
            },
            {
                texto: "Leito ungueal.",
                afirmacao: "afirmação"
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal = afirmacoes;
    atual++;
    mostraPergunta();
}

mostraPergunta();
