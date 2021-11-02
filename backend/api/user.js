const bcrypt = require('bcrypt-nodejs')


module.exports = app => {

    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation

    const encryptPassword = senha => {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(senha, salt)
    }

    const save = async (req, res) => {
        const user = { ...req.body }
        if(req.params.id) user.id = req.params.id

        try {
            existsOrError(user.nomeusuario, 'Nome não informado')
            existsOrError(user.email, 'E-mail não informado')
            existsOrError(user.senha, 'Senha não informada')
            existsOrError(user.confirmeSenha, 'Confirmação de Senha inválida')
            equalsOrError(user.senha, user.confirmeSenha,
                'Senhas não conferem')

            const userFromDB = await app.db('usuarios')
                .where({ email: user.email }).first()
            if(!user.idusuario) {
                notExistsOrError(userFromDB, 'Usuário já cadastrado')
            }
        } catch(msg) {
            return res.status(400).send(msg)
        }
        user.senha = encryptPassword(req.body.senha)
        delete user.confirmeSenha

        if(user.idusuario) {
            app.db('usuarios')
                .update(user)
                .where({ idusuario: user.idusuario })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('usuarios')
                .insert(user)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const get = (req, res) => {
        app.db('usuarios')
            .select('idusuario', 'nomeusuario', 'email', 'administrador')
            .then(usuarios => res.json(usuarios))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('usuarios')
            .where({ idusuario: req.params.id })
            .first()
            .then(user => res.json(user))
            .catch(err => res.status(500).send(err))
    }

    return { save, get, getById }
}