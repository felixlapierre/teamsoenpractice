import {NextFunction, Request, Response} from "express";
import {UserController} from "../controllers/userController";

export class Routes {

    public userController: UserController = new UserController();

    public routes(app: any): void {

        app.route("/")
        .get((req: Request, res: Response) => {
            res.status(200).send({
                message: "GET request successfulll!!!!"
            });
        });

        app.route("/user")
        .post(this.userController.addNewUser);
    }
}
