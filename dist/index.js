"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoute_1 = require("./routes/userRoute");
const app = express_1.default();
const routes = new userRoute_1.Routes();
routes.routes(app);
// app.get("/", (req, res) => {
//     res.send("Hello World!");
// });
app.listen(8000, () => {
    // tslint:disable-next-line:no-console
    console.log("Started server on port 8000");
});
//# sourceMappingURL=index.js.map