const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["115555550", "114444440"]
};

cliente.enderecos = [
    {
        rua: "R. Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934"
    }
];

function ligaParaCliente(telComercial, telResidencial) {
    console.log(`Ligando para ${telComercial}`);
    console.log(`Ligando para ${telResidencial}`);
}

// ligaParaCliente(cliente.telefone[0], cliente.telefone[1]);
ligaParaCliente(...cliente.telefone);

const encomenda = {
    destinatario : cliente.nome,
    // rua: cliente.enderecos[0].rua,
    // numero: cliente.enderecos[0].numero,
    // apartamento: cliente.enderecos[0].apartamento,
    // complemento: cliente.enderecos[0].complemento,
    ...cliente.enderecos[0]
}

console.log(encomenda);