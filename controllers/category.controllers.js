import Category from "../models/category.model.js"

export default {
    addCategory: (req, res) => {
        Category.create({
            name: req.body.name
        }).then((a) => {
            res.json(a)
        })
    },
    updateCategory: (req, res) => {
        Category.findByIdAndUpdate(req.params.id, {
            name: req.body.name
        }, { new: true }).then((a) => {
            res.json(a)
        })
    },
    deleteCategory: async (req, res) => {
        await Category.findByIdAndDelete(req.params.id)
        res.json('Category deleted succesfully')
    },
    getCategories: (req, res) => {
        Category.find().then((a) => { res.json(a) })
    }
}