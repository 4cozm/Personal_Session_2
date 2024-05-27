import express from "express";

import {createAccount , deleteAccount , login} from "../controllers/accountControllers.js";

const accountRouter = express.Router();

accountRouter.post("/",createAccount);
accountRouter.delete("/",deleteAccount);
accountRouter.get("/",login);


export default accountRouter;