const express =require ('express')
const router=express.Router()
const {ObjectId}=require('mongodb')
const {getDb}=require('../db/connect')

router.get('/',async(req,res)=>{
const pokemons = await getDb().collection('pokemons').find().toArray();
res.json(pokemons)
})

router.get('/:id', async (req, res) => {
    const pokemon = await getDb().collection('pokemons').findOne({_id: new ObjectId(req.params.id)});
    if (!pokemon) return res.status(404).json({error: 'Not found'});
    res.json(pokemon);
});

router.post('/',async(req,res)=>{
    const data = req.body
    const result = await getDb().collection('pokemons').insertOne(data);
    res.status(201).json({insertedId: result.insertedId});
})

router.patch('/:id',async(req,res)=>{
    const result = await getDb().collection('pokemons').deleteOne({_id: new ObjectId(req.params.id)});
    if(result.deletedCount ===0) return res.status(404).json({error:'Not found'});
    res.json({message:'modified !'});
})
module.exports = router;