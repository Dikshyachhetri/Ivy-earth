import express from 'express'
const router= express.Router()
import {getFlowerById, getFlowers} from '../controllers/flowerController.js'

router.route("/"). get(getFlowers)
router.route("/:id").get(getFlowerById)

export default router