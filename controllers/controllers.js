const serv = require('../services/serv.js')

function getAll (request, response){
    response.send(serv.getAll);
};

module.exports = getAll;
