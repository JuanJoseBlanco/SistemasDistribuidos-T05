const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

const people =[
    {name:'Camilo', age: "15", phone: "3108093377", id: "1569874256"},
    {name:'Andrea', age: "22", phone: "3108093377", id: "1205874963"},
    {name:'Juan', age: "7", phone: "3108093377", id: "25896471"},
];

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

app.get('/', (req, res) => {
	res.send('Bienvenido a los forms')
})

app.get('/people', (req, res) => {
	res.send(people)
})

app.post('/people/add', (req, res) => {
	people.push({name:req.body.name , age: req.body.age, phone: req.body.phone, id: req.body.id})
	res.send('Añadido')
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})

