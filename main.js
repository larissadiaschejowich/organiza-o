const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
const contadores = document.querySelectorAll(".contador");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const tempoObjetivo1 = new Date("2024-08-18T15:37:07");

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);
    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    if (tempoFinal > 0) {
        return [dias, horas, minutos, segundos]
    } else {
        return [0, 0, 0, 0];
    }
}
function atualizaCronometro() {
    for (let i = 0; i < contadores.length; i++) {
        const diasElement = document.querySelector("#dias" + i);
        const horasElement = document.querySelector("#horas" + i);
        const minElement = document.querySelector("#min" + i);
        const segElement = document.querySelector("#seg" + i);

        if (diasElement && horasElement && minElement && segElement) {
            diasElement.textContent = calculaTempo(tempoObjetivo1)[0];
            horasElement.textContent = calculaTempo(tempoObjetivo1)[1];
            minElement.textContent = calculaTempo(tempoObjetivo1)[2];
            segElement.textContent = calculaTempo(tempoObjetivo1)[3];
        } else {
            console.error("Erro: Elemento não encontrado.");
        }
    }
}

