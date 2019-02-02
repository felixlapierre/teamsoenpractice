"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = __importStar(require("mongoose"));
const userModel_1 = require("../models/userModel");
const User = mongoose.model("User", userModel_1.UserSchema);
class UserController {
    addNewUser(req, res) {
        const newUser = new User(req.body);
        newUser.save((err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=userController.js.map