import express from "express"
import mongoose from "mongoose"
import router from "./routes/index.js"

const app = express()

app.use(express.json())
app.use(router)

mongoose.connect("mongodb+srv://RashidChab:123@cluster0.4agwvmc.mongodb.net/optika", () => {
    console.log("Database connected")
    app.listen(3000, () => {
        console.log("App started at http://localhost:3000");
    })
})