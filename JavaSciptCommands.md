					-------------------| Java Script |-----------------


---> Comentar no Código:


	> Comentar linha: // TEXTO
	> Comentar paragrafo: /*	TEXTO	*/	


---> Imprimir


	console.log( 'TEXTO' );    // TEXTO
	console.log( 00.0 );       // 00.0
	console.log( true/false ); // true
	console.log( null );       // null
	console.log( NUM1 +-*/ NUM2 );  // RESULTADO


---> Variáveis 
	
	-> const - Variável constante. Adicionar const no inicio do nome da variavel. Não pode ser alterada.

		const NOME_VARIAVEL = 'TEXTO'; // NOME_VARIAVEL = TEXTO
		const NOME_VARIAVEL = NUMERO;  // NOME_VARIAVEL = NUMERO

	-> let - Variável loca. Variavel propriamente dita. Adicionar let no inicio do nome da variavel. Pode ser alterada.

		- let NOME_VARIAVEL = 'TEXTO'; // NOME_VARIAVEL = TEXTO
		- let NOME_VARIAVEL = NUMERO;  // NOME_VARIAVEL = NUMERO

	-> var - Variável global. Variavel propriamente dita. Adicionar let no inicio do nome da variavel. Pode ser alterada.

		- var NOME_VARIALVEL = 'TEXTO' // NOME_VARIAVEL = TEXTO
		- var NOME_VARIAVEL = NUMERO;  // NOME_VARIAVEL = NUMERO

	-> Indefinida - Criar uma variavel indefinida. Não iguala a nenhum valor.

		let NOME_VARIAVEL;

	-> Operação com Variaveis

		let x = 4;
		x = x + 2; -|
		  ou 		 >  // x = 6
		x += 2;    -|
		x++;			// x = 5

	-> Incorporação de Strings I - Deve ser declarada fora das aspas e ser antecedida por um sinal de +.

		let NOME_VARIAVEL = 'Dog';
		console.log( 'My favorit animal: ' + NOME_VARIAVEL);

	-> Incorporação de Strings II - O texto deve ser posto dentro de ` e ` (acento agudo) e a variavel deve ser declarada dessa maneira: ${NOME_VARIAVEL}

		let NOME_VARIAVEL = "Wesley";
		console.log(`My name is ${NOME_VARIAVEL}.`);


---> Propriedades 


	-> .length - Ela identifica a quantidade de caracteres informada dentro das aspas: 

		console.log ( 'TEXTO'.length );   // 5

	-> .toUpperCase() - Ela coloca todas as letras maiusculas:

		console.log ('hello'.toUpperCase);   //  HELLO

	-> .startsWith() - Verifica se a letra dentro dos parenteses é a mesma que a letra inicial que da primeira e retorna true/false:

		console.log ('TEXTO'.startsWith('T'));   //  true

	-> .trim - Retira os espaços em branco de uma string:

		console.log ('	Espaço em branco	'.trim());  // Espaço em branco


---> Libraries


	-> Math.random() - Gera um numero aleatório entre 0 e 1:

			console.log (Math.random()); // ALGUM NUMERO ENTRE 0 E 1

		- Usa-se um mutliplicador para aumentar o espaço de numeros:

			console.log (Math.random() * 100 ); // ALGUM NUMERO ENTRE 0 E 100

	-> Math.floor() - Arredonda o numero para o maior mais proximo:

		console.log( Math.floor( Math.random()*100 ) ); // ALGUM NUMERO INTEIRO ENTRE 0 E 100, MENOR NUMERO MAIS PROXIMO DO ORIGINAL

	-> Math.ceil() - Arredonda o numero para o menor mais proximo:

		console.log( Math.ceil( Math.random()*100 ) ); // ALGUM NUMERO INTEIRO ENTRE 0 E 100, MAIOR NUMERO MAIS PROXIMO DO ORIGINAL

	-> Number.isInteger() - Verifica se o numero é inteiro:

		console.log(Number.isInteger(NUMERO));  // true/false

