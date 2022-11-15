import mongoose from "mongoose";

const drugSchema = mongoose.Schema({
    name: String,
    needRecipe: Boolean,
    price: Number,
    category: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Category'
    }
})

const Drug = mongoose.model('Drug', drugSchema)

export default Drug