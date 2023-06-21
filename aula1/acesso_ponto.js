const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "1122233345",
    email: "andre@dominio.com"
};

console.log(`O nome do cliente é ${cliente.nome} e ele tem ${cliente.idade} anos de idade.`);
console.log(`Os três primeiros digitos do cpf são ${cliente.cpf.substring(0, 3)}`) // Pegando os 3 primeiros numeros