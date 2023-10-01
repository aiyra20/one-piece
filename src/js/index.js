const botoes = document.querySelectorAll(".botao");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        const botaoSelecionado = desselecionarBotao();

        console.log(botaoSelecionado);
        botaoSelecionado.classList.remove("selecionado");

        botao.classList.add("selecionado");

        const personagens = document.querySelectorAll(".personagem");

        desselecionarPersonagem();

        personagens[indice].classList.add("selecionado");
    });
})

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    return document.querySelector(".botao.selecionado");
}
