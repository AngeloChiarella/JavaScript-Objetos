const clientes = require("./clientes.json");

function encontrar(lista, chave, valor) {
    //verificando se o item dentro da chave e igual ao valor
    // return lista.find((item) => item[chave] === valor);
    return lista.find((item) => item[chave].includes(valor)); // Pesquisa em arrays

}

const encontrado = encontrar(clientes, "nome", "Kirby");
console.log(encontrado)

const encontrado2 = encontrar(clientes, "telefone", "1918820860");
console.log(encontrado2)
