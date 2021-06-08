import express from 'express'
const router= express.Router()
import {getFruitById, getFruits} from '../controllers/fruitController.js'

router.route("/"). get(getFruits)
router.route("/:id").get(getFruitById)

export default router