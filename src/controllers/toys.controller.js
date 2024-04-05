
const getToys = (req, res)=>{
    res.send({status:'success', message:'getting all toys'})
}

const getToyById = (req, res)=>{
    //TODO get toy by id
    res.send({status:'success', message:'getting one toy'})
}

const createToy = (req, res)=>{
    res.send({status:'success', message:'creating a toy'})
}

const updateToy = (req, res)=>{
    res.send({status:'success', message:'updating a toy'})
}

const deleteToy = (req, res)=>{
    res.send({status:'success', message:'deleting a toy'})
}


module.exports = {
    getToys,
    getToyById,
    createToy,
    updateToy,
    deleteToy
}