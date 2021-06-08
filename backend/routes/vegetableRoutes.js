import express from 'express'
const router= express.Router()
import {getVegetableById, getVegetables} from '../controllers/vegetableController.js'

router.route("/"). get(getVegetables)
router.route("/:id").get(getVegetableById)

export default router