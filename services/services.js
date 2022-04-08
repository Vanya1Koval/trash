const arrUser = require('../storage.js');

class Serv {

    getAll() {
        return JSON.stringify(arrUser);
    }
}
    
module.exports = Serv;
