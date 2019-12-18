const express = require('express');
const app= express();
var cors = require('cors')
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
var db

MongoClient.connect('mongodb+srv://elifberkay:berkay1234.@ceptesok-homz1.mongodb.net/sok?retryWrites=true&w=majority', (err, client) => {
    if (err) return console.log(err)
    db = client.db('sok') // whatever your database name is
    app.listen(process.env.PORT || 5000, () => {
      console.log('listening on 5000')
    })
  })
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true , limit : '1mb'})); 
app.use(bodyParser.json());

app.get("/",async(req,res)=>{
   res.status(200).send("Hoşgeldiniz")
 })
app.get("/api/v1/products",async(req,res)=>{
    if(req.query.page=="undefined"){
        console.log(req.query.page)
        console.log( Number(req.query.page))
        req.query.page=1;
    }
     var cursor = await db.collection(req.query.order).find({"pagination.page":  Number(req.query.page), "info.categoryId":Number(req.query.categoryId)}).toArray(function(err, results) {
         if(err){
            res.status(204).send("err")
         }
         res.status(200).json(JSON.stringify(results[0]))
         
      })
    }) 
