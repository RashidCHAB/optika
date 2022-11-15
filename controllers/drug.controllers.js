import Drug from "../models/drug.model.js"

export default {
    addDrug: (req, res) => {
        Drug.create({
            name: req.body.name,
            needRecipe: req.body.needRecipe,
            price: req.body.price,
            category: req.body.category
        }).then((a) => {
            res.json(a)
        })
    },
    updateDrug: (req, res) => {
        Drug.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            needRecipe: req.body.needRecipe,
            price: req.body.price,
            category: req.body.category
        }, { new: true }).then((a) => {
            res.json(a)
        })
    },
    deleteDrug: async (req, res) => {
        await Drug.findByIdAndDelete(req.params.id)
        res.json('Drug deleted succesfully')
    },
    getDrugs: (req, res) => {
        Drug.find().populate('category').then((a) => { res.json(a) })
    },
    getDrugsByCategory: (req, res) => {
        Drug.find(req.params.id)
    }
}