require('dotenv').config()
const express = require('express')
const { v4: uuidv4 } = require('uuid');
const app = express();
const PORT = 3001;
const pool = require('./db')
// middleware 
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);
})
//Get /books => return all the books 
app.get('/books', async(req, res) => {
    try {
        const books = await pool.query('SELECT * FROM book')
        res.status(200).json({message: 'Books are returned', data: books.rows})
        
    } catch (error) {
        res.json({error: error.message})
    }
})
// get /books => return single books
app.get('/books/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const book = await pool.query('SELECT * FROM book WHERE id=$1', [id])
        res.status(200).json({message: 'Single Books  is returned', data: book.rows})
        
    } catch (error) {
        res.json({error: error.message})
    }
})
//post /books => create a book api
app.post('/books', async(req, res) => {
    try {
        const {name, description} = req.body;
        const id = uuidv4();
        // insert book data to database 
        const newBook = await pool.query("INSERT INTO book (id, name, description) VALUES ($1, $2, $3) RETURNING *", [id, name, description])

        res.status(200).json({message: `book data inserted `, data: newBook.rows})
        
    } catch (error) {
        res.json({error: error.message})
    }
})


// delete /books/:id => delete a books 
app.delete('/books/:id', async(req, res) => {
    try {
        const {id} = req.params
        res.status(200).json({message: 'Books  is delete', id})
        
    } catch (error) {
        res.json({error: error.message})
    }
})
//put /books/:id => update a books 
app.put('/books/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const {name, description} = req.body;
        res.status(200).json({message: `books was updated ${name}, ${description}`})
        
    } catch (error) {
        res.json({error: error.message})
    }
})