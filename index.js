const express = require('express')
const app = express();
const PORT = 3001;
// middleware 
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);
})
//Get /books => return all the books 
app.get('/books', async(req, res) => {
    try {
        res.status(200).json({message: 'Books are returned'})
        
    } catch (error) {
        res.json({error: error.message})
    }
})
// get /books => return single books
app.get('/books/:id', async(req, res) => {
    try {
        const {id} = req.params
        res.status(200).json({message: 'Books  is returned', id})
        
    } catch (error) {
        res.json({error: error.message})
    }
})
//post /books => create a book api
app.post('/books', async(req, res) => {
    try {
        const {name, description} = req.body;
        res.status(200).json({message: `books was created ${name}, ${description}`})
        
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