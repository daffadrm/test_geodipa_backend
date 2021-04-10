const express = require('express');
const router = express.Router()
const {readUser, insertUser, updateUser, deleteUser, readUser2} = require('../controller/user.controller')


router.get ('/', readUser)
router.get ('/:id_user', readUser2)
router.post ('/', insertUser)
router.put ('/:id_user', updateUser)
router.delete ('/:id_user', deleteUser)

module.exports = router