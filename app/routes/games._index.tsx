import {Input} from '~/components/ui/input';
import {Form, Link} from '@remix-run/react';
import {Button} from '~/components/ui/button';

export default function Games() {
  return (
    <>
      <section className={'pt-[150px] container mx-auto'}>
        <Form method={'get'} className={'space-y-2'}>
          <Input type={'search'} name={'query'} placeholder={'Search games'} />
          <Button type={'submit'}>Search</Button>
        </Form>
      </section>
      <section className={'container mx-auto py-24 space-y-8'}>
        <h1 className={'text-4xl font-bold'}>Games</h1>
        <div className={'grid grid-cols-8 gap-4'}>
          <article className={'border border-black rounded-md object-fill'}>
            <Link to={'/games/1'}>
              <img src="/judgment_cover.jpg" alt="" />
            </Link>
          </article>
          <article className={'border border-black rounded-md object-fill'}>
            <Link to={'/games/1'}>
              <img src="/judgment_cover.jpg" alt="" />
            </Link>
          </article>
          <article className={'border border-black rounded-md object-fill'}>
            <Link to={'/games/1'}>
              <img src="/judgment_cover.jpg" alt="" />
            </Link>
          </article>
          <article className={'border border-black rounded-md object-fill'}>
            <Link to={'/games/1'}>
              <img src="/judgment_cover.jpg" alt="" />
            </Link>
          </article>
          <article className={'border border-black rounded-md object-fill'}>
            <Link to={'/games/1'}>
              <img src="/judgment_cover.jpg" alt="" />
            </Link>
          </article>
          <article className={'border border-black rounded-md object-fill'}>
            <Link to={'/games/1'}>
              <img src="/judgment_cover.jpg" alt="" />
            </Link>
          </article>
          <article className={'border border-black rounded-md object-fill'}>
            <Link to={'/games/1'}>
              <img src="/judgment_cover.jpg" alt="" />
            </Link>
          </article>
          <article className={'border border-black rounded-md object-fill'}>
            <Link to={'/games/1'}>
              <img src="/judgment_cover.jpg" alt="" />
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}
