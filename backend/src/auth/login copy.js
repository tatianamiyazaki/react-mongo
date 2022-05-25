const jwt = require('jsonwebtoken')
/*
module.exports = (req, res, next) => {
    const hash = 'Body: ' + req.body.token + 
                    'Key: ' + process.env.JWT_KEY
    console.log('Hash:' + hash)                    

    try{
        const decode = jwt.verify(req.body.token, process.env.JWT_KEY)
        console.log(decode)
        req.usuario = decode
        next()
    } catch (error) {
        return res.status(401).send({ mensagem: 'Falha na autenticação - Auth'})

    }
}
*/

/*
function verifyJWT(req, res, next){
//function login(req, res, next){
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
      
      // se tudo estiver ok, salva no request para uso posterior
      req.userId = decoded.id;
      next();
    });
  }
*/

module.exports = (req, res, next) => {
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'Nenhum Token no servidor.' });

    jwt.verify(token, process.env.JWT_KEY, function (err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Falha ao autenticar o Token.' });

        // se tudo estiver ok, salva no request para uso posterior
        req.userId = decoded.id;
        next();
    });
}

