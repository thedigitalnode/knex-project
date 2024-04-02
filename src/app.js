const express = require('express');
const app = express();
const PORT = process.env.PORT || 8081;
const knex = require('knex')(require('../knexfile.js')[process.env.NODE_ENV||'development']);

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Application up and running.')
})

app.listen(PORT, () => {
  console.log(`Your Knex and Express application are running successfully on ${PORT}`)
})

app.get('/pets', (req, res) => {
  knex('pet')
    .select('*')
    .then(data => {
      let petNames = data.map(pet => pet.name)
      res.json(petNames);
    })
})