import asyncHandler from 'express-async-handler'
import Vegetable from '../models/vegetableModel.js'

//@Desc fetch all plants
//@route GET/api/plant
//@access Public
const getVegetables = asyncHandler(async(req,res) => {
    const vegetables= await Vegetable.find({})
    res.json(vegetables)
})
//@Desc fetch single plant
//@route GET/api/plant/:id
//@access Public
const getVegetableById = asyncHandler(async(req,res) => {
    const vegetable=await Vegetable.findById(req.params.id)
   if(vegetable){
    res.json(vegetable)
   } else{
       res.status(404)
       throw new Error('vegetable not found')
   }
})

export {getVegetables, getVegetableById}