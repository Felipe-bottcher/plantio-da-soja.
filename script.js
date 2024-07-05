const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "qual o tipo de raiz da soja",
        alternativas: ["pivotante", "vasiculada"],
    },
    {
        enunciado: "qual o ciclo em dias da soja",
        alternativas: ["60 dias", "120 dias"],
    },
    {
        enunciado: "qual a media de sacas de soja por hectare no Paraná",
        alternativas: ["70 sacas", "20 sacas"],
    },
];

let atual = 0;
let historiaFinal = "";

function mostraPergunta() {
    if (atual < perguntas.length) {
        const perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado;
        mostraAlternativas(perguntaAtual.alternativas);
    } else {
        caixaPerguntas.textContent = '';
        caixaAlternativas.innerHTML = '';
        textoResultado.textContent = `Você respondeu todas as perguntas! Sua história: ${historiaFinal}`;
    }
}

function mostraAlternativas(alternativas) {
    caixaAlternativas.innerHTML = ''; // Limpa as alternativas anteriores
    alternativas.forEach(alternativa => {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa;
        botaoAlternativa.addEventListener('click', () => {
            respostaSelecionada(alternativa);
        });
        caixaAlternativas.appendChild(botaoAlternativa);
    });
}

function respostaSelecionada(opcaoSelecionada) {
    historiaFinal += opcaoSelecionada + ' ';
    atual++;
    mostraPergunta();
}

mostraPergunta();
