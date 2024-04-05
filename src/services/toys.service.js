const ToysDao = require("../daos/toys.dao");

class ToysService {
    constructor(){
        this.dao = new ToysDao(); //ToysDaoMerory, //ToysDaoMongo, //ToysDaoFS
    }

    getAll(){
       return this.dao.getAll();         
    }

    getById(id){    
        return this.dao.getById(id);
    }

    create(toy){
        return this.dao.create(toy);
    }

    update(id, toy){

        const foundToy = this.dao.getById(id);

        if(!foundToy){
            return null; 
        }

        return this.dao.update(id, toy);
    }

    delete(id){

        const toy = this.dao.getById(id);

        if(!toy){
            return null; 
        }

        return this.dao.delete(id);
    }


}


module.exports = ToysService;