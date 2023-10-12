const express  = require('express')
const { getUser, getUserId, deleteUser, addUser, editUser, loginUser } = require('../userController')
const router = express.Router()

router.route('/').get(getUser).post(addUser)

router.route('/:id').get(getUserId).delete(deleteUser).put(editUser)

router.route('/login').post(loginUser)

module.exports = router