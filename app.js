import express from 'express'

import * as database from './mysqlDatabase.js'

const app = express()
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true}))
app.use(express.static('public'))



app.get('/', async (req, res) => {
    const notes = await database.getNotes()
    res.render('index.ejs', {listOfNotes: notes})
})



app.post('/createNote', async (req, res) => {
    console.log(req.body)
    const {title, content} = req.body

    await database.addNotes(title, content)

    res.redirect('/')
})

app.post('/deleteListOfNotes', async (req, res) =>{
    const {id} = req.body
    await database.deleteNote(id)
})


const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log("server is running on port 8000", port)
})