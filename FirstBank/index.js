import { Cliente } from "./Cliente/Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaDeAutencicacao } from "./services/SistemaDeAutenticacao.js";

const diretor = new Diretor("Eloisy", 10000, 98765787610);
diretor.cadastraSenha("123987");

const gerente = new Gerente("Iracema", 5000, 12343245369);
gerente.cadastraSenha("123456");

const cliente01 = new Cliente("Olavo", 12343245369, 987098);

const diretorLogado = SistemaDeAutencicacao.login(diretor, "123987");
const gerenteLogado = SistemaDeAutencicacao.login(gerente, "123456");

const cliente01Logado = SistemaDeAutencicacao.login(cliente01, "987098");

console.log(diretorLogado, gerenteLogado, cliente01Logado);


