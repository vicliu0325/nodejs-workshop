//應用：計算出投票數
//宣告一個名為election的陣列
//陣列裡包含個區票數
let  election = [
    {
      name: "taipei",
      votes: 2000,
    },
    {
      name: "taichung",
      votes: 5000,
    },
    {
      name: "tainan",
      votes: 3000,
    },  
  ];
  
  // 自函式取得一個回傳值
  //          函式名稱（參數){函式內容}
  function reduce(election){
    let sum = 0;
  //  宣告一個名為sum的變數賦予值為0
    for (let i=0; i < election.length; i++) {   
      sum += election[i].votes;
  //  sum = sum + election[i].votes
   }
      return sum; 
  }
  
  console.log(reduce(election));