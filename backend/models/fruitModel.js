import mongoose from 'mongoose'

// const Schema= mongoose.Schema({
//     name:{
//         type:String,
//         required: true
//     },
//     rating:{
//         type:Number,
//         required: true
//     },
//     comment:{
//         type:String,
//         required: true
//     }
// }, {
//     timestamps: true,
// })
const fruitSchema = mongoose.Schema({
   user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
   },
    name:{
        type:String,
        required:true
    },
    genus_name:{
        type:String,
        required:true
    },
    plant_type:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true,
    },
    height:{
        type:String,
        required:true
    },
    width:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    
    propagation:{
        type:String,
        required:true,
    },
    foliage_color:{
        type:String,
        required:true,
    },
    feature:{
        type:String,
        required:true,
    },
    care:{
        type:String,
        required:true,
    },
    other_varieties:{
        type:String,
        required:true,
    },
    companions:{
        type:String,
        required:true,
    },
}, {
    timestamps: true
})

const Fruit= mongoose.model ('Fruit', fruitSchema)

export default Fruit