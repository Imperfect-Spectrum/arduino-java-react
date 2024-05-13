import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import axios from "axios";
import React from "react";

interface Operation {
  log_start: string;
  log_end: string;
  log_work: number;
}

interface Sensor {
  sensor1: number;
  sensor2: number;
  log_start: string;
  log_end: string;
}

type OperationData = {
  idOperation: number;
  operation: Operation;
  sensors: Sensor[];
};

const DataBase: React.FC = () => {
  const data: OperationData[] = [
    {
      idOperation: 7,
      operation: {
        log_end: "2024-05-12T15:19:57.686+00:00",
        log_work: 31,
        log_start: "2024-05-12T15:19:25.852+00:00",
      },
      sensors: [
        {
          sensor2: 1,
          log_end: "2024-05-12T15:19:34.957+00:00",
          log_start: "2024-05-12T15:19:34.957+00:00",
          sensor1: 2,
        },
        {
          sensor2: 1,
          log_end: "2024-05-12T15:19:34.957+00:00",
          log_start: "2024-05-12T15:19:34.957+00:00",
          sensor1: 2,
        },
        {
          sensor2: 1,
          log_end: "2024-05-12T15:19:34.957+00:00",
          log_start: "2024-05-12T15:19:34.957+00:00",
          sensor1: 2,
        },
      ],
    },
    {
      idOperation: 8,
      operation: {
        log_end: "2024-05-12T15:20:35.023+00:00",
        log_work: 10,
        log_start: "2024-05-12T15:20:24.770+00:00",
      },
      sensors: [
        {
          sensor2: 1,
          log_end: "2024-05-12T15:20:32.284+00:00",
          log_start: "2024-05-12T15:20:32.284+00:00",
          sensor1: 2,
        },
        {
          sensor2: 1,
          log_end: "2024-05-12T15:20:32.284+00:00",
          log_start: "2024-05-12T15:20:32.284+00:00",
          sensor1: 2,
        },
        {
          sensor2: 1,
          log_end: "2024-05-12T15:20:32.284+00:00",
          log_start: "2024-05-12T15:20:32.284+00:00",
          sensor1: 2,
        },
        {
          sensor2: 1,
          log_end: "2024-05-12T15:20:32.284+00:00",
          log_start: "2024-05-12T15:20:32.284+00:00",
          sensor1: 2,
        },
      ],
    },
  ];

  const columns: ColumnDef<OperationData>[] = [
    {
      header: "ID Операции",
      accessorKey: "idOperation",
    },
    {
      header: "Начало операции",
      accessorKey: "operation.log_start",
    },
    {
      header: "Окончание операции",
      accessorKey: "operation.log_end",
    },
    {
      header: "Время работы (сек)",
      accessorKey: "operation.log_work",
    },
  ];

  const table = useReactTable({
    data: data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div className="w-full">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DataBase;

export async function getServerSideProps() {
  try {
    const response = await axios.get<OperationData[]>("");

    const data = response.data;

    return { props: { data } };
  } catch (error) {
    return { props: { data: [] } };
  }
}
