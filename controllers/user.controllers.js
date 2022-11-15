import User from "../models/user.model.js"
import Drug from "../models/drug.model.js"

export default {
    addUser: (req, res) => {
        User.create({
            username: req.body.username,
            money: req.body.money,
            recipe: req.body.recipe,
            basket: req.body.basket
        }).then((a)=>{res.json(a)})
    },
    deleteUser: (req, res) => {
        User.findByIdAndDelete(req.params.id).then((a)=>{res.json(a)})
    },
    getUser: (req, res) => {
        User.findById(req.params.id).populate('basket').then((a)=>{res.json(a)})
    },
    putToBasket: async (req, res) => {
        const user = await User.findById(req.params.id)
        const drug = await Drug.findById(req.body.drug)

        if (drug.needRecipe) {
            if(!user.recipe) {
            return res.json("You must have a recipe for this drug")
            }
        }
        await User.findByIdAndUpdate(req.params.id, {$addToSet: {basket: req.body.drug}})
        res.json("Drug added to basket")
    },
    payForBasket: async (req, res) => {
        const user = await User.findById(req.params.id).populate('basket')
        const finalSum = user.basket.reduce((sum, drug) => {
            return sum + drug.price
        }, 0)
        const cash = user.money - finalSum
        await User.findByIdAndUpdate(req.params.id, {$set: {basket: [], money: cash}})
        res.json("Baster oplacheno")
    }
 
}