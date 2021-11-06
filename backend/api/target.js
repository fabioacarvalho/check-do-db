module.exports = app => {

    const get = (req, res) => {

        app.db('tarefas')
            .select('idcategoria', 'situacao', 'idusuario', 'idcategoria', 'nometarefa', 'descricao', 'dataconclusao')
            .then(tarefas => res.json(tarefas))
            .catch(err => res.status(500).send(err))

    }

    return { get }

}