import express from 'express';
import accountRouter from './routers/account.js';
import charactersRouter from './routers/characters.js';
import { requestLogger, errorHandler } from './middleware/log.middleware.js';
import cookieParser from 'cookie-parser';

const app = express();
const PORT = 3306;
app.use(express.json());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/account', accountRouter);
app.use('/api/character', charactersRouter);
app.use(requestLogger);

app.use(errorHandler);
app.listen(PORT, () => {
  console.log('서버가 3306 포트에서 열렸습니다');
});
