import express, { Router } from 'express';
import authmiddleware from '../middleware/auth.middleware.js';
import { createCharacters } from '../controllers/charactersController.js';

const charactersRouter = express(Router);

charactersRouter.post('/', authmiddleware, createCharacters);

export default charactersRouter;
