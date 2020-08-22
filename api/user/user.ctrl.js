// var users = [
//     { id: 1, name: 'alice'},
//     { id: 2, name: 'bek'}, 
//     { id: 3, name: 'chris'}
// ];
const models = require('../../models');
const index = function (req, res) {
    req.query.limit = req.query.limit || 10;
    const limit = parseInt(req.query.limit, 10);
    if (Number.isNaN(limit)) {
        return res
            .status(400)
            .end();
    }
    models.User.findAll({
        limit: limit
    }) 
        .then(users => {
            res.json(users);
        })
    // res.json(users.slice(0, limit));
};

const show = function(req, res){
    const id = parseInt(req.params.id, 10);
    if (Number.isNaN(id)) return res.status(400).end();

    models.User.findOne({
        where:{id}
    }).then(user =>{
        if (!user) return res.status(404).end();
        res.json(user);
    })

    res.json(user);
}

const destroy = function(req, res){
    const id = parseInt(req.params.id, 10);
    if (Number.isNaN(id)) return res.status(400).end();
    models.User.destroy({
        where: {id}
    }).then(() => {
        res.status(204).end();
    });
    // res.status(204).end();
};

const create = function(req,res) {

    const name = req.body.name;
    if(!name) return res.status(400).end();

    models.User.create({name})
    .then(user => {
        res.status(201).json(user);
    })
    .catch(err => {
        if(err.name === 'SequelizeUniqueConstraintError'){
            return res.status(409).end();
        }
        res.status(500).end();
    })

    // const isConflict = users.filter(user => user.name === name).length;
    // if(isConflict) return res.status(409).end();

    // const id = Date.now();
    // const user = {id, name};
    users.push(user);
    res.status(202).json(user);
};

const update = function(req, res)  {
    const id = parseInt(res.params.id, 10);
    if (Number.isNaN(id)) return res.status(400).end();

    const name = req.body.name;
    if (!name) return res.status(400).end();

    // const isConflict = users.filter(user => user.name === name).length;
    // if (isConflict) return res.status(409).end();

    // const user = users.filter(user => user.id === id)[0];
    // user.name = name;
  
    models.User.findOne({where: {id}})
    .then(user =>{
        if (!user) return res.status(404).end();

        user.name = name;
        user.save() 
            .then( _=>{
                res.json(user);
            })
            .catch(err => {
                if(err.name === 'SequelizeUniqueConstraintError'){
                    return res.status(409).end();
                }
                res.status(500).end();
            })
    })
    res.json(user);
  }

module.exports = {
    index, show, destroy, create, update
};