import express from "express";
import mongoose from "mongoose";
import {Routes} from "./routes/userRoute";

const app = express();
const routes = new Routes();
routes.routes(app);

// app.get("/", (req, res) => {
//     res.send("Hello World!");
// });

app.listen(8000, () => {
    // tslint:disable-next-line:no-console
    console.log("Started server on port 8000");
});
