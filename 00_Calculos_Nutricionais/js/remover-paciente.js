// Acessa os pacientes
var pacientes = document.querySelectorAll(".paciente");

// Acessa as tabelas dos pacientes
var tabela = document.querySelector("#tabela-pacientes");

// Cria o evento de duplo click
tabela.addEventListener("dblclick", function (event) {
  // var alvoEvento = event.target; ---> td = coluna
  // var paiAlvo = alvoEvento.parentNode; ---> tr = linha
  // paiAlvo.remove();

  // Adiciona o efeito de opacidade no elemento clicado
  event.target.parentNode.classList.add("fadeOut");

  // Espera 500 ms para executar a função
  setTimeout(function () {
    event.target.parentNode.remove();
  }, 500);
});
