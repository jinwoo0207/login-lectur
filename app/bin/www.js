"use strict";

const app = require("../app");
const logger = require("../src/config/logger");
const PORT = process.env.PORT || 3000; //포트에 값이 없으면 3000번 적용


app.listen(PORT, () =>{
    logger.info(`${PORT} 포트에서 서버가 가동되었습니다.`);
});