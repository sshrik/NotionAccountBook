import { Request, Response } from 'express';
import ErrorMapper from 'src/errors/ErrorMapper';
import { PostHistoryRequest, WithDatabaseId } from 'src/models/account';
import { BaseResponse } from 'src/models/response';
import { createHistory, getHistoryList } from 'src/services/notion';
import { History } from 'src/types/account';

export async function historyController(
  req: Request<undefined, undefined, WithDatabaseId<PostHistoryRequest>>,
  res: Response<BaseResponse<undefined>>
) {
  try {
    const { databaseId, ...history } = req.body;

    await createHistory(databaseId, {
      ...history,
      amount: Number(history.amount),
    });

    res.send({ message: 'ok' });
  } catch (e) {
    throw new ErrorMapper('ERR_SERVER', '서버 오류 입니다.', 500);
  }
}

export async function historyListController(
  req: Request<WithDatabaseId<undefined>>,
  res: Response<BaseResponse<History[]>>
) {
  try {
    const { databaseId } = req.query;

    const historyList = await getHistoryList(databaseId as string);

    res.send({ message: 'ok', data: historyList });
  } catch (e) {
    throw new ErrorMapper('ERR_SERVER', '서버 오류 입니다.', 500);
  }
}
