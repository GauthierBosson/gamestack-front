import type {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
} from '@tanstack/react-table';
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui/table';
import {Button} from '~/components/ui/button';
import {useState} from 'react';
import {Input} from '~/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu';
import Dialog from '~/components/dialog';
import type {RowData} from '@tanstack/table-core';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

declare module '@tanstack/react-table' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface TableMeta<TData extends RowData> {
    editRow: (rowIndex: string) => void;
    removeSingleRow: (rowIndex: string, gameId: string) => void;
    removeSelectedRows: (rowsIndexes: string[], gamesIndexes: string[]) => void;
  }
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [currentData, setCurrentData] = useState<TData[]>(data);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const table = useReactTable({
    data: currentData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
    initialState: {
      columnVisibility: {
        id: false,
      },
    },
    meta: {
      editRow: (rowIndex: string) => {
        return;
      },
      removeSingleRow: (rowIndex, gameId) => {
        //TODO: remove from DB and then from table

        // Delete from table
        setCurrentData((prev) =>
          prev.filter((_, index) => index !== parseInt(rowIndex)),
        );
      },
      removeSelectedRows: (rowsIndexes, gamesIndexes) => {
        // Delete from table
        setCurrentData((prev) =>
          prev.filter((_, index) => !rowsIndexes.includes(index.toString())),
        );

        // Deselect all rows
        table.toggleAllPageRowsSelected(false);
        table.toggleAllRowsSelected(false);
      },
    },
    debugTable: true,
  });

  return (
    <>
      <div>
        <div className={'flex justify-between items-center'}>
          <div className="py-4 min-w-[364px]">
            <Input
              placeholder="Filter games..."
              value={
                (table.getColumn('name')?.getFilterValue() as string) ?? ''
              }
              onChange={(event) =>
                table.getColumn('name')?.setFilterValue(event.target.value)
              }
            />
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger>Bulk Actions</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>
                  <Dialog
                    triggerLabel={'Delete'}
                    alertTitle={'Are you sur'}
                    alertMessage={'do you want to delete'}
                    actionFunction={() =>
                      table.options.meta!.removeSelectedRows(
                        table.getSelectedRowModel().rows.map((row) => row.id),
                        [],
                      )
                    }
                    isDisabled={table.getSelectedRowModel().rows.length === 0}
                  />
                </DropdownMenuLabel>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && 'selected'}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center">
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-end space-x-2 py-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}>
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}>
            Next
          </Button>
        </div>
      </div>
    </>
  );
}
