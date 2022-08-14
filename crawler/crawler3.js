// 1. 自動取得今日日期 （可能利用 cron 排程工具 系統每日自動執行）
// 2. 從檔案中讀取股票代碼
const axios = require("axios");
const moment  = require("moment");
const fsPromises = require('fs').promises;

// 開始抓資料
let stockNo = 1234;// TODO: 需要從 stock.txt 的檔案裡讀取股票代碼
let querydate = moment().format("YYYY-MM-DD")//'20220814';
// axios.get(url, 設定)
async function getStockInfo(stockNo, querydate) {
    try {
      let response = await axios.get(`https://www.twse.com.tw/exchangeReport/STOCK_DAY`, {
        params: {
          response: 'json',
          date: querydate,
          stockNo,
        },
      });
      console.log(response.data);
    } catch (e) {
      console.error(e);
    }
  }

  (async function () {
    try {
      let stockNo = await fsPromises.readFile('stock.txt', 'utf-8');
      getStockInfo(stockNo, querydate);
    } catch (err) {
      console.error(`發生錯誤: ${err}`);
    }
  })();

