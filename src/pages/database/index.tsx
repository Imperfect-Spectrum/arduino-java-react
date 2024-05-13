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
import React, { useEffect, useState } from "react";

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
  const [dataTable, setDataTable] = useState<OperationData[] | undefined>(
    undefined
  );

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get<OperationData[]>(
          "http://localhost:8080/getLogs"
        );
        setDataTable(response.data);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    }

    fetchData();
  }, []);

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
    data: dataTable || [],
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
