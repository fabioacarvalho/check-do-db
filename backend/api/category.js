module.exports = app => {

    const get = (req, res) => {
        app.db('categorias')
            .select('idcategoria', 'nomecategoria')
            .then(categorias => res.json(categorias))
            .catch(err => res.status(500).send(err))
    }

    return { get }
}