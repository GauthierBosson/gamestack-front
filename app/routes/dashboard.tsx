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
      {/* TABLEAU DE JEUX */}
      {/*<Tabs*/}
      {/*  defaultValue="all"*/}
      {/*  className={'w-full grid grid-row-2 grid-cols-12 gap-12 py-20'}>*/}
      {/*  <TabsList className={'col-span-full'}>*/}
      {/*    <TabsTrigger value="all">All</TabsTrigger>*/}
      {/*    <TabsTrigger value="backlog">Backlog</TabsTrigger>*/}
      {/*    <TabsTrigger value="to_do">À faire</TabsTrigger>*/}
      {/*    <TabsTrigger value="doing">En cours</TabsTrigger>*/}
      {/*    <TabsTrigger value="on_hold">En pause</TabsTrigger>*/}
      {/*    <TabsTrigger value="done">Terminé</TabsTrigger>*/}
      {/*    <TabsTrigger value="dropped">Dropped</TabsTrigger>*/}
      {/*  </TabsList>*/}
      {/*  <TabsContent value="all" className={'col-span-full'}>*/}
      {/*    <Table>*/}
      {/*      <TableCaption>A list of all your games.</TableCaption>*/}
      {/*      <TableHeader>*/}
      {/*        <TableRow>*/}
      {/*          <TableHead>Picture</TableHead>*/}
      {/*          <TableHead>Name</TableHead>*/}
      {/*          <TableHead>Status</TableHead>*/}
      {/*          <TableHead>Type</TableHead>*/}
      {/*          <TableHead>Platform</TableHead>*/}
      {/*          <TableHead>Score</TableHead>*/}
      {/*        </TableRow>*/}
      {/*      </TableHeader>*/}
      {/*      <TableBody>*/}
      {/*        <TableRow>*/}
      {/*          <TableCell>*/}
      {/*            <img*/}
      {/*              className={'h-[70px]'}*/}
      {/*              src="/judgment_cover.jpg"*/}
      {/*              alt="Judgment covert art"*/}
      {/*            />*/}
      {/*          </TableCell>*/}
      {/*          <TableCell>*/}
      {/*            Judgment{' '}*/}
      {/*            <Link to={'/games/1'} className={'ml-4'}>*/}
      {/*              <ArrowUpRightSquare className={'inline-block'} size={14} />*/}
      {/*            </Link>*/}
      {/*          </TableCell>*/}
      {/*          <TableCell>Doing</TableCell>*/}
      {/*          <TableCell>Action</TableCell>*/}
      {/*          <TableCell>PC</TableCell>*/}
      {/*          <TableCell>8</TableCell>*/}
      {/*        </TableRow>*/}
      {/*      </TableBody>*/}
      {/*    </Table>*/}
      {/*  </TabsContent>*/}
      {/*  <TabsContent value="backlog" className={'col-span-full'}>*/}
      {/*    Backlog*/}
      {/*  </TabsContent>*/}
      {/*  <TabsContent value="to_do" className={'col-span-full'}>*/}
      {/*    To do*/}
      {/*  </TabsContent>*/}
      {/*  <TabsContent value="doing" className={'col-span-full'}>*/}
      {/*    Doing*/}
      {/*  </TabsContent>*/}
      {/*  <TabsContent value="on_hold" className={'col-span-full'}>*/}
      {/*    On hold*/}
      {/*  </TabsContent>*/}
      {/*  <TabsContent value="done" className={'col-span-full'}>*/}
      {/*    Done*/}
      {/*  </TabsContent>*/}
      {/*  <TabsContent value="dropped" className={'col-span-full'}>*/}
      {/*    Dropped*/}
      {/*  </TabsContent>*/}
      {/*</Tabs>*/}

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
