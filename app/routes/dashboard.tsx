import type {LoaderFunctionArgs} from '@remix-run/node';
import {authenticator} from '~/services/auth.server';
import type {Game} from '~/components/games-table/columns';
import {columns} from '~/components/games-table/columns';
import {useLoaderData} from '@remix-run/react';
import {DataTable} from '~/components/games-table/data-table';

export default function Dashboard() {
  const data = useLoaderData<typeof loader>();
  return (
    <section className={'container mx-auto mt-[100px]'}>
      {/* TANSTACK TABLE */}
      <DataTable columns={columns} data={data} />
    </section>
  );
}

export async function loader({request}: LoaderFunctionArgs) {
  await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  });

  const gameData: Game[] = [
    {
      picture: '/judgment_cover.jpg',
      name: 'Judgment',
      status: 'doing',
      type: 'action',
      platform: 'PC',
      score: 8,
    },
    {
      picture: '/judgment_cover.jpg',
      name: 'Lost Judgment',
      status: 'to do',
      type: 'action',
      platform: 'PC',
      score: '/',
    },
    {
      picture: '/judgment_cover.jpg',
      name: 'One Piece truc machin',
      status: 'dropped',
      type: 'action',
      platform: 'PS5',
      score: 2,
    },
    {
      picture: '/judgment_cover.jpg',
      name: 'Street Fighter 6',
      status: 'doing',
      type: 'VS Fighting',
      platform: 'PC',
      score: 10,
    },
    {
      picture: '/judgment_cover.jpg',
      name: 'Diablo 4',
      status: 'done',
      type: 'RPG',
      platform: 'PC',
      score: 7,
    },
    {
      picture: '/judgment_cover.jpg',
      name: 'Judgment',
      status: 'doing',
      type: 'action',
      platform: 'PC',
      score: 8,
    },
    {
      picture: '/judgment_cover.jpg',
      name: 'Lost Judgment',
      status: 'to do',
      type: 'action',
      platform: 'PC',
      score: '/',
    },
    {
      picture: '/judgment_cover.jpg',
      name: 'One Piece truc machin',
      status: 'dropped',
      type: 'action',
      platform: 'PS5',
      score: 2,
    },
    {
      picture: '/judgment_cover.jpg',
      name: 'Street Fighter 6',
      status: 'doing',
      type: 'VS Fighting',
      platform: 'PC',
      score: 10,
    },
    {
      picture: '/judgment_cover.jpg',
      name: 'Diablo 4',
      status: 'done',
      type: 'RPG',
      platform: 'PC',
      score: 7,
    },
    {
      picture: '/judgment_cover.jpg',
      name: 'Judgment',
      status: 'doing',
      type: 'action',
      platform: 'PC',
      score: 8,
    },
    {
      picture: '/judgment_cover.jpg',
      name: 'Lost Judgment',
      status: 'to do',
      type: 'action',
      platform: 'PC',
      score: '/',
    },
    {
      picture: '/judgment_cover.jpg',
      name: 'One Piece truc machin',
      status: 'dropped',
      type: 'action',
      platform: 'PS5',
      score: 2,
    },
    {
      picture: '/judgment_cover.jpg',
      name: 'Street Fighter 6',
      status: 'doing',
      type: 'VS Fighting',
      platform: 'PC',
      score: 10,
    },
    {
      picture: '/judgment_cover.jpg',
      name: 'Diablo 4',
      status: 'done',
      type: 'RPG',
      platform: 'PC',
      score: 7,
    },
  ];

  return gameData;
}
