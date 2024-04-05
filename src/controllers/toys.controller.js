const ToysService = require("../services/toys.service")

const toysService = new ToysService();

const getToys = (req, res)=>{
    res.send({status:'success', message:'getting all toys', payload:toysService.getAll()})
}

const getToyById = (req, res)=>{
    const {id} = req.params; 
    res.send({status:'success', message:'getting one toy', payload: toysService.getById(id)})
}

const createToy = (req, res)=>{
    res.send({status:'success', message:'creating a toy', payload: toysService.create(req.body)})
}

const updateToy = (req, res)=>{
    const {id} = req.params; 
    res.send({status:'success', message:'updating a toy', payload: toysService.update(id, req.body) })
}

const deleteToy = (req, res)=>{
    const { id } = req.params;
    res.send({status:'success', message:'deleting a toy', payload: toysService.delete(id) })
}


module.exports = {
    getToys,
    getToyById,
    createToy,
    updateToy,
    deleteToy
}