const { getDb } = require('../db/connect');
const { ObjectId } = require('mongodb');

const collection = () => getDb().collection('pokemons');

function isValidObjectId(id) {
    return ObjectId.isValid(id);
}

async function findAll() {
    return collection().find().toArray();
}

async function findById(id) {
    if (isValidObjectId(id)) {
        return collection().findOne({ _id: new ObjectId(id) });
    }
    return null; // Si l'ID n'est pas valide, renvoie null
}

async function create(pokemon) {
    const result = await collection().insertOne(pokemon);
    return { _id: result.insertedId, ...pokemon };
}

async function update(id, data) {
    if (isValidObjectId(id)) {
        await collection().updateOne({ _id: new ObjectId(id) }, { $set: data });
        return findById(id);
    }
    return null; // Si l'ID n'est pas valide, renvoie null
}

async function remove(id) {
    if (isValidObjectId(id)) {
        const result = await collection().deleteOne({ _id: new ObjectId(id) });
        return result.deletedCount > 0;
    }
    return false; // Si l'ID n'est pas valide, renvoie false
}

module.exports = { findAll, findById, create, update, remove };
