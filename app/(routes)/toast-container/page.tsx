"use client";
import React, { Key } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import Title from "@/components/typography/headings/title";
import Paragraph from "@/components/typography/headings/paragraph";
import { toastProperties, columns } from "@/constants/toastTable";
import { ToastProperty, ToastColumn } from "@/types/toastifyType";

const ToastTable = () => {
  const getKeyValue = (item: ToastProperty, columnKey: Key) => {
    return item[columnKey as keyof ToastProperty];
  };

  return (
    <div className="mt-4 w-full">
      <Title text={"Toast Container"} />
      <Paragraph text={"Props"} />
      <Table>
        <TableHeader columns={columns}>
          {(column: ToastColumn) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={toastProperties}>
          {(item: ToastProperty) => (
            <TableRow key={item.name}>
              {(columnKey) => (
                <TableCell className={`${columnKey == "name" && "capitalize"}`}>
                  {getKeyValue(item, columnKey)}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
export default ToastTable;
