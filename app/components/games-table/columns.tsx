import type {ColumnDef} from '@tanstack/react-table';

export type Game = {
  picture: string;
  name: string;
  status: 'to do' | 'doing' | 'on hold' | 'done' | 'dropped';
  type: string;
  platform: string;
  score: number | '/';
};

export const columns: ColumnDef<Game>[] = [
  {
    accessorKey: 'picture',
    header: 'Picture',
  },
  {
    accessorKey: 'name',
    header: 'Name',
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
];
