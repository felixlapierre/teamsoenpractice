import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

export const UserSchema = new mongoose.Schema({
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
    },
    company: {
        type: String
    },
    phone: {
        type: Number
    },
    created_date: {
        type: Date,
        default: Date.now
    }

});
