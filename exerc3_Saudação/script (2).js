function construirSaudacao(nome) {
    return `Olá, ${nome}! Seja bem-vindo ao curso de Web!`;
}

function saudar() {
    let nome = document.getElementById("campoNome").value;

    let mensagem = construirSaudacao(nome);

    document.getElementById("mensagem").textContent = mensagem;
}