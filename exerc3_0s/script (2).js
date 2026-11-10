let listaDeTarefas = [];

function adicionarTarefa() {
  let tarefa = document.getElementById("campoTarefa").value;

  listaDeTarefas.push(tarefa);

  document.getElementById("campoTarefa").value = "";

  atualizarLista();
}

function atualizarLista() {
  document.getElementById("minhasTarefas").innerHTML = "";

  for (let i = 0; i < listaDeTarefas.length; i++) {
    document.getElementById("minhasTarefas").innerHTML +=
      "<li>" + listaDeTarefas[i] + "</li>";
  }
}
