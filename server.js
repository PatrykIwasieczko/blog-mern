const express = require("express");
const mongoose = require("mongoose");
const config = require("config");

const app = express();

app.use(express.json());

// DB Config
const db = config.get("mongoURI");

// Connect to MongoDB
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch(err => console.log(err));

// Use Routes
app.use("/api/posts", require("./routes/api/posts.js"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
