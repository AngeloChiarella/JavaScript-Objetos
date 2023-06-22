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

const chavesDoObjeto = Object.keys(cliente); //Funcao para retornar um Array contendo as chaves do objeto

console.log(chavesDoObjeto)

if (!chavesDoObjeto.includes("enderecos")) { // teste para saber se o campo existe
    console.error("Erro. É necessário ter um endereço cadastrado!")
}
