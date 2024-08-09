import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true }
})

// This checks if a model named food has already been defined and stored in Mongoose's models object. The mongoose.models object is a cache that stores all the models defined so far.
const foodModel = mongoose.models.food || mongoose.model("food", foodSchema)

export default foodModel;