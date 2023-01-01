import { useMutation } from 'react-query';
import { createHistory } from 'service/accountService';
import { CreateHistoryRequest, WithDatabaseId } from 'service/history/request';

export const useCreateHistory = () =>
  useMutation((request: WithDatabaseId<CreateHistoryRequest>) =>
    createHistory(request)
  );
