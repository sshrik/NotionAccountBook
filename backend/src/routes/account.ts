import { Router } from 'express';
import {
  historyController,
  historyListController,
} from 'src/controllers/account';
import errorBoundary from 'src/utils/errorBoundary';

const accountRouter = Router();

accountRouter.post('/', errorBoundary(historyController));
accountRouter.get('/', errorBoundary(historyListController));

export default accountRouter;
