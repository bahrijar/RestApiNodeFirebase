var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')

var app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res)=>{
    res.send('<h1>Express & Firebase created </h1>')
})

require("./src/routes/test.routes")(app);

app.listen(3210, ()=>{
    console.log('Server aktif port 3210 yee bang')
})