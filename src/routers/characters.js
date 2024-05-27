import express, { Router } from "express";

import {createCharacters} from "../controllers/charactersController.js"

const charactersRouter = express(Router);

charactersRouter.post("/",createCharacters);


export default charactersRouter;