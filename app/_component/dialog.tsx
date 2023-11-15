// "use client";
// import { useState } from "react";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogTitle from "@mui/material/DialogTitle";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import IconButton from "@mui/material/IconButton";
// import CloseIcon from "@mui/icons-material/Close";

// export default function Message() {
//   const [message, setMessage] = useState("");
//   return (
//     <Dialog open={} onClose={hide} aria-labelledby="新增產品">
//       <DialogTitle>新增產品</DialogTitle>
//       <DialogContent>
//         <TextField
//           label="問題"
//           variant="outlined"
//           name="question"
//           value={newProduct.desc}
//           onChange={handleClick}
//         />
//         <p />
//         <TextField
//           label="答案"
//           variant="outlined"
//           name="answer"
//           value={newProduct.price}
//           onChange={handleClick}
//         />
//         <p />
//       </DialogContent>
//       <DialogActions>
//         <IconButton
//           aria-label="close"
//           onClick={hide}
//           sx={{
//             position: "absolute",
//             right: 8,
//             top: 8,
//           }}
//         >
//           <CloseIcon />
//         </IconButton>
//         <Button variant="contained" color="primary" onClick={update}>
//           新增
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// }
