// as medidas
let altura = document.getElementById("altura");
let peso = document.getElementById("peso");
// paragrafos
let IMC = document.getElementById("IMC");
let cls = document.getElementById("classi");

// função de calcular
function calcular() {
  let numbalt = altura.value;
  let numbpeso = peso.value;
  if (altura.value == 0 && peso.value == 0) {
    alert("Por favor! digite os valores");
  } else if (altura.value < 0 && peso.value < 0) {
    alert("Você digitou dois valores inválidos!");
  } else if (
    (altura.value < 0 && peso.value > 0) ||
    (altura.value > 0 && peso.value < 0)
  ) {
    alert("Digite um valor inválido!");
  } else if (
    (altura.value < 0 && peso.value == 0) ||
    (peso.value < 0 && altura.value == 0)
  ) {
    alert("Preencha os dois valores para ocorrer o calculo!");
  }
  res = numbpeso / Math.pow(numbalt, 2);
  let decimal = res.toFixed(2);
  if (decimal == NaN) {
    IMC.innerHTML = "Sem valor!";
  }
  IMC.innerHTML = `O valor foi de <strong>${decimal}</strong>`;

  if (decimal < 18.5) {
    cls.innerHTML = "Baixo peso";
    cls.style.backgroundColor = "#79A637";
  } else if (decimal < 24.99) {
    cls.innerHTML = "Normal";
    cls.style.backgroundColor = "#D5E896";
  } else if (decimal < 29.99) {
    cls.innerHTML = "Sobrepeso";
    cls.style.backgroundColor = "#F2884B";
  } else if (decimal > 30) {
    cls.innerHTML = "Obesidade";
    cls.style.backgroundColor = "#D62434";
  }
}
// função de recarregar a pagina para continuar
function limpar() {
  location.reload();
}
