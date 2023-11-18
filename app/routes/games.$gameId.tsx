import {json} from '@remix-run/node';
import {Outlet, useLoaderData} from '@remix-run/react';
import {Heart, MoveRight} from 'lucide-react';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '~/components/ui/tabs';
import {Button} from '~/components/ui/button';
import ArticleCard from '~/components/article-card';
import {Card, CardContent} from '~/components/ui/card';

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
        <Outlet />
        <Tabs defaultValue={'overview'} className={'space-y-8'}>
          <TabsList className={'flex justify-center'}>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="social">Discussion</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="stats">Stats</TabsTrigger>
          </TabsList>
          <TabsContent value={'overview'}>
            <section className={'space-y-4'}>
              <div className={'space-y-4'}>
                <div className={'flex justify-between items-center'}>
                  <h2>Latest news</h2>
                  <Button asChild variant={'link'}>
                    <a href="#">
                      See all related news &nbsp;
                      <span>
                        <MoveRight />
                      </span>
                    </a>
                  </Button>
                </div>

                <div className={'grid grid-cols-5 gap-4'}>
                  <ArticleCard
                    title={'Judgement game is amazingly good'}
                    picture={'/judgment_cover.jpg'}
                    date={'12/12/2023'}
                    author={'Gauthier'}
                  />
                  <ArticleCard
                    title={'Judgement game is amazingly good'}
                    picture={'/judgment_cover.jpg'}
                    date={'12/12/2023'}
                    author={'Gauthier'}
                  />
                  <ArticleCard
                    title={'Judgement game is amazingly good'}
                    picture={'/judgment_cover.jpg'}
                    date={'12/12/2023'}
                    author={'Gauthier'}
                  />
                  <ArticleCard
                    title={'Judgement game is amazingly good'}
                    picture={'/judgment_cover.jpg'}
                    date={'12/12/2023'}
                    author={'Gauthier'}
                  />
                  <ArticleCard
                    title={'Judgement game is amazingly good'}
                    picture={'/judgment_cover.jpg'}
                    date={'12/12/2023'}
                    author={'Gauthier'}
                  />
                </div>
              </div>
              <div>
                <h2>Screenshots</h2>
              </div>
              <div>
                <h2>Videos</h2>
              </div>
              <div>
                <h2>Buy</h2>
              </div>
              <div>
                <h2>You may also like</h2>
              </div>
              {/*<div>*/}
              {/*  <h2>Related articles</h2>*/}
              {/*</div>*/}
            </section>
          </TabsContent>
          <TabsContent value={'social'}>
            <section className={'space-y-4'}>
              <h2>Discussions</h2>
              <div>
                <article className={'w-full'}>
                  <Card>
                    <CardContent className={'grow'}></CardContent>
                  </Card>
                </article>
              </div>
            </section>
          </TabsContent>
          <TabsContent value={'reviews'}>
            <section>
              <h2>Reviews</h2>
            </section>
          </TabsContent>
          <TabsContent value={'stats'}>
            <section></section>
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
}
