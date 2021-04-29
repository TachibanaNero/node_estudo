import { Router } from "express";
import { SettingController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";
import { MessagesController } from "./controllers/MessagesController";

const routes = Router();

const settingController  = new SettingController;
const usersController = new UsersController;
const messagesController = new MessagesController;

routes.post("/settings", settingController.create);
routes.get("/settings/:username", settingController.findByUsername);
routes.put("/settings/:username", settingController.update);

routes.post("/users", usersController.create);

routes.post("/messages", messagesController.create);
 

export { routes }