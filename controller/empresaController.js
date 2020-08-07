/*

index – Lista os dados da tabela
show – Mostra um item específco
create – Salva o novo item na tabela
update – Salva a atualização do dado
destroy – Remove o dado

*/

const db = require('../models');

module.exports = {

    index(_, res) {
        return db.Empresa.findAll()
        .then((empresas) => res.send(empresas))
        .catch((err) => {
          console.log('There was an error querying empresa', JSON.stringify(err))
          return res.send(err)
        });
    },
    show(req, res) {
        const id = parseInt(req.params.id)
        return db.Empresa.findById(id)
          .then((empresas) => res.send(empresas))
          .catch((err) => {
            console.log('There was an error querying empresa', JSON.stringify(err))
            return res.send(err)
          })        
    },
    create(req, res) {
        const { nome, documento } = req.body
        return db.Empresa.create({ nome, documento })
          .then((empresa) => res.send(empresa))
          .catch((err) => {
            console.log('***There was an error creating a empresa', JSON.stringify(contact))
            return res.status(400).send(err)
          })        
    },
    destroy(req, res) {
        const id = parseInt(req.params.id)
        return db.Empresa.findById(id)
          .then((empresa) => empresa.destroy({ force: true }))
          .then(() => res.send({ id }))
          .catch((err) => {
            console.log('***Error deleting empresa', JSON.stringify(err))
            res.status(400).send(err)
          })        
    },
    update(req, res) {
        const id = parseInt(req.params.id)
        return db.Empresa.findById(id)
        .then((empresa) => {
          const { nome, documento } = req.body
          return empresa.update({ nome, documento })
            .then(() => res.send(empresa))
            .catch((err) => {
              console.log('***Error updating empresa', JSON.stringify(err))
              res.status(400).send(err)
            })
        })        
    }
};