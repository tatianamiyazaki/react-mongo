const express = require('express')
const routes = express.Router()

const controllers = require('../controllers/indexControllers.js')
const usersControllers = require('../controllers/usersControllers.js')

// rota raiz
routes.get('/', controllers.indexRaiz)


// rotas de usuarios
routes.post('/users', usersControllers.create)
routes.get('/users', usersControllers.index)
routes.get('/users/:id', usersControllers.indexId)
 




module.exports = routes

