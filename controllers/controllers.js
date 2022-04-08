const Serv = require('../services/serv.js')

function getAll (request, response){
    response
            .status(200)
            .send(Serv.getAll())
};

module.exports = getAll;
