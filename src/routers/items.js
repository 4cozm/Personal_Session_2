import express, { Router } from 'express';
import authmiddleware from '../middleware/auth.middleware.js';
import {createItems} from "../controllers/itemControllers.js";


const itemRouter = express.Router();

itemRouter.post("/",createItems);



export default itemRouter;