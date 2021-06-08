import express from 'express';
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import flowerRoutes from './routes/flowerRoutes.js'
import fruitRoutes from './routes/fruitRoutes.js'
import vegetableRoutes from './routes/vegetableRoutes.js'
import userRoutes from './routes/userRoutes.js'
import flowers from './data/flowers.js'
import fruits from './data/fruits.js'
import vegetables from './data/vegetables.js'


import {notFound, errorHandler} from './middleware/errorMiddleware.js'
dotenv.config()

connectDB()

const app = express();

app.use(express.json())

app.get("/", function(req,res){
    res.send("API is running...")
})

app.use('/api/flower', flowerRoutes)
app.use('/api/fruit', fruitRoutes)
app.use('/api/vegetable', vegetableRoutes)
app.use('/api/users', userRoutes)


app.use(notFound)
app.use(errorHandler)
const PORT= process.env.PORT || 5000
 
app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`));