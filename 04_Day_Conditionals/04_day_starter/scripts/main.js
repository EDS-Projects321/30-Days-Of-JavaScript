// this is your main.js script


//DAY 4
//LEVEL ONE
//1
/*
let age = prompt("Please enter your age", "Enter here")

if(age >= 18){

    console.log("You are old enough to drive")
}else{

    console.log("You have " + (18 - age) + " years until you can drive!")
}
*/
//2

//3
let a = 3
let b = 4

if(a > b){
    console.log("a is greater than b")
}else{
    console.log("a is less than b")
}

let comparison = (a > b)
? console.log("a is greater than b")
: console.log("a is less than b")

//4
let number = prompt("Please enter a whole number")

if(Number.isInteger(number/2)){
    console.log(number + " is an even number")
}else{
    console.log(number + " is an odd number")
}