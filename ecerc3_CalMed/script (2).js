function calcularMedia(n1, n2) {
  return (n1 + n2) / 2;
}

function calcular() {
  let nota1 = Number(document.getElementById("nota1").value);
  let nota2 = Number(document.getElementById("nota2").value);

  let media = calcularMedia(nota1, nota2);

  let resultado = document.getElementById("resultadoCalculo");

  if (media >= 7.0) {
    resultado.textContent = `Média: ${media} - Aprovado`;
    resultado.style.color = "green";
  } else {
    resultado.textContent = `Média: ${media} - Recuperação`;
    resultado.style.color = "red";
  }
}
