class ToysDao {
    static id = 0; 
    
    constructor(){
        this.toys = []
    }

    getAll(){
        return this.toys; 
    }

    getById(id){
        const toy = this.toys.find(t=>t.id == id)
        return toy; 
    }

    create(toy){
        toy.id = ++ToysDao.id; 
        this.toys.push(toy)
        return toy; 
    }

    update(id, toy){ // 1, {description:'puzzle 1000'}
        const index = this.toys.findIndex(t=>t.id == id);
        // { description: 'puzzle', sales: 10, id : 1 }<---objeto anterior
        this.toys[index] =  {...this.toys[index], ...toy}; 
        return this.toys[index]; 
    } 

    delete(id){
        this.toys = this.toys.filter(t=>t.id != id)
    }
}

module.exports = ToysDao;