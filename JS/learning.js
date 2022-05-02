// function Person (){
// 	this.age = 0;
// 	setInterval(() => {
// 		this.age++;
// 		console.log(this.age)
// 	}, 1000);
// }

// let a = "NaN"
// let b = NaN
// let c = "hello"
// let d = 12; 
// console.log(Number.isNaN(a))
// console.log(Number.isNaN(b))
// console.log(Number.isNaN(c))
// console.log(Number.isNaN(d))

// console.log(Math.sinh(0))
// console.log(Math.hypot(2,2,1))

// console.log(Math.log2(16))
// console.log(Math.expm1(0))

// console.log(Math.sign(16)) //знак числа
// console.log(Math.sign(-16))
// console.log(Math.sign(0))


// let str ="Str simple".repeat(3)
// //console.log(str.includes("simple"))
// console.log(str.endsWith("simple"))

// let arr = [5,6,21,2]
// arr.fill(0,1,2)
// console.log(arr)

// let arr = ['a', 'b' , 'c']
// let entries = arr.entries()
// let keys = arr.keys()
// let values = arr.values()
// console.log(...entries)
// console.log(...keys)
// console.log(...values)

let arr = [1,2,3,213,12,3,12,312,,21,3,1,1,1,1,1,2,2,2,13,2,3,3,1,]
let arr2 = [...new Set(arr)]
console.log(arr2)