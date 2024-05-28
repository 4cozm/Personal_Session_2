import express, { Router } from 'express';
import authmiddleware from '../middleware/auth.middleware.js';
import {createItems,reNewItem,searchItem} from "../controllers/itemControllers.js";


const itemRouter = express.Router();

itemRouter.post("/",createItems);
itemRouter.patch("/",reNewItem);
itemRouter.get("/",searchItem);

export default itemRouter;