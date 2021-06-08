import asyncHandler from 'express-async-handler'
import Flower from '../models/flowerModel.js'

//@Desc fetch all plants
//@route GET/api/plant
//@access Public
const getFlowers = asyncHandler(async(req,res) => {
    const flowers= await Flower.find({})
    res.json(flowers)
})
//@Desc fetch single plant
//@route GET/api/plant/:id
//@access Public
const getFlowerById = asyncHandler(async(req,res) => {
    const flower=await Flower.findById(req.params.id)
   if(flower){
    res.json(flower)
   } else{
       res.status(404)
       throw new Error('Flower not found')
   }
})

export {getFlowers, getFlowerById}