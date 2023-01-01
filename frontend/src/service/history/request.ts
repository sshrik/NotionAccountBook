export type WithDatabaseId<T> = T & {
  databaseId: string;
};

export type CreateHistoryRequest = {
  title: string;
  categories: string[];
  amount: number;
  date: string;
};
