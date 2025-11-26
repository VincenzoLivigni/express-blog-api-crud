const posts = require("../data/lista_posts")                    // importo l'array dei post

// index -> get 
const index = (req, res) => {
    res.send("Show all posts")
}

// show -> get
const show = (req, res) => {
    res.send(`Show the post with id: ${req.params.id}`)
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
    res.send(`Delete the post with id: ${req.params.id}`)
}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}