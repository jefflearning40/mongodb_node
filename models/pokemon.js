const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String },
  level: { type: Number, default: 1 },
});
const Pokemon = mongoose.model("Pokemon", pokemonSchema);

module.exports = { Pokemon };
