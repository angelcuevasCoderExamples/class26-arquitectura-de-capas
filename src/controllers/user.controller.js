
const getUsers = (req, res)=>{
    res.send({status:'success', message:'getting all users'})
}

const getUserById = (req, res)=>{
    //TODO get user by id
    res.send({status:'success', message:'getting one user'})
}

const createUser = (req, res)=>{
    res.send({status:'success', message:'creating a user'})
}

const updateUser = (req, res)=>{
    res.send({status:'success', message:'updating a user'})
}

const deleteUser = (req, res)=>{
    res.send({status:'success', message:'deleting a user'})
}


module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}