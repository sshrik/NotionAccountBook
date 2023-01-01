import { Router } from 'express';
import { pingController } from 'src/controllers/default';
import errorBoundary from 'src/utils/errorBoundary';

const authRouter = Router();

authRouter.get('/', errorBoundary(pingController));

export default authRouter;
