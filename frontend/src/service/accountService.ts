import { CreateHistoryRequest, WithDatabaseId } from 'service/history/request';
import { ListHistoryResponse } from 'service/history/response';
import { Response } from 'service/response';
import APIBuilder from 'utils/APIBuilder';

const API = new APIBuilder({ baseURL: 'http://localhost:3000' });

export const createHistory = async (
  request: WithDatabaseId<CreateHistoryRequest>
): Promise<Response<undefined>> => {
  const { data } = await API.post<Response<undefined>>(
    '/api/v1/account',
    request
  );

  return data;
};

export const listHistory = async (
  request: WithDatabaseId<undefined>
): Promise<Response<ListHistoryResponse>> => {
  const { data } = await API.get<Response<ListHistoryResponse>>(
    '/api/v1/account',
    request
  );

  return data;
};
