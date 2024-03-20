express = require('express')
cors = require('cors')

app = express()
app.use(cors())

app.get("/",(req,res)=>{
    res.json('Helo')
})

app.listen(4000,()=>{
    console.log("server running on port 4000")
})