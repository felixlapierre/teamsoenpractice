import {Request, Response} from "express";
import * as mongoose from "mongoose";
import {UserSchema} from "../models/userModel";

const User = mongoose.model("User", UserSchema);

export class UserController {

    public addNewUser(req: Request, res: Response) {
        const newUser = new User(req.body);
        console.log("Got posty boi");
        newUser.save((err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    }

    public getUsers(req: Request, res: Response) {
        User.find({}, (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(User);
        });
    }
    public getUserWithID(req: Request, res: Response) {
        User.findById(req.params.userID, (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    }
    public updateUser(req: Request, res: Response) {
        User.findOneAndUpdate({ _id: req.params.userID },
        req.body, { new: true }, (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(User);
        });
    }
    public deleteUser(req: Request, res: Response) {
        User.remove({ _id: req.params.userID }, (err) => {
            if (err) {
                res.send(err);
            }
            res.json({message: "Successfully deleted user!"});
        });
    }
}
