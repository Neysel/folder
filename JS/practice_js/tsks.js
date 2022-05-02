// function printText(name, age) {
//   return "Hello My name is "+name+", Age: "+age
// }
// let name1 = "Kean"
// let age1 = 19
// let res = printText(name1, age1);
// alert(res)

// let obj = {
//   name: "Naje",
//   age: 18,
//   hello() {
//     console.log("Меня зовут "+this.name)
//   }
// }
// obj.hello()

// let arr = [1,2,1,3,23,34,5,345,3,41,2]
// arr.sort((a, b) => a - b)
// console.log(arr)

// arr.sort()

// function fibonachi(count) {
//   let fib = [];
//   for(let i=0; i<count; i++) {
//   if(i==0) fib[i] = 1;
//   else if(i==1) fib[i] = 2;
//   else fib[i] = fib[i-2]+fib[i-1];
// }
// return fib;
// }
// let f = fibonachi(15);
// console.log(f)

// function factorial(n) {
//   let fact = 1;
//   if(n==0) return fact;
//   for(let i=1; i<=n; i++) {
//     fact *= i;
//   }
//   return fact;
// }
// let a = factorial(0)
// console.log(a)
// let b = factorial(3)
// console.log(b)
// let c = factorial(8)
// console.log(c)

// let addAndMul = function(num) {
//   num += "";
//   let add = 0, mul = 1;
//   for(let i = 0; i<num.length; i++){
//     add += +num[i];
//     mul *= num[i];
//   }
//   return {
//     "Summ": add, 
//     "Multiplication": mul,
//     "Num": num
//   }
// }
// console.log(addAndMul("7952"))

// function reverse (number) {
//   number += "";
//   let reverseNumber = "";
//   for(let i=number.length-1; i>=0; i--) {
//     reverseNumber += number[i]
//   }
//   return +reverseNumber
// }
// console.log(reverse(3486))

// 3486 

// function number(number) {
//    number += "";
//    let chet = 0, nechet = 0;
//    for(let i = 0; i<number.length; i++) {
//     if(number[i] % 2 == 0) chet++;
//     else nechet++;
//     }
// return {
//   "четные числа": chet, 
//   "нечетные числа": nechet,
// }
// }
// console.log(number(3486))

// function randomNumber() {
//   let number = Math.floor(Math.random()*100);
//   for(let count=1; count<=10; count++) {
//     let result = +prompt(`Попытка №${count}, Введите число:`)
//     if(result == number) {
//       return alert(`Вы угадали число. Попыток: ${count}, Число: ${number}`)
//     } else if(result < number) {
//       alert(`ваше число ${result}, меньше загадонного`)
//     } else if(result > number) {
//       alert(`ваше число ${result}, большн загадонного`)
//     } else {
//       return alert (`Вы угадали число. Попыток: ${count}, Число: ${number}`)
//     }
//   }
//   return alert (`Вы не угадали число. Попыток: ${count}, Число: ${number}`)
// }
// randomNumber()