const clientes = require("./clientes.json");

function ordenar(lista, parametro) {
    const resultado = lista.sort((a, b) => { // sort - ordenar listas
        if (a[parametro] < b[parametro]) {
            return -1;
        }
        if (a[parametro] > b[parametro]) {
            return 1;
        }
        return 0;
    });
    return resultado;
}

const ordenadoPorNome = ordenar(clientes, "nome");
console.log(ordenadoPorNome);