//應用：列出台灣高溫特報的區域
//宣告一個名為taiwanTemperature的陣列
//陣列裡包含台灣個地的溫度
let taiwanTemperature = [
  {
    location: "taipei",
    degree: 39,
  },
  {
    location: "taichung",
    degree: 33,
  },
  {
    location: "tainan",
    degree: 38,
  },
  {
    location: "taitung",
    degree: 34,
  }
  ];
// 自函式取得一個回傳值
//          函式名稱（參數）   {函式內容}
  function filter(taiwanTemperature){
    let alert = [];
//宣告一個名為alert的變數內容為空陣列 
    for(let i=0; i < taiwanTemperature.length; i++){
      if (taiwanTemperature[i].degree>36){
        alert.push(taiwanTemperature[i])
      }
    }
    return alert;
    
  }
//   for(宣告某變數的初始值; 條件判斷：可用陣列長度來做條件的判斷; 迴圈結束時執行的動作){迴圈內要執行的邏輯：如果溫度>36執行alert.push(taiwanTemperature[i])}
// alert.push(taiwanTemperature[i])
//   push 在array後面＋

console.log(filter(taiwanTemperature));