import express from "express"//always calling library from npm i express
import people from './data.js'// import data from data.js file(instead db)
const PORT = 3033 // declare port 3000-4000 local on our computer
const app = express()//always Calls the express function "express()" 
//and puts new Express application inside the app variable 
//(to start a new Express application)
app.use(express.json())//without this line, line 14 wont work. Read req in json

app.get('/people', (req, res) => {// routing methods for the express app
    res.send(people)
})

//make api point that isn't a get
app.post('/people', (req, res) => {
    const newPerson = req.body
    people.push(newPerson)
    res.send(people)
})


app.listen(PORT, () => console.log(`listening to http://localhost:${PORT}...`))