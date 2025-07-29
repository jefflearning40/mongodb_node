const express = require("express");
const router = express.Router();
const {Pokemon} = require('../models/pokemon.js')
// const {ObjectId}=require('mongodb')
// const {getDb}=require('../db/connect')

router.get("/", async (req, res) => {
  
  const all = await Pokemon.find();
  res.json(all);
});

router.get("/:id", async (req, res) => {
  const one = await Pokemon.findById(req.params.id)
    
  res.json(one);
});

router.post("/", async (req, res) => {
  const newPokemon = await Pokemon.create(req.body);
  res.status(201).json(newPokemon);
});

router.patch("/:id", async (req, res) => {  
  const updated = await Pokemon.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updated) return res.status(404).json({ error: "Not found" });
  res.json(updated);
});
router.delete("/:id",async(req,res)=>{
  const suppr = await Pokemon.deleteOne(req.params.id)
  res.json('Deleted!')
})



module.exports = router;
