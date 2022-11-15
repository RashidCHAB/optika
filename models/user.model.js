import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: String,
    money: Number,
    recipe: Boolean,
    basket: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Drug'
    }]
})

const User = mongoose.model('User',)

export default User