import type {MetaFunction} from '@remix-run/node';
import {Link} from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    {title: 'New Remix App'},
    {name: 'description', content: 'Welcome to Remix!'},
  ];
};

export default function Index() {
  return (
    <section className={'container mx-auto pt-[100px]'}>
      <Link to="/login">Go to Login</Link>
    </section>
  );
}
