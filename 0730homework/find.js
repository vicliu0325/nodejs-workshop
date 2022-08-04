//應用：篩選出台灣最高的摩天大樓
//宣告一個名為taiwanBuilding的陣列
//陣列裡包含台灣的摩天大樓
let taiwanBuilding = [
    { 
      name: "Taipei101",
      height: 509.2,
    },
    {
      name: "85 Sky Tower",
      height: 378,
    },
    {
      name: "Taipei Nan Shan Plaza",
      height: 272,
    }
  ];
  
  // 自函式取得一個回傳值
  //     函式名稱（參數）   {函式內容}
  function find(taiwanBuilding){
    let tallestBuilding = [];
    for(let i=0; i<taiwanBuilding.length; i++){
      if(taiwanBuilding[i].height<1000){
     tallestBuilding.push(taiwanBuilding[i])
      }
      return tallestBuilding;
    }
  }
  
  console.log(find(taiwanBuilding));