const arrUser = require('../storage.js');

class Serv {

    getAll() {
        return arrUser;
    }
}
    
module.exports = Serv;
