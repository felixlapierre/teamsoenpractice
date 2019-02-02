import {Request, Response} from "express";
import * as mongoose from "mongoose";
import {UserSchema} from "../models/userModel";

const User = mongoose.model("User", UserSchema);

export class UserController {

    public addNewUser(req: Request, res: Response) {
        const newUser = new User(req.body);

        newUser.save((err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }
}
