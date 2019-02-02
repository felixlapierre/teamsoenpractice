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
exports.UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: "Enter an email"
    },
    firstName: {
        type: String,
        required: "Enter a first name"
    },
    lastName: {
        type: String,
        required: "Enter a last name"
    }
});
//# sourceMappingURL=userModel.js.map