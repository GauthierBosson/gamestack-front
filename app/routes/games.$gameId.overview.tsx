import {Button} from '~/components/ui/button';
import {MoveRight} from 'lucide-react';
import ArticleCard from '~/components/article-card';

export default function GameOverview() {
  return (
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
  );
}
