import express from 'express';
import cors from 'cors';
import 'dotenv/config'; // dotenv is already configured
import connectDb from "./database/db.js";
import userRoute from "./routes/user.Route.js";
import articleRoutes from "./routes/article.Route.js";

// App config
const app = express();
const port = process.env.PORT || 4000;
connectDb();

// Middleware
app.use(express.json());
app.use(cors());

// API endpoints
app.use("/api/user", userRoute);
app.use("/api/articles", articleRoutes);

app.get("/", (req, res) => {
    res.send("API working");
});

app.listen(port, () => {
    console.log("Server started on PORT: " + port);
});
