// ===============================
// DESAFIOS
// ===============================

const desafios = [
    "Faça 20 polichinelos.",
    "Desenhe alguma coisa em 60 segundos.",
    "Tente ficar 5 minutos sem olhar o celular.",
    "Crie um nome para um super-herói.",
    "Abra o Google Maps e escolha um lugar aleatório do mundo.",
    "Tente escrever seu nome com a mão que você não usa.",
    "Invente uma história usando 3 palavras aleatórias.",
    "Organize sua área de trabalho por 2 minutos.",
    "Aprenda uma palavra nova.",
    "Faça um desenho usando apenas formas geométricas.",
    "Crie um personagem completamente aleatório.",
    "Tente lembrar de 10 filmes sem pesquisar.",
    "Escolha uma música e tente desenhar o que ela te faz imaginar.",
    "Escreva uma ideia para um jogo.",
    "Invente um aplicativo que ainda não existe."
];

function novoDesafio() {
    const aleatorio = Math.floor(Math.random() * desafios.length);
    document.getElementById("desafio").textContent = desafios[aleatorio];
}


// ===============================
// PERGUNTAS
// ===============================

const perguntas = [
    "Se você pudesse viajar para qualquer lugar agora, para onde iria?",
    "Qual superpoder você escolheria?",
    "Qual seria o nome da sua própria empresa?",
    "Se sua vida fosse um filme, qual seria o título?",
    "Qual personagem fictício você gostaria de conhecer?",
    "Se você ganhasse R$ 1 milhão, qual seria a primeira coisa que faria?",
    "Qual invenção você gostaria que existisse?",
    "Se pudesse aprender qualquer habilidade instantaneamente, qual seria?",
    "Qual seria seu emprego perfeito?",
    "Se você pudesse voltar para qualquer época da história, qual escolheria?"
];

function novaPergunta() {
    const aleatorio = Math.floor(Math.random() * perguntas.length);
    document.getElementById("pergunta").textContent = perguntas[aleatorio];
}


// ===============================
// JOGO DO NÚMERO
// ===============================

let numeroSecreto = Math.floor(Math.random() * 100) + 1;

function chutar() {

    const input = document.getElementById("palpite");
    const resultado = document.getElementById("resultado");

    const palpite = Number(input.value);

    if (palpite < 1 || palpite > 100) {
        resultado.textContent = "Digite um número entre 1 e 100.";
        return;
    }

    if (palpite === numeroSecreto) {

        resultado.textContent = "🎉 ACERTOU! Novo número escolhido!";

        numeroSecreto = Math.floor(Math.random() * 100) + 1;
        input.value = "";

    } else if (palpite < numeroSecreto) {

        resultado.textContent = "⬆️ Tenta um número maior!";

    } else {

        resultado.textContent = "⬇️ Tenta um número menor!";
    }
}


// ===============================
// PIADAS
// ===============================

const piadas = [
    "Por que o computador foi ao médico? Porque estava com um vírus. 😂",
    "O que o zero disse para o oito? Belo cinto! 😂",
    "Por que o livro de matemática ficou triste? Porque tinha muitos problemas.",
    "O que o tomate foi fazer no banco? Tirar extrato.",
    "Por que o computador estava com frio? Porque deixou o Windows aberto.",
    "Qual é o animal mais antigo? A zebra, porque é em preto e branco.",
    "O que uma parede falou para a outra? A gente se encontra na esquina."
];

function novaPiada() {
    const aleatorio = Math.floor(Math.random() * piadas.length);
    document.getElementById("piada").textContent = piadas[aleatorio];
}


// ===============================
// MODO CAOS
// ===============================

const caos = [
    "🚨 DESAFIO: fique 30 segundos sem piscar.",
    "🎨 DESAFIO: desenhe um pato usando apenas 10 linhas.",
    "🧠 DESAFIO: fale o alfabeto de trás para frente.",
    "🎵 DESAFIO: coloque uma música aleatória e dance por 20 segundos.",
    "😂 DESAFIO: invente uma piada ruim.",
    "👽 DESAFIO: invente uma teoria sobre alienígenas.",
    "🎮 DESAFIO: crie uma ideia para um jogo em 1 minuto.",
    "🦆 DESAFIO: pense em um nome para um pato milionário.",
    "🤔 DESAFIO: tente imaginar como seria sua vida em outro planeta.",
    "🔥 DESAFIO: invente um super-herói completamente inútil."
];

function modoCaos() {

    const aleatorio = Math.floor(Math.random() * caos.length);

    alert(caos[aleatorio]);
}


// ===============================
// CRONÔMETRO
// ===============================

let segundos = 0;
let intervalo = null;

function atualizarTempo() {

    segundos++;

    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = segundos % 60;

    const minutosFormatados = String(minutos).padStart(2, "0");
    const segundosFormatados = String(segundosRestantes).padStart(2, "0");

    document.getElementById("tempo").textContent =
        `${minutosFormatados}:${segundosFormatados}`;
}

function iniciar() {

    if (intervalo !== null) {
        return;
    }

    intervalo = setInterval(atualizarTempo, 1000);
}

function pausar() {

    clearInterval(intervalo);
    intervalo = null;
}

function zerar() {

    clearInterval(intervalo);

    intervalo = null;
    segundos = 0;

    document.getElementById("tempo").textContent = "00:00";
}


// ===============================
// TECLA ENTER NO JOGO
// ===============================

document.getElementById("palpite").addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        chutar();
    }

});