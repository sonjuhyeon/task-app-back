const express = require("express"); // express 모듈 불러오기
const cors = require("cors"); // cors 모듈 불러오기
const PORT = "8080";
const app = express(); // express 모듈을 사용하기 위해 app 변수에 할당

require("dotenv").config(); // .env 파일 사용 설정

app.use(
  cors({
    origin: process.env.MY_DOMAIN,
    credentials: true,
  })
);

app.use(express.json()); // express 모듈의 json() 메소드를 사용

app.get("/", (request, response) => {
  response.send("Hello World https back completed");
});

app.use(require("./routes/getRoutes"));
app.use(require("./routes/postRoutes"));
app.use(require("./routes/deleteRoutes"));
app.use(require("./routes/updateRoutes"));

app.listen(PORT, () => console.log(`server is running on ${PORT}`)); // 서버실행 메세지
