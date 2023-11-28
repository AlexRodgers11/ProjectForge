import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";

const port = process.env.PORT || 8000;
const router = express.Router();

dotenv.config();

const database = async () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    try {
        mongoose.connect(process.env.MONGODB_CONNECTION_STRING, connectionParams);
        console.log("connected to mongoDB");
    } catch (err) {
        console.error(err.message);
    }
}

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", process.env.CLIENT_ORIGIN || "http://localhost:3000");
    res.header("Access-Control-Allow-Methods", "GET, PATCH, PUT, POST, DELETE");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
        );
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

app.use(router);

app.listen(port, () => {
    console.log(`Node.js listening on port ${port}`);
});

if(process.env.NODE_ENV === "development") {
    mongoose.connect("mongodb://localhost/project", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
} else {
    database();
}