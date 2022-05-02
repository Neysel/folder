// let count = 0;
// while(count <10) {
//   console.log(count);
//   if(count==4) {
//     break;
//   }
//   count++;
// }

// let count = 10;
// do {
//   console.log(count);
//   count--;
// } while(count>7)

// let arr = [5, 7, 9, 1, 0];
// // for(let i=0; i<arr.length; i++) {
// //   console.log(arr[i])
// // }
// for (let item of arr) {
//   console.log(item*2)
// }

// let obj = {
//   "name": "Muru",
//   "age": 25, 
//   "number": 16846541
// }

// for (let key in obj) {
//   console.log(`ключ ${key}, Значение ${obj}[key]}`)
// }

//  let arr = [5, 7, 9, 1, 0];
//  arr.forEach(function(item, i, array) {
//    console.log(`Элемент: ${item}
//    Индекс: ${i}
//    Массив: ${array}`)
//  })

// let people = [
//   {id: 1, name: "ivan1"},
//   {id: 2, name: "ivan2"},
//   {id: 3, name: "ivan3"},
//   {id: 4, name: "ivan4"},
// ]
// let a = people.filter (function(item) {
//   if(item.id<3) return item
// }) 
// console.log(a)

// let arr = [5, 7, 9, 1, 0];
// let newArr =  arr.map(function(item, i) {
//   return item*3
// })
// console.log(newArr)

let arr = []
// for(let i=0; i<20; i+=2) {
//   arr.push[i]
// }
// console.log(arr)

// let arr = []
//  for(let i=30; i>0; i-=3) {
//    arr.push(i)
// }
// console.log(arr)

//  for(let i=0; i<10; i++) {
//    arr.push(Math.pow(i,2))
//  }
//  console.log(arr)

let arr1 = [5, 7, 9, 1, 20]
let count = 0;
for(let i=0; i<arr1.length; i++) {
  if(arr1[i]%2==0){
    count++;
  }
}
console.log("всего четных элементов: " + count)