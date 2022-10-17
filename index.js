import express from "express"//always
import people from './data.js'
const PORT = 3033
const app = express()//always
app.use(express.json())//withot this line, line 13 wont work

app.get('/people', (req, res) => {
    res.send(people)
})

//make api point that isnt a get
app.post('/people', (req, res) => {
    const newPerson = req.body
    people.push(newPerson)
    res.send(people)
})


app.listen(PORT, () => console.log(`listening to http://localhost:${PORT}...`))