import type {ColumnDef} from '@tanstack/react-table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu';
import {Button} from '~/components/ui/button';
import {ArrowUpDown, ArrowUpRightSquare, MoreHorizontal} from 'lucide-react';
import {Checkbox} from '~/components/ui/checkbox';

export type Game = {
  id: string;
  picture: string;
  name: string;
  status: 'to do' | 'doing' | 'on hold' | 'done' | 'dropped';
  type: string;
  platform: string;
  score: number | '/';
  slug: string;
};

export const columns: ColumnDef<Game>[] = [
  {
    accessorKey: 'picture',
    header: 'Picture',
    cell: ({row}) => {
      const game = row.original;

      return <img width={70} src={game.picture} alt="game" />;
    },
  },
  {
    accessorKey: 'name',
    header: ({column}) => {
      return (
        <Button
          variant={'ghost'}
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({row}) => (
      <div className={'flex items-center gap-2'}>
        <span>{row.original.name}</span>
        <a href={`/games/${row.original.slug}`}>
          <ArrowUpRightSquare className={'w-[14px]'} />
        </a>
      </div>
    ),
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'type',
    header: 'Type',
  },
  {
    accessorKey: 'platform',
    header: 'Platform',
  },
  {
    accessorKey: 'score',
    header: 'Score',
  },
  {
    id: 'actions',
    cell: ({row}) => {
      const game = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(game.id)}>
              Copy game ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
  {
    id: 'select',
    header: ({table}) => (
      <Checkbox
        className={'mr-2'}
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label={'Select all'}
      />
    ),
    cell: ({row}) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label={'Select row'}
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
];
