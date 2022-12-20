const mongoose = require('mongoose');

async function connect()
{
    await mongoose.connect('mongodb://pratham_CRUD:CRUD_APP@ac-br48qg2-shard-00-00.af3tbgq.mongodb.net:27017,ac-br48qg2-shard-00-01.af3tbgq.mongodb.net:27017,ac-br48qg2-shard-00-02.af3tbgq.mongodb.net:27017/?ssl=true&replicaSet=atlas-567jmz-shard-0&authSource=admin&retryWrites=true&w=majority');



}

connect()
    .then((res) =>
    {
        console.log('Database Connected');
    })
    .catch((err) =>
    {
        console.log(err);
        return;
    })