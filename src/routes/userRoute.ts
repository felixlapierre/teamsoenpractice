import {Application, NextFunction, Request, Response} from "express";
import {UserController} from "../controllers/userController";

export class Routes {

    public userController: UserController = new UserController();

    public routes(app: Application): void {

        app.route("/")
        .get((req: Request, res: Response) => {
            res.status(200).send({
                message: "Nodemon is watching you *.*"
            });
        });

        // User
        app.route("/user")
        .get((req: Request, res: Response) => {
            // Get all users
            res.status(200).send({
                message: "GET all users successful!"
            });
        })
        // POST endpoint
        .post((req: Request, res: Response) => {
            // Create new user
            res.status(200).send({
                message: "POST request users successful!"
            });
        });

        // User detail
        app.route("/user/:userId")
        // get specific user
        .get((req: Request, res: Response) => {
            // Get a single user detail
            res.status(200).send({
                message: "GET single user successful!"
            });
        })
        .put((req: Request, res: Response) => {
            // Update a user
            res.status(200).send({
                message: "PUT update user successful!"
            });
        })
        .delete((req: Request, res: Response) => {
            // Delete a user
            res.status(200).send({
                message: "DELETE user successful!"
            });
        });

    }
}
