import express from 'express'
import { createUser, getAllUsers, deleteUser, updateUser } from '../controllers/userController.js'
import { validate } from '../middleware/validate.js'
import { createUserSchema } from '../schemas/userSchemas.js'


const router = express.Router()

router.get('/', getAllUsers)

router.post('/', validate(createUserSchema), createUser)

router.put('/:id', updateUser)

router.delete('/:id', deleteUser)

export default router