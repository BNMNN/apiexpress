const clientes = [
    {id: 1,
     nome: "Bernardo",
     idade: 23},
     {id: 2,
      nome: "Amanda",
      idade: 26}
];

function selectClientes(){
    return clientes;
}

function selectCliente(id){
    return clientes.find(clientes => clientes.id === id);
}

function insertCliente(clientes){
    clientes.push(clientes);
}

module.exports = {
    selectClientes,
    selectCliente,
    insertCliente
}