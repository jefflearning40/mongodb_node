const mongoose = require('mongoose');  
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const pokemonSchema = new mongoose.Schema({  
    name: { type: String, required: true },
    type: { type: String },  
    level: { type: Number, default: 1 }
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);  

const pikachu = new Pokemon({ name: 'Pikachu', type: 'Electric' }); 
await pikachu.save();  


