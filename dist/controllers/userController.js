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
        console.log("Got posty boi");
        newUser.save((err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    }
    getUsers(req, res) {
        User.find({}, (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(User);
        });
    }
    getUserWithID(req, res) {
        User.findById(req.params.userID, (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    }
    updateUser(req, res) {
        User.findOneAndUpdate({ _id: req.params.userID }, req.body, { new: true }, (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(User);
        });
    }
    deleteUser(req, res) {
        User.remove({ _id: req.params.userID }, (err) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: "Successfully deleted user!" });
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=userController.js.map