// importa o model correspondente
const usersModels = require('../models/usersModels')()

const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

module.exports = {

    async create(req, res) {
//        try {
            const { fullname, password, email, email_confirmed } = req.body
            const user = await usersModels.findOne({ email })
    
            console.log('Nome: '+fullname + " - " + "e-mail: " + email + " - Password: "+password)

            return res.json(user);

/*            
            if (!user) {
                console.log('\e-mail não existente!!!! ')
                const salt = bcrypt.genSaltSync();
                console.log('Algoritmo: '+salt)
                user.password_hash = bcrypt.hashSync(user.password, salt)

            } else {
                return res.status(400).json({ error: 'e-mail encontrado! ' + fullname })
            }

            await usersModels.create({
                fullname,
                password_hash,
                email,
                email_confirmed
            });
            return res.json(user);
        }
        catch (error) {
            console.error(error)
            res.status(500).send(error)
        }
    },



    /*
    //Função que retorna uma única entrada do user
    // com base no id fornecido
    controller.retrieveOne = async (req, res) =>{
        try{
            const id = req.params.id
            const result = await User.findById(id)
            //se tivermos um resultado, retornamos com status HTTP 200
            if(result) res.send(result)
            //Senão , retornamos HTTP 404: Not Found
           // else res.send(404).end()
           else res.status(404).end()
        }
        catch(error){
            console.error(error)
            // HTTP 500: Internal Server error
            res.status(500).send(error)
        }
    
    },
    
    controller.update = async (req, res) => {
        try{
            const id = req.body._id
            const result = await User.findByIdAndUpdate(id, req.body)
            //HTTP 204: no Content
            if(result) res.status(204).end()
            else res.status(404).end()
        }
        catch(error){
            console.error(error)
            // HTTP 500: Internal Server error
            res.status(500).send(error)
        }  
    },
    
    controller.delete = async (req, res) => {
        try{
            const id = req.body._id
            const result = await User.findByIdAndDelete(id)
            if(result) res.status(204).end()
            else res.statu(404).end()
        }
        catch(error){
            console.error(error)
            // HTTP 500: Internal Server error
            res.status(500).send(error)
        }  
    }
    
    */

}


