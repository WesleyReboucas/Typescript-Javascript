// Seleciona o botão atualizar
var botaoAtualizar = document.querySelector("#atualizar-pacientes");

// Cria evento para o botão
botaoAtualizar.addEventListener("click", function () {
  console.log("[+] Atualizando pacientes...");

  // Objeto responsável por fazer requisições Http
  // Hoje podendo buscar outros tipos de dados e não somente XML
  var xhr = new XMLHttpRequest();

  // Acessa o link
  xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

  // Quando caregado os dados, executar a função
  xhr.addEventListener("load", function () {
    // Acessa o span de erro do Ajax
    var erroAjax = document.querySelector("#erro-ajax");
    // Verifica o status do GET
    if (xhr.status == 200) {
      // remove o span
      erroAjax.classList.add("invisivel");
      // Acessa o dado do link
      var resposta = xhr.responseText;
      // Transforma JSON em objeto JavaScript
      var pacientes = JSON.parse(resposta);
      // Varrer cada paciente
      pacientes.forEach((paciente) => {
        //Função de adicionar paciente (só funciona com um paciente por vez)
        adicionaPacienteTabela(paciente);
      });
    } else {
      // Exibe o erro no console
      console.log("[ Error ", xhr.status, "]", " - ", xhr.responseText);
      // Adiciona o span
      erroAjax.classList.remove("invisivel");
    }
  });

  // Enviar os dados
  xhr.send();
});
