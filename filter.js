let ary = [{
    id:1,
    type: 'A',
    price: 100
},{
    id:2,
    type: 'B',
    price: 200
},{
    id:3,
    type: 'A',
    price: 150
}];

let result = ary.filter((item) => {
   return item.type === 'A'; 
});

function filter(ary, )