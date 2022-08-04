// let Celsius = [20, 25, 30, 40]
// let Fahrenheit = Celsius.map(
//     function(degree){
//     return degree * 9 / 5 + 32
//   }
// )
// console.log(Fahrenheit)

// 應用：攝氏華氏轉換
// 創造一個celsius的陣列
celsius = [20, 25, 30, 40];

// 自函式取得一個回傳值
//   函式名稱（參數）   {函式內容}
function map(celsius) {
  let fahrenheit = [];
  //宣告一個變數為fahrenheit內容為空陣列
  for (let i = 0; i< celsius.length; i++){
      fahrenheit.push(celsius[i] * 9 / 5 + 32) ;
  }
  //   for(宣告某變數的初始值; 條件判斷：可用陣列長度來做條件的判斷; 迴圈結束時執行的動作){迴圈內要執行的邏輯}
  //    push 在array後面＋
  return fahrenheit;
  //回傳值
}
console.log(map(celsius));