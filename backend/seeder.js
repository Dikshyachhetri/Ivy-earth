import mongoose from 'mongoose'
import dotenv from 'dotenv'
import flowers from './data/flowers.js'
import fruits from './data/fruits.js'
import vegetables from './data/vegetables.js'
import users from './data/users.js'
import User from './models/userModel.js'
import Flower from './models/flowerModel.js'
import Fruit from './models/fruitModel.js'

import Order from './models/orderModel.js'
import connectDB from './config/db.js'
import Vegetable from './models/vegetableModel.js'

dotenv.config()
connectDB()

const importData = async () => {
    try{
        await Order.deleteMany()
        await  Flower.deleteMany()
        await  Fruit.deleteMany()
        await  Vegetable.deleteMany()

        await User.deleteMany()

      const createdUsers =  await User.insertMany(users)
      const adminUser = createdUsers[0]._id
      const sampleFlowers= flowers.map(flower => {
          return { ...flower, user:adminUser}
      })

      const sampleFruits= fruits.map(fruit => {
        return { ...fruit, user:adminUser}
    })

    const sampleVegetables= vegetables.map(vegetable => {
        return { ...vegetable, user:adminUser}
    })

      await Flower.insertMany(sampleFlowers)
      await Fruit.insertMany(sampleFruits)
      await Vegetable.insertMany(sampleVegetables)


      console.log("Data imported")
      process.exit()
    } catch(error){
    console.log(`${error}`);
    process.exit(1)
    }
}

const destroyData = async () => {
    try{
        await Order.deleteMany()
        await  Flower.deleteMany()
        await  Fruit.deleteMany()
        await  Vegetabe.deleteMany()

        await User.deleteMany()

    
      console.log("Data deleted")
      process.exit()
    } catch(error){
    console.log(`${error}`);
    process.exit(1)
    }
}

if(process.argv[2] === '-d'){
    destroyData()
} else{
    importData()
}
