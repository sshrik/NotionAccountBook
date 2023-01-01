import { Client } from '@notionhq/client';
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { History } from 'src/types/account';

const createClient = async () => {
  const database = new Client({ auth: process.env.NOTION_PRIVATE_KEY });

  return database;
};

export const createHistory = async (databaseId: string, history: History) => {
  const notionDatabase = await createClient();

  const response = await notionDatabase.pages.create({
    parent: {
      database_id: databaseId,
    },
    properties: {
      내역: {
        title: [
          {
            text: {
              content: history.title,
            },
          },
        ],
      },
      카테고리: {
        multi_select: history.categories.map((category: string) => ({
          name: category,
        })),
      },
      금액: {
        number: history.amount,
      },
      날짜: {
        date: {
          start: history.date,
        },
      },
    },
  });

  return response;
};

export const getHistoryList = async (databaseId: string) => {
  const notionDatabase = await createClient();

  const response = await notionDatabase.databases.query({
    database_id: databaseId,
  });

  const results = response.results as PageObjectResponse[];

  const historyList: History[] = results.map(({ properties }) => {
    const {
      내역: title,
      카테고리: categories,
      금액: amount,
      날짜: date,
    } = properties;

    if (
      title.type === 'title' &&
      categories.type === 'multi_select' &&
      amount.type === 'number' &&
      date.type === 'date'
    ) {
      return {
        title: title.title[0].plain_text,
        categories: categories.multi_select.map(({ name }) => name),
        amount: amount.number || 0,
        date: date.date?.start || '',
      };
    }

    return {
      title: '',
      categories: [],
      amount: 0,
      date: '',
    };
  });

  return historyList;
};
