import express from "express";
import { Article } from "../models/Article.js";

const router = express.Router();

// Create Article
router.post("/", async (req, res) => {
    try {
        const newArticle = new Article(req.body);
        const savedArticle = await newArticle.save();
        res.status(201).json(savedArticle);
    } catch (error) {
        res.status(500).json({ error: "Failed to create article" });
    }
});

// Get All Articles
router.get("/", async (req, res) => {
    try {
        const articles = await Article.find().sort({ createdAt: -1 });
        res.status(200).json(articles);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch articles" });
    }
});

// Update Article
router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
    
        const article = await Article.findByIdAndUpdate(id, req.body, { new: true });

        if (!article) {
            return res.status(404).json({ message: "Article not found" });
        }

        res.status(200).json(article);
    } catch (error) {
        res.status(500).json({ error: "Failed to update article" });
    }
});


// Get Articles by Category
router.get("/category/:category", async (req, res) => {
    try {
        const articles = await Article.find({ category: req.params.category });
        res.status(200).json(articles);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch articles" });
    }
});

// Delete Article
router.delete("/:id", async (req, res) => {
    try {
        await Article.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Article deleted" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete article" });
    }
});

export default router;
