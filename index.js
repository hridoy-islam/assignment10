const express = require('express')
const app = express()
var cors = require('cors')
const port = 5000

app.use(cors())

const courses = require('./data/Courses.json')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/courses', (req, res)=> {
    res.send(courses);
})
app.get('/courses/:id', (req, res)=> {
    const data = courses.find(course => course._id === req.params.id)
    res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})