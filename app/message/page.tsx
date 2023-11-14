"use client";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import useQA from "./useMessage";
import { QAadd } from "../_settings/interface";

export default function Message() {
  const [message, setMessage] = useState("");
  const [products, createQA] = useQA();
  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };
  const QAadd = (message: QAadd) => {
    createQA(message);
  };
  const handleSubmit = async () => {
    const res = await fetch(
      "https://fju-test3.cognitiveservices.azure.com/language/:query-knowledgebases?projectName=shelly-search-test&api-version=2021-10-01",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Ocp-Apim-Subscription-Key": "fde6fc08d2e14a71b844af69aeea65f7",
        },
        body: JSON.stringify({
          question: message,
        }),
      }
    );
    const result = await res.json();
    const answer = result.answers[0].answer;
    QAadd({
      question: message,
      answer,
    });
  };
  const keyPress = (ev: React.KeyboardEvent<HTMLDivElement>) => {
    console.log(`Pressed keyCode ${ev.key}`);
    if (ev.key === "Enter") {
      handleSubmit();
    }
  };
  return (
    <TextField
      id="fullWidth"
      fullWidth
      label="問啥?"
      variant="filled"
      value={message}
      onKeyDown={keyPress}
      onChange={handleClick}
    />
  );
}
