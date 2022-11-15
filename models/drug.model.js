import mongoose from "mongoose";

const drugSchema = mongoose.Schema({
    name: String,
    needRecipe: Boolean,
    price: Number
})

const Drug = mongoose.model('Drug', drugSchema)

export default Drug