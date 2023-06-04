import mysql from "mysql";

const connection = mysql.createPool({
  host: process.env.API_HOST, // MySQL 호스트
  user: process.env.API_USER, // MySQL 사용자 이름
  password: process.env.API_PASSWORD, // MySQL 비밀번호
  database: process.env.API_DATABASE, // 사용할 데이터베이스 이름
});

export default connection;
