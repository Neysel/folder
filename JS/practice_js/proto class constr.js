// let admin = {
// 	rules: 777,
// 	isAdmin() {
// 		console.log("Я админ, "+this.name+" мои права "+this.rules)
// 	}
// }
// let user = {
// 	name: "Dev",
// 	age: 20,
// 	__proto__: admin
// }
// function User () {}


class User  {
	constructor(name, age, admin=false) {
	this.name = name;
	this.age = age;
	this.admin = admin;
}

myInfo() {
		console.log("Я админ, "+this.name+" мне "+this.age+" лет")
		if(this.admin == true) {
			console.log("\nЯ админ")
		}
	}
	// this.__proto__ = admin;
}
class Moderator extends User {
	constructor(name, age, admin=false, moder=true) {
		super(name, age, admin)
		this.moder = moder;
	}
	
	static addPost() {
		console.log("New Post")
	}
	static master = true;
	myInfo() {
		super.myInfo();
			console.log("\nЯ модератор")
		}
	}
let u1 = new User("Levs", 23)
let u2 = new User("Kate", 23, true)
let u3 = new User("Tale", 23)
let m1 = new Moderator("Mate", 23)