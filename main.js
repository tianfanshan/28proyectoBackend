const express = require("express")
const app = express()
const port = 8000

app.use(express.json())


//prueba para branch


app.listen(port,()=>{
    console.log('Servers running!!!' + port)
})
