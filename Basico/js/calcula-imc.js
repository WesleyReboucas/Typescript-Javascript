// Alterar título
var titulo = document.querySelector(".titulo");
titulo.textContent = "Cálculos Nutricionais";

// Acessar todods os pacientes
var pacientes = document.querySelectorAll(".paciente");

// Varrer todos os pacientes
for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];

  // Nome
  var tdNome = paciente.querySelector(".info-nome");
  var nome = tdNome.textContent;

  // Peso
  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  // Altura
  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  // IMC
  var tdImc = paciente.querySelector(".info-imc");

  // Variaveis de validação
  var pesoValido = validaPeso(peso);
  var alturaValido = validaAltura(altura);

  // Calculo e validação de Peso
  if (!pesoValido) {
    console.log("[Error: " + nome + "] Peso Inválido.");
    pesoValido = false;
    tdImc.textContent = "Peso Inválido.";
    paciente.classList.add("paciente-invalido");
  }

  // Calculo e validação de Altura
  if (!alturaValido) {
    console.log("[Error: " + nome + "] Altura Inválida.");
    alturaValido = false;
    tdImc.textContent = "Altura Inválida.";
    paciente.classList.add("paciente-invalido");
  }

  // Calculo e valdiação do IMC
  if (alturaValido & pesoValido) {
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  }
}

// Cálculo do IMC
function calculaImc(peso, altura) {
  var imc = 0;
  // Cálculo do IMC
  imc = peso / (altura * altura);
  // Define 2 casa decimais após a vígula
  return imc.toFixed(2);
}

//  Validação de peso
function validaPeso(peso) {
  if (peso >= 0 && peso < 500) {
    return true;
  } else {
    return false;
  }
}

// Validação de altura
function validaAltura(altura) {
  if (altura >= 0 && altura <= 3) {
    return true;
  } else {
    return false;
  }
}

// Testando função anônima
titulo.addEventListener("dblclick", function () {
  console.log("[Título] Testando funcção anônima!");
});
// |  [CLASS].addEventListener("[EVENTO]", function () {
// |    [CONTEUDO DA FUNÇÃO];
// |  });