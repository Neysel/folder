class People {
/**
 * 
 * @param {*} fio фио
 * @param {*} birthday 22222222222222 др
 * @param {*} numbers 3333333333333333
 * @param {*} room 444444444444444444444444
 */
	constructor(fio, birthday, numbers="", room="") {
		let name = fio.toLowerCase().split(" ");
		this.name = {}
		this.name.f = name[0][0].toUpperCase() + name[0].slice(1)
		this.name.i = name[1][0].toUpperCase() + name[1].slice(1)
		this.name.o = name[2][0].toUpperCase() + name[2].slice(1)

		let date = birthday.split(".");
		this.date = {};
		this.date.d = +date[0]
		this.date.m = +date[1]
		this.date.y = +date[2]

		this.numbers = numbers.split(", ")
		
		this.room = +room
	}
	static month = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
/**
 * 
 * @returns {string} строка формата ФИО
 */
	getFio() {
		return `${this.name.f} ${this.name.i} ${this.name.o} `
	}


/**
 * вывести др
 * @return {String} строка формата 24 июнь
 */

getBirthday() {
	return `${this.date.d} ${People.month[this.date.m-1]} ${this.date.y}`
}
/**
 * Вывести Фои.расширение
 * @param {String} extension типа jpg
 * @return {String} для названия изображения
 */
getImgSrc(extension) {
	return `${this.name.f}_${this.name.i}_${this.name.o}.${extension}`
}

/**
 * @param {Boolean} allNumbers если тру то все номера, если фолс то 1ый номер
 * @return {String} Строка формата: "8900000000"
 */

getNumberList(allNumbers) {
	if(this.numbers.length == 0 || this.numbers[0] == 0)
	return undefined
	if(allNumbers == true) {
		return this.numbers.join(", ")
	} else {
		return this.numbers[0];
	}
}

}
let people1 = new People("LeYla IKu S", "24.11.1994", "9984, 8842, 542", "542")
console.log(people1.getFio())
 
// let phone = number.split(", ")
// 		this.numbers = [];
// 		for(let i=0; i<phone.length; i++)  {
// 			this.numbers.push(phone[i])
// 		}
