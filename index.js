const express = require('express')
const app = express();
const PORT = 3001;
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
app.get('/books/:id', async(req, res) => {
    try {
        const {id} = req.params
        res.status(200).json({message: 'Books  is returned', id})
        
    } catch (error) {
        res.json({error: error.message})
    }
})
//post /books/:id => return single book based on id
//post /books => create a book
//put /books/:id => update a books 
// delete /books/:id => delete a books 