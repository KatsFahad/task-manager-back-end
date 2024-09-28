const express = require('express')

const app = express()

const PORT = 4300

app.listen(()=>{
    console.log(`Listening on http//:localhost${PORT}`)
})