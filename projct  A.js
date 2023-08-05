// function countWords(str) {

//    const map = new Map();
 
//    for (let word of words) {co
//      if (map.has(word)) {
//        map.set(word, map.get(word) + 1);
//      } else {
//        map.set(word, 1);
//      }
//    }
   
//   return map;
// }

// const sentence = "I am xyz. I am learning web development from PW Skills.";
// console.log(countWords(sentence));

 // 2 only unique items

 function uniqueElements(arr){
   return new Set(arr);
 }
console.log(uniqueElements([1,2,2,3,3,4]));
console.log(uniqueElements([5,6,7,7,8,8]));

//swap

function swap(a, b){
   [a, b] = [b, a];
   return[a, b];
}
let x = 1;
let y = 2;
[x, y] = swap(x, y);
console.log(x, y);

//random
function extract(arr){
   const[first, second, , , ,last] = arr;
  return[first,second, last]; 
}
// const array = [1,2,3,4,5];
// console.log(extract(array));

//max & min
function maxMin(arr) {
return{
   max: Math.max(...arr),
   min: Math.min(...arr),
  };
}
const array = [3,5,7,8,1,2,9];
console.log(maxMin(array));

//nested
// const person = {
//    name: "Mithun",
//    age: 21,
//    address: {
//      street: "B8, Block B, Industrial Area.",
//      city: "Sector 62, Noida",
//      state: "Uttar Pradesh",
//    },
//  };
 
//  function extractData(obj) {
//    const {
//      name,
//      address: { street },
//    } = obj;
//    return { name, street };