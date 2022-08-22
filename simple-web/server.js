const express = require("express");
// 利用express這個框架/函式庫來建立一個web application
const app = express();
const port = 3002;

app.listen(3002, () => {
    console.log(`sever start at ${port}`);
});