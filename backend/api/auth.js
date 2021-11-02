const { authSecret } = require('../.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const signin = async (req, res) => {
        if(!req.body.email || !req.body.password) {
            return res.status(400).send('Informe o usuário e senha!')
        }
        const user = await app.db('usuarios')
            .where({ email: req.body.email })
            .first()
        
        if(!user) return res.status(400).send('Usuario não encontrado!')

        const isMatch = bcrypt.compareSync(req.body.password, user.password)
        if(!isMatch) return res.status(401).send('Email/Senha invalidos!')

        //Gerar Token
        const now = Math.floor(Data.now() / 1000)

        const payload = {
            id: user.idusuario,
            name: user.nomeusuario,
            email: user.email,
            admin: user.administrador,
            iat: now,
            exp: now + (60 * 60 * 24 * 3)
        }
        //exp: now + (60 * 60 * 24 * 3) -> 60 seg 60min * 24h * 3dias 
        //Vamos passar o payload e depois o gerador de token 
        res.json({
            ...payload,
            token: jwt.encode(payload, authSecret)
        })
    }

        //VAlidação do Token
        const validateToken = async (req, res) => {
            const userData = req.body || null

            try{
                if(userData) {
                    const token = jwt.decode(userData.token, authSecret)
                    if(new Date(token.exp * 1000) > new Date()) {
                        return res.send(true)
                    }
                }
            } catch(e) {

            }
            res.send(false)
        }

    return { signin, validateToken }
}