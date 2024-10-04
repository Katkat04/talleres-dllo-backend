//Taller 4 - Katy Julieth Diaz Beltrán
//CIU 200142505

const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

const data = JSON.parse(fs.readFileSync('./public/23-taller-04-datos.json'))

// Punto 1: usuarios por hobby
app.get('/users/hobby', (req, res) => {
  const hobby = req.query.hobby
  if (!hobby) {
    return res.status(400).json({ error: "Envía un hobby" })
  }
  const filteredUsers = data.filter(user => user.hobbies.includes(hobby))
  res.json(filteredUsers)
})

// Punto 2: id enviado existe
app.get('/users/exists', (req, res) => {
  const userId = parseInt(req.query.id)
  if (!userId) {
    return res.status(400).json({ error: "Envía un id " })
  }
  const userExists = data.some(user => user.id === userId)
  if (userExists) {
    res.json({ message: `Si existe` })
  } else {
    res.status(404).json({ message: `No existe` })
  }
})

// Punto 3: equipo de pilotos
app.get('/users/team-experience', (req, res) => {
  const teamName = req.query.team
  if (!teamName) {
    return res.status(400).json({ error: "Envía el nombre de un equipo" })
  }
  const teamMembers = data.filter(user => user.team === teamName)
  if (teamMembers.length === 0) {
    return res.status(404).json({ message: `El usuario no está en el equipo` })
  }
  const totalExperience = teamMembers.reduce((total, user) => total + user.years, 0)
  res.json(totalExperience)
})

// Punto 4: pilotos de una facción enviada
app.get('/users/by-faction', (req, res) => {
  const faction = req.query.faction
  if (!faction) {
    return res.status(400).json({ error: "Envía una facción" })
  }
  const factionMembers = data.filter(user => user.faction === faction)
  if (factionMembers.length === 0) {
    return res.status(404).json({ message: `No está en la facción` })
  }
  const names = factionMembers.map(user => user.name)
  res.json(names)
})

//Punto 5: añadir usuario
function generateUniqueId() {
  let id;
  do {
    id = Math.floor(Math.random() * 1000); 
  } while (users.some(user => user.id === id)); 
  return id;
}
app.post('/users', (req, res) => {
  const { name, carrera } = req.body
  if (!name || !carrera) {
    return res.status(400).json({ error: "Faltan datos" })
  }
  const newUser = {
    id:generateUniqueId(), 
    name,
    carrera,
  }
  users.push(newUser)
  res.status(201).json(newUser)
})
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})