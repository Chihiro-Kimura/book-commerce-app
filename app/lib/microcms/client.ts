import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN || '',
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY || '',
});

export const getAllBooks = async () => {
  try {
    console.log('Endpoint:', 'e-book');

    const response = await client.getList({
      endpoint: 'e-book',
      queries: { limit: 100 },
    });

    console.log('Response:', response);

    if (!response) {
      throw new Error('データが取得できませんでした');
    }

    return response;
  } catch (error) {
    console.error('microCMSからのデータ取得に失敗:', error);
    throw error;
  }
};
