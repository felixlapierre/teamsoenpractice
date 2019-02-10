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
        .get(this.userController.getUsers)
        // POST endpoint
        .post(this.userController.addNewUser);

        // User detail
        app.route("/user/:userId")
        // get specific user
        .get(this.userController.getUserWithId)
        .put(this.userController.updateUser)
        .delete(this.userController.deleteUser);

    }
}
