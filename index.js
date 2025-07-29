const express = require("express");
const app = express();
const mongoose = require("mongoose");
//const {connect}=require('./db/connect')
const pokemonRoutes = require("./routes/pokemon.routes.js");

mongoose.connect(
  "mongodb+srv://afecstudentjfld40:0000@cluster0.4euqgsp.mongodb.net/exercicesCRUD?retryWrites=true&w=majority&appName=Cluster0"
);

app.use(express.json());
app.use("/pokemons", pokemonRoutes);

app.listen(3000, () => {
  console.log("🚀 Serveur lancé sur http://localhost:3000");
});
