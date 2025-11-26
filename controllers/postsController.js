const posts = require("../data/lista_posts")                    // importo l'array dei post

// index -> get 
const index = (req, res) => {
    // console.log(posts)
    res.json(posts)                                             // restituisce tutti i post in formato Json
}

// show -> get
const show = (req, res) => {
    const id = Number(req.params.id)
    const foundPost = posts.find((post) => post.id === id)      // cerca il post corrispondente dall'array in base all'id
    //console.log(foundPost)
    res.json(foundPost)                                         // restituisce il post trovato in formato Json
}

// store -> post
const store = (req, res) => {
    res.send("Store a new post")
}

// update -> put
const update = (req, res) => {
    res.send(`Update the post with id: ${req.params.id}`)
}

// modify -> patch
const modify = (req, res) => {
    res.send(`Modify the post with id: ${req.params.id}`)
}

// destroy -> delete 
const destroy = (req, res) => {
    const id = Number(req.params.id)
    const foundPost = posts.find((post) => post.id === id)      // cerca il post corrispondente dall'array in base all'id

    posts.splice(posts.indexOf(foundPost), 1)                   // rimuove il post che corrisponde all'id dall'array
    console.log(posts)                                          // stampa nel terminale la lista di post aggiornata (tranne quello eliminato)
    res.sendStatus(204)                                         // 204 -> risponde con "nessun contenuto"
}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}