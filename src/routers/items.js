import express, { Router } from 'express';
import authmiddleware from '../middleware/auth.middleware.js';
import {createItems,reNewItem} from "../controllers/itemControllers.js";


const itemRouter = express.Router();

itemRouter.post("/",createItems);
itemRouter.patch("/",reNewItem);


export default itemRouter;