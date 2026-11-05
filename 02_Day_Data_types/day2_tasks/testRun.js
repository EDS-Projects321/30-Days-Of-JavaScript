console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')


//1
let challenge = '30 Days Of JavaScript'
//2
console.log(challenge)
//3
console.log(challenge.length)
//4
let challengeUpperCase = challenge.toUpperCase()
console.log(challengeUpperCase)
//5
let challengeLowerCase = challenge.toLowerCase()
console.log(challengeLowerCase)
//6
let part = challenge.substring(0, 2)
console.log(part)
//7
let part2 = challenge.substring(3,21)
console.log(part2)
//8
console.log(challenge.includes("Script"))
//9
const challengeArray = challenge.split("")
console.log(challengeArray)
//10
const challengeArray2 = challenge.split(" ")
console.log(challengeArray2)
//11
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companiesArray = companies.split(",")
console.log(companiesArray)
//12
let replaceChallenge = challenge.replace('JavaScript', 'Python')
console.log(replaceChallenge)
//13
let char = challenge.charAt(15)
console.log(char)
//14
let charCodeAt = challenge.charCodeAt(12)
console.log(charCodeAt)

//LEVEL TWO EXERCISE
//1
let quote = 'There is no exercise better for the heart than reaching down and lifting people up.'
let help = 'help'

let fullSentence = `The quote '${quote}' by John Holmes teaches us to ${help} one another.`
let fullSentence2 = 'The quote ' + quote + ' by John Holmes teaches us to ' + help + ' one another.'
console.log(fullSentence)
console.log(fullSentence2)

//2
let TeresaQuote = `"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`
console.log(TeresaQuote)

//3
console.log(typeof 10)

//4
floatCheck = parseFloat('9.8')
console.log(floatCheck)

wholeConvert = Math.round(floatCheck)
console.log(wholeConvert)

//LEVEL THREE EXERCISE
//2
let sentence = "You cannot end a sentence with because because because is a conjunction"
const wordCounter = sentence.matchAll("because")
console.log(Array.from(wordCounter).length)

//3
const sentence2 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
const cleanedSentence = sentence2.replaceAll(/[@#$%&;]/g, "")
console.log(cleanedSentence)
const arrayCounter = cleanedSentence.split(/[" ""?""!"]/)
console.log(arrayCounter)
//have cleaned sentence and stored each word in array without any punctuation clutter
//still need to count which word is most common