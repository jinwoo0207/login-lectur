const {createLogger, transports, format} = require("winston");
//위에 변수는 winston.을 대체한다. 즉 winston.createLogger, winston.transports 와 같다.
const {combine, timestamp, label, json, simple, colorize, printf} = format;
//1줄과 동일하게 format을 대체한다. 
const printFormat = printf(({ timestamp, label ,level, message }) =>{
    return `${timestamp} [${label}] ${level} : ${message}`;
}) 
const printLogFormat = {
    file : combine(
    label({
        label : "백엔드 츄릅",
    }),
    timestamp({
        format : "YYYY-MM-DD HH:mm:dd"
    }),
    printFormat //마지막이 출력 포맷 결정
    ),
    console : combine(
        colorize(),
        simple()
    ),
};
const opts = {
    file : new transports.File({
        filename : "access.log",
        dirname : "/log",
        level : "info",
        format : printLogFormat.file,
    }),
    console : 
    new transports.Console({
        level : "info",
        format : printLogFormat.console,
    }),
}
const logger = createLogger({
    transports : [opts.file],
});

if(process.env.NODE_ENV !== "production"){
    logger.add(opts.console);
}
module.exports = logger;