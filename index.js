const express=require('express')
const app=express()
const {connect}=require('./db/connect')
const pokemonRoutes=require('./routes/pokemon.routes.js')

app.use(express.json())
app.use('/pokemons',pokemonRoutes)

connect().then( () =>{
    app.listen(3000,()=>{
        console.log('🚀 Serveur lancé sur http://localhost:3000')
    })
} )



