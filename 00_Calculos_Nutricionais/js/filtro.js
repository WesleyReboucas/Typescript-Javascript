// Acessa o campo filtro
var campoFiltro = document.querySelector("#filtrar-tabela");

// função para quando inserir dados no filtro
campoFiltro.addEventListener("input", function () {
  // Acessa todos os pacientes
  var pacientes = document.querySelectorAll(".paciente");

  // Verifica se há dados inseridos no campo
  if (this.value.length > 0) {
    // Busca em todos os pacientes
    for (var i = 0; i < pacientes.length; i++) {
      var paciente = pacientes[i];
      // Procura na coluna ".info-nome"
      var tdNome = paciente.querySelector(".info-nome");
      // Pega o valor da coluna
      var nome = tdNome.textContent;

      // Realiza uma busca regular - Buscar pelo nome(this.value) e Case Insensitive("i")
      var expressao = new RegExp(this.value, "i");
      if (!expressao.test(nome)) {
        // Adicionar a classe invisível
        paciente.classList.add("invisivel");
      } else {
        // Remover a classe invisível
        paciente.classList.remove("invisivel");
      }
    }
  } else {
    // Caso o valor do campo seja 0, deve remover a classe "invisivel" dos campos
    for (var i = 0; i < pacientes.length; i++) {
      var paciente = pacientes[i];
      paciente.classList.remove("invisivel");
    }
  }
});
