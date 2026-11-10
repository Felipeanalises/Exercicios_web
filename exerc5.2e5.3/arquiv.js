// Definição da Classe
class Paciente {
    constructor(nome, cpf, idade, doenca, cidade) {
        this.nome = nome;
        this.cpf = cpf;
        this.idade = idade;
        this.doenca = doenca;
        this.cidade = cidade;
    }
}

// Array de objetos da classe Paciente
const pacientes = [
    new Paciente(
        "Pedro Rafael",
        "123.456.789-00",
        "25 anos",
        "Hipertensão",
        "São Paulo"
    ),
    new Paciente(
        "Felipe Pedrosa",
        "987.654.321-00",
        "30 anos",
        "Diabetes",
        "Rio de Janeiro"
    ),
    new Paciente(
        "Ana Livia",
        "456.789.123-00",
        "28 anos",
        "Alergia",
        "Belo Horizonte"
    ),
    new Paciente(
        "Zacarias Santos",
        "321.654.987-00",
        "35 anos",
        "Artrite",
        "Salvador"
    )
];

// Mapeamento dos elementos da DOM
const selectPacientes = document.getElementById("selectPacientes");

const btnDetalhes = document.getElementById("btnDetalhes");
const btnAdicionar = document.getElementById("btnAdicionar");
const btnCancelar = document.getElementById("btnCancelar");
const btnSalvar = document.getElementById("btnSalvar");

const modalForm = document.getElementById("modalForm");

const divCpf = document.getElementById("divCPF");
const divIdade = document.getElementById("divIdade");
const divDoenca = document.getElementById("divDoenca");
const divCidade = document.getElementById("divCidade");

// Mostrar detalhes do paciente selecionado
btnDetalhes.addEventListener("click", function() {

    const index = selectPacientes.value;

    if (index !== null && index !== "") {

        divCpf.textContent = pacientes[index].cpf;
        divIdade.textContent = pacientes[index].idade;
        divDoenca.textContent = pacientes[index].doenca;
        divCidade.textContent = pacientes[index].cidade;
    }
});

btnAdicionar.addEventListener("click", function() {
    modalForm.style.display = "flex";
});

// Cancelar
btnCancelar.addEventListener("click", function() {
    modalForm.style.display = "none";
    limparFormulario();
});

// Salvar novo paciente
btnSalvar.addEventListener("click", function() {

    const nome = document.getElementById("inputNome").value.trim();
    const cpf = document.getElementById("inputCpf").value.trim();
    const idade = document.getElementById("inputIdade").value.trim();
    const doenca = document.getElementById("inputDoenca").value.trim();
    const cidade = document.getElementById("inputCidade").value.trim();

    // Validação
    if (!nome || !cpf || !idade || !doenca || !cidade) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    // Cria o novo paciente
    const novoPaciente = new Paciente(
        nome,
        cpf,
        idade,
        doenca,
        cidade
    );

    // Adiciona ao array
    pacientes.push(novoPaciente);

    // Índice do novo paciente
    const novoIndex = pacientes.length - 1;

    // Cria a opção da listbox
    const novaOpcao = document.createElement("option");

    novaOpcao.value = novoIndex;
    novaOpcao.textContent = nome;

    selectPacientes.appendChild(novaOpcao);

    // Seleciona o novo paciente
    selectPacientes.value = novoIndex;

    // Fecha o modal
    modalForm.style.display = "none";

    // Limpa o formulário
    limparFormulario();
});

// Limpar formulário
function limparFormulario() {

    document.getElementById("inputNome").value = "";
    document.getElementById("inputCpf").value = "";
    document.getElementById("inputIdade").value = "";
    document.getElementById("inputDoenca").value = "";
    document.getElementById("inputCidade").value = "";
}
