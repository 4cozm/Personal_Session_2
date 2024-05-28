import express, { Router } from 'express';
import authmiddleware from '../middleware/auth.middleware.js';
import { createCharacters,deleteCharacter } from '../controllers/charactersController.js';

const charactersRouter = express(Router);

charactersRouter.post('/', authmiddleware, createCharacters);
charactersRouter.delete('/',authmiddleware,deleteCharacter);

export default charactersRouter;

