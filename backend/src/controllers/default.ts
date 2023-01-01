import { Request, Response } from 'express';
import { BaseResponse } from 'src/models/response';

export async function pingController(
  _req: Request,
  res: Response<BaseResponse<undefined>>
) {
  res.send({ message: 'ok' });
}
