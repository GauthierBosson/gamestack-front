import type {ColumnDef} from '@tanstack/react-table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu';
import {Button} from '~/components/ui/button';
import {
  ArrowDownToLine,
  ArrowUpDown,
  ArrowUpRightSquare,
  MoreHorizontal,
} from 'lucide-react';
import {Checkbox} from '~/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';
import {AnimatePresence, motion} from 'framer-motion';

const gameStatus = {
  BACKLOG: 'Backlog',
  PLAYING: 'Playing',
  ON_HOLD: 'On hold',
  DONE: 'Done',
  DROPPED: 'Dropped',
} as const;

const gameScores = {
  NONE: '-',
  ONE: '1',
  TWO: '2',
  THREE: '3',
  FOUR: '4',
  FIVE: '5',
  SIX: '6',
  SEVEN: '7',
  HEIGHT: '8',
  NINE: '9',
  TEN: '10',
} as const;

export type Game = {
  id: string;
  picture: string;
  name: string;
  status: (typeof gameStatus)[keyof typeof gameStatus];
  type: string;
  platform: string;
  score: (typeof gameScores)[keyof typeof gameScores];
  slug: string;
};

export const columns: ColumnDef<Game>[] = [
  {
    accessorKey: 'id',
  },
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
    cell: ({row, table, column}) => (
      <Select
        onValueChange={(newStatus: Game['status']) => {
          if (newStatus === row.original.status) return;

          table.options.meta?.updateSingleColumn(
            parseInt(row.id),
            column.id,
            newStatus,
          );
        }}>
        <SelectTrigger className="w-[110px]">
          <SelectValue placeholder={row.original.status} />
        </SelectTrigger>
        <SelectContent>
          {Object.values(gameStatus).map((status) => (
            <SelectItem key={status} value={status}>
              {status}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    ),
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
    cell: ({row, table, column}) => (
      <Select
        onValueChange={(newScore: Game['score']) => {
          if (newScore === row.original.score) return;

          table.options.meta?.updateSingleColumn(
            parseInt(row.id),
            column.id,
            newScore,
          );
        }}>
        <SelectTrigger className="w-[60px]">
          <SelectValue placeholder={row.original.score} />
        </SelectTrigger>
        <SelectContent>
          {Object.values(gameScores).map((score) => (
            <SelectItem key={score} value={score.toString()}>
              {score}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    ),
  },
  {
    id: 'actions',
    cell: ({row, table}) => {
      const game = row.original;
      const rowId = parseInt(row.id);
      const isEdited =
        JSON.stringify(table.options.meta?.currentData[rowId]) !==
        JSON.stringify(table.options.meta?.untouchedData[rowId]);

      return (
        <div className={'flex items-center gap-2 min-w-[40px]'}>
          <div className={'w-[20px] inline-block'}>
            <AnimatePresence>
              {isEdited && (
                <>
                  <span className="sr-only">Save your changes</span>
                  <motion.button
                    initial={{
                      opacity: 0,
                      scale: 0,
                    }}
                    animate={{opacity: 1, scale: 1}}
                    exit={{opacity: 0, scale: 0}}
                    children={
                      <span className={'relative flex h-5 w-5'}>
                        <ArrowDownToLine className="animate-ping absolute inline-flex h-full w-full stroke-green-600 opacity-70" />
                        <ArrowDownToLine
                          className={
                            'relative inline-flex stroke-green-600 h-5 w-5'
                          }
                        />
                      </span>
                    }
                    onClick={() => table.options.meta?.saveSingleRow(rowId)}
                  />
                </>
              )}
            </AnimatePresence>
          </div>
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
                onClick={() =>
                  table.options.meta?.removeSingleRow(row.id, game.id)
                }>
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
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
