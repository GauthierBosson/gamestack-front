import type {ActionFunctionArgs, LoaderFunctionArgs} from '@remix-run/node';
import {json} from '@remix-run/node';
import {Link, Outlet, useLoaderData} from '@remix-run/react';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '~/components/ui/tabs';
import {useState} from 'react';
import AddGame from '~/components/add-game';

type TabId = 'overview' | 'discussions' | 'reviews' | 'stats';

export async function loader({params, request}: LoaderFunctionArgs) {
  const id = params.gameId;
  let currentTab: TabId = 'overview';
  const url = new URL(request.url);

  if (url.pathname.includes('discussions')) currentTab = 'discussions';
  if (url.pathname.includes('reviews')) currentTab = 'reviews';
  if (url.pathname.includes('stats')) currentTab = 'stats';

  return json({id, currentTab});
}

export default function Game() {
  const {id, currentTab} = useLoaderData<typeof loader>();
  const [tabId, setTabId] = useState<TabId>(currentTab);

  return (
    <>
      <section className={'h-[400px] w-full'}>
        <div
          className={
            'bg-[url("/judgment_banner.jpeg")] bg-no-repeat bg-center w-full h-full'
          }></div>
      </section>
      <section className={'container mx-auto flex gap-12'}>
        <div className={'space-y-4 mt-[-100px] min-w-[200px]'}>
          <img width={200} src="/judgment_cover.jpg" alt="Judgment cover" />
          <div>Recommended at 98%</div>
          <div>100 000 players</div>
          <AddGame />
        </div>
        <div className={'py-4'}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
            pharetra sapien. Praesent mattis id risus quis lacinia. In rhoncus
            lorem non ligula tempus, quis aliquam orci gravida. Pellentesque et
            lectus condimentum, egestas nisi porttitor, dignissim odio. Sed
            sagittis eleifend commodo. Nam sed molestie erat. Sed molestie nec
            neque non pretium. Nam quis enim maximus, imperdiet diam sit amet,
            iaculis erat. Nam quis turpis convallis, tristique urna quis,
            hendrerit nisl. Vestibulum facilisis tempus urna, a tincidunt urna
            fringilla sit amet.
          </p>
        </div>
      </section>
      {/* TODO: Seems like there is bug when you change link too fast, it doesnt change component */}
      <section className={'container mx-auto py-14'}>
        <Tabs value={tabId} className={'space-y-8'}>
          <TabsList className={'flex justify-center'}>
            <TabsTrigger
              value="overview"
              onClick={() => {
                setTabId('overview');
              }}>
              <Link to={'overview'}>Overview</Link>
            </TabsTrigger>
            <TabsTrigger
              value="discussions"
              onClick={() => {
                setTabId('discussions');
              }}>
              <Link to={'discussions'}>Discussions</Link>
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              onClick={() => {
                setTabId('reviews');
              }}>
              <Link to={'reviews'}>Reviews</Link>
            </TabsTrigger>
            <TabsTrigger
              value="stats"
              onClick={() => {
                setTabId('stats');
              }}>
              <Link to={'stats'}>Stats</Link>
            </TabsTrigger>
          </TabsList>
          <TabsContent value={tabId}>
            <section className={'space-y-4'}>
              <Outlet />
            </section>
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
}

export async function action({request}: ActionFunctionArgs) {
  console.log('here');

  return null;
}
