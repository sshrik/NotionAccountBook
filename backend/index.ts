import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express, { urlencoded } from 'express';
import session from 'express-session';
import MemoryStore from 'memorystore';
import ErrorHandler from 'src/middlewares/ErrorHandler';
import AccountRouter from 'src/routes/account';

const app = express();

const SessionStore = MemoryStore(session);

dotenv.config();

app.use(
  cors({
    origin: ['http://localhost:8000', '*'],
  })
);
app.use(urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: process.env.SECRET ?? '',
    resave: false,
    saveUninitialized: true,
    store: new SessionStore({}),
  })
);

const port = process.env.PORT;

app.use('/api/v1/account', AccountRouter);
app.use(ErrorHandler);

app.listen(port, async () => {
  // eslint-disable-next-line no-console
  console.log(`app listening on port ${port}`);
});
