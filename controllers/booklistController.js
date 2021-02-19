let express = require('express');
let router = express.Router();
let validateSession = require('../middleware/validate-session');
const Books = require('../db').import('../models/books');


router.post('/create', validateSession, (req, res) => {
    const BooksEntry = {
        owner: req.user.id,
        title: req.body.books.title,
        author: req.body.books.author,
        finished: req.body.books.finished,
        tbr: req.body.books.tbr,
        genre: req.body.books.genre
       
    }
    Books.create(BooksEntry)
    .then(book => res.status(200).json(book))
    .catch(err => res.status(500).json({error: err}))
});



router.get('/myList', validateSession, (req, res) => {
    let userid = req.user.id
    Books.findAll({
        where: {owner: userid}
    })
    .then(book => res.status(200).json(book))
    .catch(err => res.status(500).json({error: err}))
});


router.put('/update/:entryId', validateSession, function (req, res) {
    const updateBooksEntry = {
        title: req.body.books.title,
        author: req.body.books.author,
        finished: req.body.books.finished,
        tbr: req.body.books.tbr,
        genre: req.body.books.genre
    };

    const query = { where: {id: req.params.entryId, owner: req.user.id}};

    Books.update(updateBooksEntry, query)
    .then((book) => res.status(200).json(book))
    .catch((err) => res.status(500).json({error:  err}));
});


router.get('/bookList', validateSession, (req, res) => {
    
    Books.findAll({
        where: {}
    })
    .then(book => res.status(200).json(book))
    .catch(err => res.status(500).json({error: err})) 
});


router.delete('/delete/:id', validateSession, function (req, res) {
    const query = { where: { id: req.params.id, owner: req.user.id }};

    Books.destroy(query)
    .then(() => res.status(200).json({ message: "Bookworm entry removed"  }))
    .catch((err) => res.status(500).json({ error: err } ));
});



module.exports = router;
