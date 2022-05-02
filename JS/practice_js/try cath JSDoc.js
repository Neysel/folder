// let a = Date.now(+new Date())
// for(let i=0; i<1000; i++) {
//     console.log(0)
// }

// let b = Date.now(+new Date())
// console.log(b-a)
// console.log(Date.parse("2015-05-25T10:52:15.925")) 

// let a = new Date (2015,11,31,12,30,0)
// console.log(a.toString())
// let options1 = {
    
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//     weekday: "long",
//     timezone: "UTC",
//     hour: "numeric",
//     minute: "numeric",
//     second: "numeric",
// }
// console.log(a.toLocaleString("ru-RU", options1))

// /**
//  * ф-ция преобразует стркоу со временем в минуты
//  * @param {string} time время в виде сторки, может быть только в видео 00:00
//  * @return {number} целое число в минутах, time = "02:08" - вернет 125
//  */
// function timeToMinute(time) {
//     try {
//     let hour = +time.split(":")[0]
//     let minute = +time.split(":")[1]
//     if( !(hour>=0 && hour<=23) || !(minute>=0 && minute<=59)) 
//     {
//         throw new RangeError ("Аргумент должен быть в формате 'hh:mm'")
//     }
//     return hour*60+minute
//     } catch(error) {
//         console.log(error)
//  }
// }
// console.log(timeToMinute("02:08"))



//Месеца
const month = ["", "января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
//Месяца в именительном падеже
const monthIp = ["", "январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];
//Форматирование времени
const options = { hour: 'numeric', minute: 'numeric' };


/**
 * Проверка на число
 * @param {number} n любое число или строка
 * @return {boolean} возвращает true если аргумент является числом, в противном случае false
 */
 function isNumber(n) {
	return !isNaN(parseFloat(n)) && !isNaN(n - 0)
}

/**
* Функция преобразует минуты в строку с временем.
* @param {number} min время в виде целого числа, например 62. Может быть отрицательным числом.
* @return {string} время в виде строки. Например min=62 вернет "01:02",
* min=-5 вернет "23:55", min=1439 вернет "23:59", min=1440 вернет "00:00", min=2882 вернет "00:02".
*/
function minuteToTime(min) {
	try {
		let h, m, s
		//Ошибка типа аргумента
        if (!isNumber(min)) {
			throw new TypeError("Аргумент функции должен быть числом")
		}
		if (min < 0 || min > 1450) {
			let newMinute = min
			//-60 станет 1380 (-1 час = 23 часа)
			if (min < 0) {
				newMinute = min + (Math.trunc(Math.abs(min) / 1440) + 1) * 1440
			}
			let tmpHour = Math.trunc(newMinute / 60)
			let tmpMinute = newMinute % 60
			h = tmpHour % 24 + ""
			m = Math.trunc(tmpMinute % 60) + ""
		//	s = Math.trunc((tmpMinute % 60 - Math.trunc(tmpMinute % 60)) * 60) + ""
		} else {
			h = Math.trunc(min / 60) + ""
			m = Math.trunc(min % 60) + ""
			// s = Math.trunc(min % 60) + ""
		}
		if (h.length === 1) h = "0" + h
		if (m.length === 1) m = "0" + m
		//if (s.length === 1) s = "0" + s
		return h + ":" + m// + ":" + s
	} catch (e) {
		//Если ошибка была, то выводим в консоль сообщение
		console.log(e)
	}
}
/**
 * Возвращает правильное склонение для указанного числа если задать вопрос: какое количество секунд, минут, часов, дней, недель, месяцев или лет?
 * @param {number} num целое число
 * @param {string} type тип возвращаемого значения (s-секунды, min-минуты, h-часы, d-дни, w-недели, m-месеца, y-годы)
 * @return {string} вернет строку: num + правильное склонение слова "секунда", "минута", "час", "день", "неделя", "месяц" или "год", в зависимости от параметра type (например: 1 день, 254 года, 2114 недель)
 */
 function decOfNum(num, type) {
	//Все варианты склонений для каждого из слов
	let text = [
		["секунда", "секунды", "секунд"],
		["минута", "минуты", "минут"],
		["час", "часа", "часов"],
		["день", "дня", "дней"],
		["неделя", "недели", "недель"],
		["месяц", "месяца", "месяцев"],
		["год", "года", "лет"],
	]
	//Число от 0 до 6 для параметров s, min, h, d, w, m, y соответственно
	let tmpType
	//Проверка на правильность аргументов
	try {
		//Если первый аргумент не явялется целым числом
		if(!Number.isInteger(+num)) throw new TypeError("Первый аргумент должен быть целым числом");
		switch(type) {
			case "s": tmpType=0; break
			case "min": tmpType=1; break
			case "h": tmpType=2; break
			case "d": tmpType=3; break
			case "w": tmpType=4; break
			case "m": tmpType=5; break
			case "y": tmpType=6; break
			//Если второй аргумент не соответствует не одному из доступных, то ошибка
			default: throw new TypeError("Второй аргумент должен быть строкой: s, min, h, d, w, m или y");
		}
	} catch(e) {
		//Вывести ошибку в консоль, если была и выйти из функции
		console.log(e)
		return
	}
	//Преобразовать целую часть числа num в строку (дробная часть отбрасывается)
	num=num+""
	//Для чисел 5, 6, 7, 8, 9 или 0 
	//Для чисел состоящих из более двух цифр и оканчивающихся на цифру 5, 6, 7, 8, 9 или 0 (например: 55 дней, 38 дней, 47 дней)
	//Для чисел состоящих из более двух цифр, у которых предпоследняя цифра равна 1 (например: 11 лет, 116 часов, 214 дней)
	if(
		(num.length>=2 && num[num.length-1]==5) || 
		(num.length>=2 && num[num.length-1]==6) || 
		(num.length>=2 && num[num.length-1]==7) || 
		(num.length>=2 && num[num.length-1]==8) || 
		(num.length>=2 && num[num.length-1]==9) || 
		(num.length>=2 && num[num.length-1]==0) ||
		(num.length>=2 && num[num.length-2]==1) || 
		num==5 || num==6 || num==7 || num==8 || num==9 || num==0
	)
		return num+" "+text[tmpType][2]
	//Для чисел 2, 3 или 4
	//Для чисел состоящих из более двух цифр, у которых предпоследняя цифра не равна 1, а последняя цифра равна 2, 3 или 4 (например: 22 минуты, 234 часа, 6423 месяца)
	if(
		(num.length>=2 && num[num.length-1]==2 && num[num.length-2]!==1) || 
		(num.length>=2 && num[num.length-1]==3 && num[num.length-2]!==1) || 
		(num.length>=2 && num[num.length-1]==4 && num[num.length-2]!==1) ||
		num==2 || num==3 || num==4
	)
		return num+" "+text[tmpType][1]
	//Для числа 1
	//Для чисел состоящих из более двух цифр, у которых предпоследняя цифра не равна 1, а последняя цифра равна 1 (например: 21 год, 631 день, 48251 секунда)
	if(
		(num.length>=2 && num[num.length-1]==1 && num[num.length-2]!==1) || 
		num==1
	)
		return num+" "+text[tmpType][0]
}

console.log(decOfNum(25, "h"))

