const clientes = require("./clientes.json");

function filtrarApartamentoSemComplemento(lista) {
    return lista.filter((cliente) => {
        return (
            cliente.endereco.apartamento &&
            !cliente.endereco.hasOwnProperty("complemento") // ver se existe essa propriedade
        );
    });
};

const filtrados = filtrarApartamentoSemComplemento(clientes);

console.log(filtrados);