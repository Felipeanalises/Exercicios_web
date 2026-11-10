const nomeProduto = document.getElementById("nomeProduto");
const precoProduto = document.getElementById("precoProduto");
const cadastrar = document.getElementById("cadastrar");
const listaProdutos = document.getElementById("listaProdutos");

cadastrar.onclick = function () {
  const nome = nomeProduto.value;
  const preco = Number(precoProduto.value);

  if (nome === "" || preco <= 0) {
    alert("Preencha os campos corretamente!");
    return;
  }

  // Cria um novo elemento <li>
  const item = document.createElement("li");

  // Define o texto do produto
  item.textContent = `${nome} - R$ ${preco.toFixed(2)}`;

  // Cria o botão Excluir
  const excluir = document.createElement("button");

  excluir.textContent = "Excluir";

  // Evento do botão Excluir
  excluir.onclick = function () {
    item.remove();
  };

  // Coloca o botão dentro do <li>
  item.appendChild(excluir);

  // Coloca o <li> dentro da <ul>
  listaProdutos.appendChild(item);

  // Limpa os campos
  nomeProduto.value = "";
  precoProduto.value = "";
};
