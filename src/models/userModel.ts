import * as mongoose from "mongoose";

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
    }
});