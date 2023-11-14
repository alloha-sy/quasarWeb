export type QAadd = {
  question: string;
  answer: string;
};

export type QA = {
  qaID: number;
  question: string;
  answer: string;
  qaAskTime: Date;
  qaCheckTime: Date | string;
  stuNum: string; //學號
  office: string; //目前指派單位
  officeId: 1;
  assignCount: 0; //轉介次數
  history: ["資管"];
  status: "pending"; //狀態 e.g 是否審核過
};
