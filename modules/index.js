const first = require('./first');
const second = require('./second');

console.log('I am index');


let map = {};
function require(module_name) {
  if(map[module_name]) {
    return map[module_name];
  }
  map[module_name] = load module_name;
}