const posts = require("../data/lista_posts")                    // importo l'array dei post

// index -> get 
const index = (req, res) => {
    const tag = req.query.tag                                   // prende il parametro ?tag= --- (query al posto di params)
    let filteredList = posts

    if (tag) {
        filteredList = posts.filter((post) => post.tags.includes(tag))   // restituisce i post filtrati che contengono il tag inseito
    }
    // console.log(posts)
    res.json(filteredList)                                      // restituisce tutti i post in formato Json - restituisce i post filtrati
}

// show -> get
const show = (req, res) => {
    const id = Number(req.params.id)
    const foundPost = posts.find((post) => post.id === id)      // cerca il post corrispondente dall'array in base all'id

    if (!foundPost)                                             // se il post non viene trovato (id non compreso nell'array)
        return res.status(404).json({                           // 404 -> risponde con "non trovato"
            error: true,
            message: "post not found"                           // restituisce "post non trovato"
        })
    console.log(foundPost)
    res.json(foundPost)                                         // restituisce il post trovato in formato Json
}

// store -> post
const store = (req, res) => {
    const newPost = {
        id: Date.now(),                                         // l'id viene creato con Date.now()
        ...req.body                                             // dati inviati dal client (contenuto del nuovo post)
    }

    console.log(newPost);
    posts.push(newPost)                                         // aggiunge il nuovo post all'array "posts"


    res.status(201).json(newPost)                               // restituisce "created" -> indica che il nuovo post stato creato correttamente in formato Json
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

    if (!foundPost)
        return res.status(404).json({
            error: true,
            message: "psot not found"
        })

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