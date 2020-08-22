const models = require('../models');

models.sequelize.sync({force:true});

module.exports = () => {
    const options = {
        force : process.env.NODE_ENV === 'test'? true : false
    }
    return models.sequelize.sync(options);
}