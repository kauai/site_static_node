const express = require('express')
const app = express()
const axios = require('axios')
const path = require('path');
const port = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.set('views',path.join(__dirname, 'view'));
app.use('/static',express.static('public'))

app.get('/',async (req,res) => {
     const { data:users } = await axios.get('https://jsonplaceholder.typicode.com/users')
     console.log(path.join(__dirname, 'public'))
     res.render('./',{ users })
})

app.listen(port,(e) => {
    if(e) console.log(e)
    console.log(`Server to run on port ${port}`)
})

