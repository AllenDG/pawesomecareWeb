const asyncHandler = require('express-async-handler')
const service = require('../services/userService')



//Get All User
//@access Public
const getUser = asyncHandler (async (req, res) => {
    const users = await service.getAllUsers()
    res.status(200).json(users)
})

//Login User
//@access Public
const loginUser = asyncHandler (async (req, res) => {
    try {
        const { UserEmail, UserPassword } = req.body;
    
        if (!UserEmail || !UserPassword) {
          res.status(400);
          throw new Error('Please provide both email and password');
        }
    
        const userExist = await service.loginUsers(UserEmail, UserPassword);
    
        if (userExist) {
          res.status(200).json(userExist);
        } else {
          res.status(401);
          throw new Error('Wrong Credentials');
        }
    } catch (error) {
        console.error('Login User Error:', error);
        res.status(500).json({ error: 'Wrong password or email' });
    }
})

//Get User by ID
//@access Public
const getUserId = asyncHandler (async (req, res) => {
    const users = await service.getUserById(req.params.id)
    if (users == undefined)
        res.status(404).json('no record with given id : ' + req.params.id)
    else
        res.send(users)
})

//Delete User
//@access Public
const deleteUser = asyncHandler(async (req, res) => {
    const affectedRows = await service.deleteUserById(req.params.id)
    if (affectedRows == 0)
        res.status(404).json('no record with given id : ' + req.params.id)
    else
        res.send('deleted successfully.')
})

//Add User
//@access Public
const addUser = asyncHandler(async (req, res) => {
    await service.addOrEditUser(req.body)
    res.status(201).send('created successfully.')
})

//Edit User
//@access Public
const editUser = asyncHandler(async (req, res) => {
    const affectedRows = await service.addOrEditUser(req.body, req.params.id)
    if (affectedRows == 0)
        res.status(404).json('no record with given id : ' + req.params.id)
    else
        res.send('updated successfully.')
})

//Edit Password
//@access Public
const editPassword = asyncHandler(async (req, res) => {
    const affectedRows = await service.editUserPassword(req.body, req.params.id)
    if (affectedRows == 0)
        res.status(404).json('no record with given id : ' + req.params.id)
    else
        res.send('updated successfully.')
})


module.exports = {
    getUser,
    getUserId,
    deleteUser,
    addUser,
    editUser,
    loginUser,
    editPassword
}