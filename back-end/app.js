const express = require('express');
const app= express();
var cors = require('cors')
const bodyParser = require("body-parser");
const authenticationMiddleware = require("./authmiddleware");
const jwt = require("jsonwebtoken")
const { MongoClient } = require("mongodb");
const secret = "yuceengindaglara"
const bcrypt = require('bcrypt');
const saltRounds = 10;
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
app.use(bodyParser.json({limit: '10mb', extended: true}));

app.post("/Giris",async (req,res)=>{ 
    if(!req.body || !req.body.email || !req.body.password) return res.sendStatus(400)
    
      console.log(req.body.password)
            await db.collection('user').find({"email":req.body.email}).toArray(function(err, results) {
            if(results.length < 1) return res.status(401).json("kullanıcı bulunamadı")
            if(err){
              console.log(err)
              return res.status(400).json("user")
            }
           else{
            if(bcrypt.compareSync(req.body.password, results[0].password)) {
                let {id, email,nsname} = results[0]
                let token = jwt.sign({id, email, ip: req.ip, userAgent: req.headers["user-agent"]}, secret, {
                    expiresIn: 86400
                });
                return res.status(200).json({id, email, token, nsname})
             } else {
               return res.status(403).send("Şifre yanlış")
             }
            return res.status(403).send("No token")
           }            
        })   
  })

app.post("/Kayit",async (req,res)=>{ 
  if( !req.body || !req.body.password || !req.body.mnumber || !req.body.email ||!req.body.nsname ) return res.status(400).send('Bad Request');
  var mailregx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if(!mailregx.test(req.body.email)) return res.send("mail adresi geçersiz");
  await db.collection("user").find({$or : [ {"email":req.body.email},{"mnumber":req.body.mnumber}]}).toArray((err, items) => {
      if(items[0]===undefined){
        bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
            db.collection('user').insert({
              "email":req.body.email,
              "nsname":req.body.nsname,
              "password":hash,
              "mnumber":req.body.mnumber
            }).then(()=>{
                return res.status(200).send('OK')
            })
        })
      }
      else
      {
        return res.status(406).send('Not Acceptable')
      }
  })

})
app.post("/setBasket",authenticationMiddleware(jwt,secret), (req,res)=>{
  console.log(req.body.bucket)
   db.collection("user").update({"email":req.decoded.email},{$set:{"Basket":Buffer.from(req.body.bucket).toString('base64')}},function(err, result) {
    if (err){
       console.log(err);return res.status(406).send('Not Acceptable')
    }else{
      console.log(result)
      return res.status(200).send('OK')
    }
  })
})
app.post("/getBasket",authenticationMiddleware(jwt,secret), (req,res)=>{
    db.collection('user').findOne({"email":req.decoded.email},function(err,result){
    if(err) res.status(406).send('Not Acceptable')
    else{
      res.setHeader('Content-Type', 'application/json');
      if(result.Basket !==undefined)res.status(200).send(Buffer.from(result.Basket,'base64').toString('UTF-8'))
      else res.status(200).send("empty")
    }
  })
})
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
         res.status(200).json(results[0])
         
      })
    }) 
