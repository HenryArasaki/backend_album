const express = require('express')
const bodyParser = require('body-parser')


const knexConfig = require('./db/knexfile');
const knex = require('knex')(knexConfig)

const app = express()
const port = 3000

app.use(bodyParser.json())

console.log(knex('users').select('name','id').toString())

app.get('/user', (req, res) => {
    knex('users')
        .select('id','name','email').where('id','=','8')
        .then((users) => {
            return res.json(users);
        })
        .catch((err) => {
            console.error(err);
            return res.json({ success: false, message: 'An error occurred, please try again later.' });
        })
})

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))