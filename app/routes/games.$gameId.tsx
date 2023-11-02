import {json} from '@remix-run/node';
import {useLoaderData} from '@remix-run/react';
import {Heart} from 'lucide-react';
import {Tabs, TabsList, TabsTrigger} from '~/components/ui/tabs';

export const loader = async ({params}) => {
  return json({id: params.gameId});
};

export default function Game() {
  const {id} = useLoaderData<typeof loader>();
  console.log(id);

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
        <Tabs className={'flex justify-center'}>
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="stats">Stats</TabsTrigger>
            <TabsTrigger value="social">Social</TabsTrigger>
          </TabsList>
        </Tabs>
      </section>
    </>
  );
}
