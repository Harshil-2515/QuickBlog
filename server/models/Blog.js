import mongoose from "mongoose";

// create schema
const blogSchema = new mongoose.Schema({
    title: {type: String, required: true},
    subTitle: {type: String},
    description: {type: String, required: true},
    category: {type: String, required: true},
    image: {type: String, required: true},
    isPublished: {type: Boolean, required: true},
}, {timestamps: true});

// create model
const Blog = mongoose.model('blog', blogSchema)

export default Blog