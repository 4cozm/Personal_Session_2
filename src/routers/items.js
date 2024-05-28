import express, { Router } from 'express';
import authmiddleware from '../middleware/auth.middleware.js';
import {createItems,reNewItem,searchItems,searchOneItem} from "../controllers/itemControllers.js";


const itemRouter = express.Router();

itemRouter.post("/",createItems);
itemRouter.patch("/",reNewItem);
itemRouter.get("/",searchItems);
itemRouter.get("/:id",searchOneItem);
export default itemRouter;