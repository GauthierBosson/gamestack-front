import {Tabs, TabsContent, TabsList, TabsTrigger} from '~/components/ui/tabs';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui/table';
import {Link} from '@remix-run/react';
import {ArrowUpRightSquare} from 'lucide-react';
import type {LoaderFunctionArgs} from '@remix-run/node';
import {authenticator} from '~/services/auth.server';

export default function Dashboard() {
  return (
    <section className={'container mx-auto'}>
      {/* TABLEAU DE JEUX */}
      <Tabs
        defaultValue="all"
        className={'w-full grid grid-row-2 grid-cols-12 gap-12 py-20'}>
        <TabsList className={'col-span-full'}>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="backlog">Backlog</TabsTrigger>
          <TabsTrigger value="to_do">À faire</TabsTrigger>
          <TabsTrigger value="doing">En cours</TabsTrigger>
          <TabsTrigger value="on_hold">En pause</TabsTrigger>
          <TabsTrigger value="done">Terminé</TabsTrigger>
          <TabsTrigger value="dropped">Dropped</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className={'col-span-full'}>
          <Table>
            <TableCaption>A list of all your games.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Picture</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Platform</TableHead>
                <TableHead>Score</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <img
                    className={'h-[70px]'}
                    src="/judgment_cover.jpg"
                    alt="Judgment covert art"
                  />
                </TableCell>
                <TableCell>
                  Judgment{' '}
                  <Link to={'/games/1'} className={'ml-4'}>
                    <ArrowUpRightSquare className={'inline-block'} size={14} />
                  </Link>
                </TableCell>
                <TableCell>Doing</TableCell>
                <TableCell>Action</TableCell>
                <TableCell>PC</TableCell>
                <TableCell>8</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TabsContent>
        <TabsContent value="backlog" className={'col-span-full'}>
          Backlog
        </TabsContent>
        <TabsContent value="to_do" className={'col-span-full'}>
          To do
        </TabsContent>
        <TabsContent value="doing" className={'col-span-full'}>
          Doing
        </TabsContent>
        <TabsContent value="on_hold" className={'col-span-full'}>
          On hold
        </TabsContent>
        <TabsContent value="done" className={'col-span-full'}>
          Done
        </TabsContent>
        <TabsContent value="dropped" className={'col-span-full'}>
          Dropped
        </TabsContent>
      </Tabs>
    </section>
  );
}

export async function loader({request}: LoaderFunctionArgs) {
  return await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  });
}
