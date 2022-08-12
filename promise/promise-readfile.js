// Promise 是一個表示非同步運算的「最終」完成或失敗的物件
// - 物件 new Promise();
// 建構式 Promise，需要傳一個參數 executor
// new Promise(executor);
// executor: 也是一個函式，有兩個參數 resolve, reject
// function executor(resolve, reject)
// (resolve, reject) => {}
// - 非同步: 把非同步程式搬進去 executor 裡
// - 最終完成: 呼叫 resolve -> resolve(資料)
// - 最終失敗: 呼叫 reject -> reject(失敗原因)
const fs = require('fs');

// 記得要放編碼 utf8
// callback
// readFile 去硬碟讀檔案，這是很慢的事，他是非同步
// fs.readFile('test.txt', 'utf8', (err, data) => {
//   if (err) {
//     return console.error('發生錯誤', err);
//   }
//   console.log(data);
// });

// 宣告方法一
//        函數名稱 帶入檔案名稱 編碼格式
function readFile(fileName,CharacterEncoding){
    return new Promise((resolve, reject) => { //回傳一個 promise 物件
        fs.readFile(filename, CharacterEncoding, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

//執行readFile函數帶入要讀取的檔案名, 字元編碼 
readFile("promise/test.txt","utf-8") 
.then((data)=>{  //成功用 then 讀出內容
    console.log(data);
})
.catch((err)=>{  //失敗用 catch 回覆 發生錯誤
    console.log(err);
})
