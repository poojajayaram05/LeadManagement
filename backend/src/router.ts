import { Router } from 'express'
import { body } from "express-validator"
import { handleInputErrors } from './modules/middleware'

const router = Router()


//product staff

//Updatepoints
router.get('/updatepoint', () => { })
router.get('/updatepoint/:id', () => { })
router.put('/updatepoint/:id',
    body('name').optional().isString(),
    body('description').optional().isString(),
    () => { }
)
router.post('/updatepoint',
     body('name').isString(),
    body('description').isString(),
    body('updateId').exists().isString(),
    () => { })
router.delete('/updatepoint/:id', () => { })

router.use((err, req, res, next) => {
    console.log(err)
    res.json({message: 'in router handler'})
})

export default router