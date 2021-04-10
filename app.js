const express = require('express');
const app = express()
const db = require('./db_config');
const user = require('./routes/user')
const product = require('./routes/product')
const transaction = require('./routes/transaction')
const cors = require('cors')
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use(cors())

app.use((req,res,next) => {
    req.context = {db}
    next()  
})

app.use('/user',user)
app.use('/product',product)
app.use('/transaction',transaction)

app.listen(process.env.PORT || 2021,(err) => {
  if(process.env.PORT)console.log("running on"+process.env.PORT);
  console.log("running on 2021");
})