/*
    Ser autenticavel significa ter o método autenticar
*/

export class SistemaDeAutencicacao {

  static login(autenticavel, senha) {
    if (SistemaDeAutencicacao.ehAutenticavel(autenticavel)) {
      return autenticavel.autenticar(senha);
    }
    return false;
  }

  static ehAutenticavel(autenticavel) {
    return "autenticar" in autenticavel && 
    autenticavel.autenticar instanceof Function;
  }
}
