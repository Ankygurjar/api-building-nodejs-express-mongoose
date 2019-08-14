const express = require('express');
const bodyParser = require('body-parser');
const dbConfig =require('./config/database.config.js');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({extended:true}))

app.use(bodyParser.json())

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
  userNewUrlParser : true
}).then(()=>{
  console.log("Successfully connected to database");
}).catch(err => {
  console.log("Error connecting to the database", err);
  process.exit();
});

app.get('/',(req, res)=>{
  res.json({"message" : "Welcome to this application buil to demonstrate how to perform database related queries using Node Js and MongoDb" })
});

require('./app/routes/note.routes.js')(app);

app.listen(3000, ()=>{
  console.log("Server is listening on port 3000!!")
});
