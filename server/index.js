const express = require("express")
const cors = require("cors")
const dbConnnect = require("./config/db")
const router = require("./routes/userRoute")

const app = express()
app.use(express.json())
app.use(cors())

app.use("/", router)


app.get("/" , (req,res) =>{
    res.send("<h1>Backend is working perffectly 😀 </h1>")
})

app.listen(3001, () => console.log("server is running"))

dbConnnect()