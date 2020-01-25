const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

// DB Config
const db = config.get("mongoURI");

// Connect to MongoDB
mongoose.set("useCreateIndex", true);
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch(err => console.log(err));

// Use Routes
app.use("/api/posts", require("./routes/api/posts.js"));
app.use("/api/users", require("./routes/api/users.js"));
app.use("/api/auth", require("./routes/api/auth.js"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
