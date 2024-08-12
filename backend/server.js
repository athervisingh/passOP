const express = require('express')
const dotenv = require('dotenv')
const { MongoClient } = require('mongodb');
dotenv.config()     
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const bodyparser = require('body-parser');
const cors = require('cors');


const dbName = 'passop';
const app = express()
const port = 3000
app.use(bodyparser.json())
app.use(cors())
client.connect()

//get all the password
app.get('/', async (req, res) => {
    const db = client.db(dbName)
    const collection = db.collection('passwords');
    const findResult = await collection.find({}).toArray();
    res.json(findResult);
})


//save all the password
app.post('/', async (req, res) => {
    const db = client.db(dbName)
    const password= req.body
    const collection = db.collection('passwords');
    const findResult = await collection.insertOne(password);
    res.json({success:true,result:findResult});
})


//delete all the password
app.delete('/', async (req, res) => {
  const db = client.db(dbName)
    const password= req.body
    const collection = db.collection('passwords');
    const findResult = await collection.deleteOne(password);
    res.json({success:true,result:findResult});
})

app.listen(port, () => {
  console.log(`Example app listening on  http://localhost:${port}`)
})