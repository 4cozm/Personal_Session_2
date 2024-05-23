import express from "express";


const app=express();
const PORT = 3306;
app.use(express.json());

app.listen(PORT,()=>{
    console.log("서버가 3306 포트에서 열렸습니다");
})