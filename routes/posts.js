const express = require("express")                                       // importo modulo express
const router = express.Router()                                          // creo variabile router per definire le rotte dei post

// index                                                                // mostra la lista di post
router.get("/", (req, res) => {
    res.send("Show all posts")
})

// show                                                                 // mostra uno specifico post
router.get("/:id", (req, res) => {
    res.send(`Show the post with id: ${req.params.id}`)
})

// store                                                                // crea un nuovo post
router.post("/", (req, res) => {
    res.send("Store a new post")
})

// update                                                               // modifica un post interamente
router.put("/:id", (req, res) => {
    res.send(`Update the post with id: ${req.params.id}`)
})

// modify                                                               // modifica un solo elemento del post
router.patch("/:id", (req, res) => {
    res.send(`Modify the post with id: ${req.params.id}`)
})

// destroy                                                              // elimina post
router.delete("/:id", (req, res) => {
    res.send(`Delete the post with id: ${req.params.id}`)
})

module.exports = router                                                 // esporto il router