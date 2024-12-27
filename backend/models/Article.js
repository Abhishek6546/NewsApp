import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: String ,required:true},
    author: { type: String, default: "Unknown" },
    publishedAt: { type: Date, default: Date.now },
    imageUrl: { type: String ,required:true},
    source: { type: String, required: true },
    link:{type:String,required:true}
}, { timestamps: true });

export const Article = mongoose.model("Article", articleSchema);
