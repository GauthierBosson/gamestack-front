import type {LoaderFunctionArgs} from '@remix-run/node';
import {json} from '@remix-run/node';
import {Outlet, useLoaderData} from '@remix-run/react';
import {Heart} from 'lucide-react';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '~/components/ui/tabs';
import {useState} from 'react';

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
          <div className={'flex justify-evenly'}>
            <span>Add to list</span>
            <span>
              <Heart />
            </span>
          </div>
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
      <section className={'container mx-auto py-14'}>
        <Tabs defaultValue={'overview'} value={tabId} className={'space-y-8'}>
          <TabsList className={'flex justify-center'}>
            <TabsTrigger
              value="overview"
              onClick={() => {
                setTabId('overview');
                history.pushState(null, '', 'overview');
              }}>
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="discussions"
              onClick={() => {
                setTabId('discussions');
                history.pushState(null, '', 'discussions');
              }}>
              Discussion
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              onClick={() => {
                setTabId('reviews');
                history.pushState(null, '', 'reviews');
              }}>
              Reviews
            </TabsTrigger>
            <TabsTrigger
              value="stats"
              onClick={() => {
                setTabId('stats');
                history.pushState(null, '', 'stats');
              }}>
              Stats
            </TabsTrigger>
          </TabsList>
          <TabsContent value={'overview'}>
            <Outlet />
          </TabsContent>
          <TabsContent value={'discussions'}>
            <section className={'space-y-4'}>
              <h2>Discussions</h2>
              <Outlet />
            </section>
          </TabsContent>
          <TabsContent value={'reviews'}>
            <section>
              <h2>Reviews</h2>
              <Outlet />
            </section>
          </TabsContent>
          <TabsContent value={'stats'}>
            <h2>Stats</h2>
            <Outlet />
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
}
