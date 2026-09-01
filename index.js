require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("MongoDB conectado");
    })
    .catch((error) => {
        console.log("Error al conectar MongoDB:", error);
    });

app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto ${PORT}`);
});