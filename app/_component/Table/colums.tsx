import moment from "moment";
export const columns = [
  {
    field: "question",
    headerName: "問題",
    width: 220,
  },
  { field: "stuNum", headerName: "發問者學號", width: 260 },
  {
    field: "qaAskTime",
    headerName: "發問時間",
    width: 220,
    renderCell: (params: any) => {
      return <div>{moment(params.row.qaAskTime.toDate()).format("LLL")}</div>;
    },
  },
];
