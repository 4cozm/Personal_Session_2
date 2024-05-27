import express from "express";
import accountRouter from "./src/routers/account.js";

const app=express();
const PORT = 3306;
app.use(express.json());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/account",accountRouter);





app.listen(PORT,()=>{
    console.log("서버가 3306 포트에서 열렸습니다");
})