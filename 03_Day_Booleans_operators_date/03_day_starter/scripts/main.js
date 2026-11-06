// this is your main.js script

//LEVEL ONE
//1
const firstName = 'Michael'
const lastName = 'Jackson'
const country = 'USA'
const city = 'Chicago'
const age = 32
const isMarried = true

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)

//2
let textCheck = typeof '10'

let statement = (textCheck === 10) 
? console.log('typeof "10" is equal to 10')
: console.log('typeof "10" is not equal to 10')

//3
let textCheck2 = parseInt('9.8')
let statement2 = (textCheck2 === 10) 
? console.log('parseInt "9.8" is equal to 10')
: console.log('parseInt "9.8" is not equal to 10')
console.log(textCheck2)

//4i writing 3 truthy statements
console.log(3 < 4)
console.log()

//5
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')

let python = 'python'
let jargon = 'jargon'

console.log(python.length != jargon.length)

//6
console.log(4 > 3 || 10 > 12)
console.log(!(false))

let dragon = 'dragon'

console.log(!dragon.includes("on") && !python.includes("on"))

//7
const today = new Date()
console.log(today)
//i
console.log(today.getFullYear())
//ii
console.log(today.getMonth() + 1)
//iii
console.log(today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear())
//iv
console.log(today.getDate())
//v
console.log(today.getHours())
//vi
console.log(today.getMinutes())
//vii
console.log(today.getTime())


//LEVEL TWO
/*
let base = prompt('Enter the base length of your triangle')
let height = prompt('Enter the height of your triangle')

let area = 0.5 * base * height
console.log(area)

alert("The area is " + area)
*/

//LEVEL THREE
//Use Date time object to create date in format YYYY-MM-DD Hour:Minutes  (time must be double digit i.e 5 = 05)


const day = new Date()

let hour = day.getHours()
let mins = day.getMinutes()
let days = day.getDay()

let hourWhole = (day.getHours() < 10)
? "0" + hour
: hour

let minsWhole = (day.getMinutes() < 10)
? "0" + mins
: mins

let daysWhole = (day.getDay() < 10)
? "0" + days
: days

console.log(day.getFullYear() + "-" + (day.getMonth() + 1) + "-" + daysWhole + " " + hourWhole + ":" + minsWhole)

