const express = require('express')
const users = require('../users.json')

const app = express()
const SERVER_PORT = 4545

app.get('/api/users', (req, res) => {
  console.log('hit')
  res.status(200).send(users)
})

app.get('/api/user/:id', (req, res) => {
  //  const id = req.params.id
  const { id } = req.params

  if (!id) {
    res.status(404).send('unable to find resource')
  }

  const user = users.find(user => user.id === +id)
  if (!user) {
    res.status(500).send('user is not on list')
  }
  res.status(200).send(user)
})

app.listen(SERVER_PORT, () => console.log(`take us to warp ${SERVER_PORT}`))