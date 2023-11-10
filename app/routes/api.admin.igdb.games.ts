import type {ActionFunctionArgs} from '@remix-run/node';
import {json} from '@remix-run/node';
import {db} from '~/database/database';

export async function action({request}: ActionFunctionArgs) {
  const body = await request.formData();

  const admin_key = body.get('admin_api_key');

  if (!admin_key) {
    return new Response('Unauthorized', {status: 401});
  }

  if (admin_key !== process.env.ADMIN_API_KEY) {
    return new Response('Unauthorized', {status: 401});
  }

  // do a recursive loop to get all the games from igdb with the getGames function
  // and then insert them into the database

  const games = await getGames(500, 0);
  let total = games.length;
  let offset = 0;
  let limit = 500;
  let count = 0;

  while (count < total) {
    try {
      const games = await getGames(limit, offset);
      games.forEach(async (game: any) => {
        const insertion = await db
          .insertInto('games')
          .values({name: game.name})
          .executeTakeFirst();

        if (insertion === undefined) {
          throw new Error('Insertion failed');
        }
      });
      total += games.length;
      offset += limit;
      count += limit;
    } catch (e) {
      return json({message: 'Error'});
    }
  }

  return json({message: 'Success'});
}

async function getGames(limit: number, offset: number) {
  const response = await fetch(
    `https://api.igdb.com/v4/games?fields=name,cover.url,genres.name,platforms.name,release_dates.human&limit=${limit}&offset=${offset}`,
    {
      method: 'POST',
      headers: {
        'Client-ID': process.env.IGDB_CLIENT_ID as string,
        Authorization: `Bearer ${process.env.IGDB_ACCESS_TOKEN}`,
      },
    },
  );

  return response.json();
}
