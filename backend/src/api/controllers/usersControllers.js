// importa o model correspondente
const usersModels = require('../models/usersModels')()

const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

module.exports = {

    async create(req, res) {
        try {
            const { fullname, password, email } = req.body
            const user = await usersModels.findOne({ email })

            console.log('Nome: ' + fullname + " - " + "e-mail: " + email + " - Password: " + password)

            if (!user) {
                console.log('\e-mail não existente!!!! ')
                const salt = bcrypt.genSaltSync();
                console.log('Algoritmo: ' + salt)
                password_hash = bcrypt.hashSync(password, salt)
                email_confirmed = true

            } else {
                return res.status(400).json({ error: 'e-mail encontrado! ' + fullname })
            }

            console.log('Gravando novo registro!!!')

//            const funcionario = await Funcionarios.create({

            const users = await usersModels.create({
                fullname,
                password_hash,
                email,
                email_confirmed
            });
            return res.json(users);
        }
        catch (error) {
            console.error(error)
            res.status(500).send(error)
        }

    },


    async index(req, res) {
        try {
            const result = await usersModels.find()
            res.send(result)
        }
        catch (error) {
            console.error(error)
            res.status(500).send(error)
        }
    },


    async indexId(req, res) {
        try{
            const id = req.params.id
            console.log('Parametro: '+id)
            const user = await usersModels.findById(id)
            if(user) res.send(user)
           else res.status(404).end()
        }
        catch(error){
            console.error(error)
            res.status(500).send(error)
        }
    
    },

}


