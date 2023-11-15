"use client";
import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import { columns } from "./colums";
import useQA from "./useMessage";

export default function Table() {
  const [QaList, createQA, deleteQA, updateQA] = useQA();
  const actionColumn = [
    {
      field: "action",
      headerName: "選項",
      width: 180,
      sortable: false,
      renderCell: (params: any) => {
        return (
          <div>
            <button onClick={() => deleteQA(params.row.id)}>del</button>
            <button>edit</button>
          </div>
        );
      },
    },
  ];
  return (
    <div
      style={{
        height: 400,
        width: "90%",
        borderRadius: "10px",
        boxShadow: "0 1px 5px #4a4a4a40",
        marginTop: "30px",
      }}
    >
      <DataGrid
        rows={QaList}
        columns={columns.concat(actionColumn)}
        disableColumnMenu
        disableRowSelectionOnClick
      />
    </div>
  );
}
