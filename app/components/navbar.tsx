import {Avatar, AvatarFallback, AvatarImage} from '~/components/ui/avatar';
import {useRouteLoaderData} from '@remix-run/react';
import type {loader} from '~/root';
import type {SerializeFrom} from '@remix-run/node';
import {Button} from '~/components/ui/button';
import {ThemeToggle} from '~/components/theme-toggle';

export default function Navbar() {
  const {user} = useRouteLoaderData('root') as SerializeFrom<typeof loader>;

  return (
    <nav
      className={
        'p-4 rounded-[25px] w-full shadow-md flex items-center justify-between bg-background border'
      }>
      <div>GameStack</div>
      <ul className={'flex items-center gap-4'}>
        <li>News</li>
        {!user && (
          <Button asChild>
            <a href="/login">Login</a>
          </Button>
        )}
        {user && (
          <>
            <li>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </li>
            <li>
              <Button asChild>
                <a href="/logout">Logout</a>
              </Button>
            </li>
          </>
        )}
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
}
