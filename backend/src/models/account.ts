import { History } from 'src/types/account';

export type PostHistoryRequest = History;

export type WithDatabaseId<T> = T & { databaseId: string };
