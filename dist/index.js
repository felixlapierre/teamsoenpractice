"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.listen(8000, () => {
    // tslint:disable-next-line:no-console
    console.log("Started server on port 8000");
});
//# sourceMappingURL=index.js.map