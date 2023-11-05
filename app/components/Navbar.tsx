import {Avatar, AvatarFallback, AvatarImage} from '~/components/ui/avatar';
import {useRouteLoaderData} from '@remix-run/react';
import type {loader} from '~/root';
import type {SerializeFrom} from '@remix-run/node';
import {Button} from '~/components/ui/button';

export default function Navbar() {
  const {user} = useRouteLoaderData('root') as SerializeFrom<typeof loader>;

  return (
    <nav
      className={
        'p-4 rounded-[25px] w-full shadow-md flex items-center justify-between bg-white'
      }>
      <div>GameStack</div>
      <ul className={'flex items-center gap-4'}>
        <li>News</li>
        <li>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </li>
        {user && (
          <li>
            <Button asChild>
              <a href="/logout">Logout</a>
            </Button>
          </li>
        )}
      </ul>
    </nav>
  );
}
