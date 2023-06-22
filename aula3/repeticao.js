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

for (let chave in cliente) { // palavra reservada 'in' faz com que pegue cada um das chaves no objeto cliente
    let tipo = typeof cliente[chave]; // Filtro para saber o tipo da chave
    if (tipo !== "object" && tipo !== "function") {
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    }
} 