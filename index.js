const express = require("express");
const {connectToMongoDB} = require("./connect");
const URL = require('./models/url');
const path = require('path')
const cookieParser = require('cookie-parser');
const { restrictToLoggedinUserOnly, checkAuth } = require('./middleware/auth');

const staticRoute = require('./routes/staticRouter');
const urlRoute = require("./routes/url");
const userRoute = require('./routes/user');

const app = express();
const PORT = 8000;

connectToMongoDB('mongodb+srv://url_shortner:JaxyLfsCzLnC12a2@cluster0.f2umqne.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

app.set("view engine", "ejs");
app.set('views', path.resolve("./views"));

//middleware to parse incoming request
app.use(express.json());
//middleware to parse form data
app.use(express.urlencoded({ extended: false}))
app.use(cookieParser());

//routes
app.use("/url",restrictToLoggedinUserOnly, urlRoute);
app.use("/", checkAuth, staticRoute);
app.use("/user", userRoute);

app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    try {
        const entry = await URL.findOneAndUpdate(
            { shortId },
            { $push: { visitHistory: { timestamp: Date.now() } } },
            { new: true }
        );

        if (entry) {
            res.redirect(entry.redirectURL);
        } else {
            res.status(404).send("URL not found");
        }
    } catch (error) {
        console.error("Error redirecting:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(PORT, () => console.log(`server started at PORT ${PORT}`));