const {MongoClient}=require('mongodb')

const client = new MongoClient('mongodb+srv://afecstudentjfld40:0000@cluster0.4euqgsp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
let db
async function connect(){
    await client.connect()
    db=client.db('exercicesCRUD')
    
    console.log('✅ Connecté a MongoDB')
}
function getDb(){
return db;
}
module.exports={connect, getDb}
