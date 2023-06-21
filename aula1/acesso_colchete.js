const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "1122233345",
    email: "andre@dominio.com"
};

const chaves = ["nome", "idade", "cpf", "email", "altura"];

chaves.forEach((chave) => { // Funcao para descobrir chave e valor.
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`)
})