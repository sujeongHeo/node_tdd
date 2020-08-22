const app = require('../index');
const syncDb = require('./sync-db');

syncDb().then(_=>{
    console.log('Sync datbase!');
    app.listen(3000, () =>{
        console.log('Server is ruccinnsdf in 3000');
    })
})


