import mysql from "mysql";
import env from "dotenv";
env.config();
// RDS 연결 정보
const connection = mysql.createConnection({
  host: process.env.ITEM_HOST,
  user: process.env.ITEM_USER,
  password: process.env.ITEM_PASSWORD,
  database: process.env.ITEM_DATABASE
});

// 데이터베이스에 연결
connection.connect((err) => {
  if (err) {
    console.error('아이템 데이터베이스 연결 실패:', err);
    return;
  }
  console.log('아이템 데이터베이스 연결 성공');
  //여기서 쿼리 실행 가능
});

// 연결 종료 시
connection.end((err) => {
  if (err) {
    console.error('아이템 데이터베이스 연결 해제 실패:', err);
    return;
  }
  console.log('아이템 데이터베이스 해제 완료');
});
