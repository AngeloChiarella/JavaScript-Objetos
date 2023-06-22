 // recebendo dados JSON e transformar em Objeto
const dados = require("./cliente.json"); // require - funcao para puxar um codigo de um outro lugar. 

console.log(dados);
console.log(typeof dados); // tipo do arquivo

// stringify - metodo do json para transformar em String
const clienteEmString = JSON.stringify(dados);
console.log(clienteEmString);
console.log(typeof clienteEmString);
// Por ser string, nao da pra pegar os atributos
console.log(clienteEmString.nome); 

// Transformar String em objeto
const objetoCliente = JSON.parse(clienteEmString);
console.log(objetoCliente);