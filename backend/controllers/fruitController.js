import asyncHandler from 'express-async-handler'
import Fruit from '../models/fruitModel.js'

//@Desc fetch all plants
//@route GET/api/plant
//@access Public
const getFruits = asyncHandler(async(req,res) => {
    const fruits= await Fruit.find({})
    res.json(fruits)
})
//@Desc fetch single plant
//@route GET/api/plant/:id
//@access Public
const getFruitById = asyncHandler(async(req,res) => {
    const fruit=await Fruit.findById(req.params.id)
   if(fruit){
    res.json(fruit)
   } else{
       res.status(404)
       throw new Error('Fruit not found')
   }
})

export {getFruits, getFruitById}