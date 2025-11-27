const express = require("express")
const app = express()
const port = 3000

const postsRouter = require("./routes/posts")                   // importo router dei post

app.use(express.static("public"))

app.use(express.json())                                         // body-parser -> permette all'app di leggere le request-body in formato JSON

app.get("/", (req, res) => {
    res.send("Welcome to my blog")
})

app.use("/posts", postsRouter)                                  // tutte le richieste a "/posts/.." verranno gestite da "postsRouter"

app.listen(port, () => {
    console.log(`Example app ${port}`)
})