"use client";
import {
  collection,
  getFirestore,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import app from "@/app/_firebase/Config";
import { useEffect, useState } from "react";
import { QAadd, QA } from "../_settings/interface";

export default function useQA() {
  const db = getFirestore(app);
  const [products, setProducts] = useState<QA[]>([]);

  const createQA = async (QAadd: QAadd) => {
    try {
      await addDoc(collection(db, "QA"), {
        qaID: new Date().getTime(),
        question: QAadd.question,
        answer: QAadd.answer,
        qaAskTime: serverTimestamp(),
        qaCheckTime: "",
        stuNum: "001", //學號
        office: "資管", //目前指派單位
        officeId: 1,
        history: ["資管"],
        status: "pending", //狀態 e.g 是否審核過
      });
    } catch (error) {
      console.log(error);
    }
  };
  return [products, createQA] as const;
}
