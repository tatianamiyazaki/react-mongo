const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
//    var token = req.query.token || req.headers['x-access-token']
    var token = req.body.token || req.query.token || req.headers['x-access-token']

//    console.log("Retorno Requisição Body...: " + req.body.token)
//    console.log("Retorno Requisição Query..: " + req.query.token)
    console.log("Retorno Requisição Headers: " + req.headers['x-access-token'])

//    var token = req.headers['x-access-token']
 
 //   var {token} = req.body
    console.log("Token.: " + token)
 //   console.log("Token Header: " + req.headers['x-access-token'])    
 //   var token = req.headers['x-access-token'];
 
 //   if (!token) return res.status(401).send({ auth: false, message: 'Nenhum Token no servidor.' });

    jwt.verify(token, process.env.JWT_KEY, function (err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Falha ao autenticar com o Token.' });

        // se tudo estiver ok, salva no request para uso posterior
        req.decoded = decoded;
        next();
    });
/*
    try {
        if(token) {
            jwt.verify(token, process.env.JWT_KEY)
            ? res.json({status: true})
            : res.json({status: false})
        } else {
            res.json({status: false})
        }
    } catch (error) {
        return res.status(500).json
    }

/*
jwt.verify(token, process.env.JWT_KEY, function (err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Falha ao autenticar o Token.' });

        // se tudo estiver ok, salva no request para uso posterior
        req.userId = decoded.id;
        next();
    });
    
}
*/
}
