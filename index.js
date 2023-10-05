require("dotenv").config();
const db = require("./db")
const express = require("express");

const app = express();

app.post("/clientes", (request, response, next) => {
    const clientes = request.body;
})

app.get("/clientes/:id", (request, response, next) => {
    const id = parseInt(request.params.id);
    response.json(db.selectCliente(id));
})

app.get("/clientes", (request, response, next) => {
    response.json(db.selectClientes());
})

app.get("/", (request, response, next) => {
    response.json(
        {message:"WORKS"}
    )
})

app.listen(process.env.PORT, () => {
    console.log("APP funcionando");
});