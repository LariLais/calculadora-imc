// Variáveis

const input_peso = document.querySelector("#input_peso");
const input_altura = document.querySelector("#input_altura");
const btn_calcular = document.querySelector("#btn_calcular");
const btn_limpar = document.querySelector("#btn_limpar");
const resultado = document.querySelector(".resultado");

const imc_magreza = document.getElementById("imc_magreza");
const imc_normal = document.getElementById("imc_normal");
const imc_sobrepeso = document.getElementById("imc_sobrepeso");
const imc_obesidade = document.getElementById("imc_obesidade");
const imc_obesidade_grave = document.getElementById("imc_obesidade_grave");

// Funções

function calcularIMC(peso, altura) {
  limpar()
  let resultadoIMC = peso / Math.pow(altura / 100, 2);
  resultado.innerHTML = `Seu IMC é: <strong>${resultadoIMC.toFixed(
    2
  )}</strong>`;
  return resultadoIMC;
}

function limpar() {
  input_altura.value = " ";
  input_peso.value = " ";
  resultado.innerHTML = " ";
  imc_magreza.style.backgroundColor = "white"
  imc_normal.style.backgroundColor = "white"
  imc_sobrepeso.style.backgroundColor = "white"
  imc_obesidade.style.backgroundColor = "white"
  imc_obesidade_grave.style.backgroundColor = "white"
}

function marcarIMC(imc) {
  let classificacao;

  if (imc < 18.5) {
    classificacao = "magreza";
  } else if (imc >= 18.5 && imc <= 24.9) {
    classificacao = "normal";
  } else if (imc >= 25.0 && imc <= 29.9) {
    classificacao = "sobrepeso";
  } else if (imc >= 30.0 && imc <= 39.9) {
    classificacao = "obesidade";
  } else if (imc >= 40.0) {
    classificacao = "obesidade_grave";
  }

  console.log(classificacao)

  switch (classificacao) {
    case "magreza":
      imc_magreza.style.backgroundColor = "rgb(255, 211, 92)";
      break;
    case "normal":
      imc_normal.style.backgroundColor = "rgb(255, 211, 92)";
      break;
    case "sobrepeso":
      imc_sobrepeso.style.backgroundColor = "rgb(255, 211, 92)";
      console.log("sobrepeso aaaa")
      break;
    case "obesidade":
      imc_obesidade.style.backgroundColor = "rgb(255, 211, 92)";
      break;
    case "obesidade_grave":
      imc_obesidade_grave.style.backgroundColor = "rgb(255, 211, 92)";
      break;
    default:
      console.log("error");
      break;
  }
}

// Eventos

btn_calcular.addEventListener("click", () => {
  let resultado = calcularIMC(input_peso.value, input_altura.value);
  marcarIMC(resultado.toFixed(2));
});

btn_limpar.addEventListener("click", limpar);
