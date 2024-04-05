const { Router } = require('express');
const { getUsers, getUserById, createUser, updateUser, deleteUser } = require('../controllers/user.controller');


const router = Router();

router.get('/', getUsers)
router.get('/:id', getUserById)
router.post('/', createUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

module.exports = {
    usersRouter: router
}; 