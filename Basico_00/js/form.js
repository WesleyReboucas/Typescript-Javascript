// Botão Adicionar Paciente
var botaoAdd = document.querySelector("#adicionar-paciente");
botaoAdd.addEventListener("click", function (event) {
  // Evitar que a página caregue automaticamente
  event.preventDefault();

  // Extrair dados dos pacientes
  var form = document.querySelector("#form-adiciona");
  var paciente = pacienteDoFormulario(form);
  // console.log(paciente);

  // Valida o novo paciente
  var erros = validaPaciente(paciente);
  console.log(erros);

  // Executa a função mensagemErro caso seja identificado algum erro
  if (erros.length > 0) {
    mensagemErro(erros);
    return;
  }

  adicionaPacienteTabela(paciente);

  // Limpar dos dados do form
  form.reset();
  var mensagensErro = document.querySelector("#mensagens-erro");
  mensagensErro.innerHTML = "";
});

// Adiciona paciente na tabela
function adicionaPacienteTabela(paciente) {
  // Cria tabela com os dados do paciente
  var pacienteTr = montaTr(paciente);
  // Relaciona a tabela criada com o Form
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
}

// Cria o objeto paciente
function pacienteDoFormulario(form) {
  // Cria o objeto paciente
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.peso.value),
  };
  return paciente;
}

// Cria a Tr
function montaTr(paciente) {
  // Criando Tr
  var pacienteTr = document.createElement("tr");
  // Adiciona um classe na Tr
  pacienteTr.classList.add("paciente");

  // Cria as TD e relaciona com a TR
  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

// Cria a Td
function montaTd(dado, classe) {
  // Cria o elemento Td
  var td = document.createElement("td");
  // Adiciona os dados a Td
  td.textContent = dado;
  // Adiciona a classe a Td
  td.classList.add(classe);

  return td;
}

// Testa se o paciente inserido é válido
function validaPaciente(paciente) {
  // Cria um array, para agrupar todos os erros
  var erros = [];

  // Verifica se existe algum erro e alerta o usuário
  if (paciente.nome.length == 0) erros.push("Necessário inserir o nome");
  if (paciente.peso.length == 0) erros.push("Necessário inserir o peso");
  if (paciente.altura.length == 0) erros.push("Necessário inserir o altura");
  if (paciente.gordura.length == 0) erros.push("Necessário inserir o gordura");
  if (!validaPeso(paciente.peso)) erros.push("Peso é inválido");
  if (!validaAltura(paciente.altura)) erros.push("Altura é inválida");

  return erros;
}

// Mensagem de erro ao tentar inserir paciente inválido
function mensagemErro(erros) {
  // Acessa a ul
  var ul = document.querySelector("#mensagens-erro");
  // Apaga as ul caso o erro não exista mais
  ul.innerHTML = "";
  // Pega o array de erros e cria uma li
  erros.forEach((erro) => {
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}
