// Armazenando os valores dos campos
var campos = [
  document.querySelector("#data"),
  document.querySelector("#quantidade"),
  document.querySelector("#valor"),
];

// Acessando o tbody
var tdbody = document.querySelector("table tbody");

// Criando a tebela com os dados do form
document.querySelector(".form").addEventListener("submit", function (event) {
  // Impedindo da página atualizar
  event.preventDefault();

  // Criando a tr
  var tr = document.createElement("tr");

  // Varrendo os campos e adicionando a td
  campos.forEach((campo) => {
    var td = document.createElement("td");
    td.textContent = campo.value;
    tr.appendChild(td);
  });

  // Realizando a operação de valume
  var tdVolume = document.createElement("td");
  tdVolume.textContent = campos[1].value * campos[2].value;
  tr.appendChild(tdVolume);

  // Alocando a tr criada à existente
  tbody.appendChild(tr);

  // Apagando os campos após a incerssão dos dados na tabela
  campos[0].value = "";
  campos[1].value = 1;
  campos[2].value = 0.0;

  // Colocando o foco no campo de data
  campos[0].focus();
});

