import {Avatar, AvatarFallback, AvatarImage} from '~/components/ui/avatar';

export default function Navbar() {
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
      </ul>
    </nav>
  );
}
