let family = [
    'andrew',
    'kers',
    'freya',
    'archer',
    'rick'
]
//Declared Function
function capitalized(text){
    return text.toUpperCase();
}
let allCaps = family.map(capitalized)
console.log(allCaps)
// capitalized(family);
//Arrow Function
let allCaps2 = family.map(text => {
    return text.toUpperCase();
});
console.log(allCaps2)
// **************************************************
// name + ayala
//Declared Function
const lastName = "Ayala"
function addLastName(text){
 return text + " "+ lastName;
}
let newName = family.map(addLastName);
console.log(newName)

//Arrow Function
let newName2 = family.map(text => {
    return text + ' ' + lastName;
})
console.log(newName2)
// **************************************************
//name@gmail.com
// name@gmail.com,name@gmail.com,name@gmail.com,name@gmail.com
//Declared Function
let domain = "@gmail.com"
function wDomain(text){
    return text + lastName + domain;
}
let emailAdd = family.map(wDomain).toString();
console.log(emailAdd)

//Arrow Function
let wDomain2 = family.map(text => {
    return text + lastName + domain;
}).toString();
console.log(wDomain2)
// **************************************************
// replace chars with *** 
let passwords = [
    "iloveyou",
    "qwerty",
    "hellohello",
    "admin",
    "adminadmin",
]
//Declared Function
function maskPassword(text){
    return '*'.repeat(text.length);
}
let maskedPasswords = passwords.map(maskPassword);
console.log(maskedPasswords)
//Arrow Function
let maskedPass = passwords.map(text => {
    return '*'.repeat(text.length);
})
console.log(maskedPass)
// **************************************************
// Mask everything * except last digit
let numbers = [
    "09161231234",
    "09109992233",
    "09194206969",
    "091842002420"
]
function maskExceptLastDigit(text){
    let lastDigit = text.slice(-1);
    let maskedText = '*'.repeat(text.length - 1);
    return maskedText + lastDigit;
}
let maskedNum = numbers.map(maskExceptLastDigit);
console.log(maskedNum)
//Arrow Function
let maskedNumbers = numbers.map(text => {
    let lastNum = text.slice(-4);
    let maskedAlphabet = '*'.repeat(text.length - 4);
    return maskedAlphabet + lastNum;
})
console.log(maskedNumbers)
// **************************************************
// Exchange Rate
// 1 USD = 50 PHP
// Transform the data to object
// {
// Php: 50
// USD :1
// }
// Print
// ₱ 50.00
// $ 1.00
let amounts = [
    50.00,
    1000.00,
    420.00,
    6969.00,
    10000.00
  ];
  //Declared Function
  function getExchangeRates() {
    return {
      Php: 50,
      USD: 1
    };
  }
  const exchangeRates = getExchangeRates();
  console.log(exchangeRates);

  function getConvertedRates(amount) {
    const exchangeRateUSD = getExchangeRates().Php; // Accessing the USD exchange rate
    const equivalentInPhp = amount / exchangeRateUSD;
    return { 
        Php: `₱${amount}`,
        USD: `$${equivalentInPhp}`
    };
};
let convertedRates = amounts.map(getConvertedRates);
console.log(convertedRates);
// **************************************************
// TOO HARD
// ASAP
// // BRB
// // first char, capitilize, then combine
let abbrv = [
    "as soon as possible",
    "be right back",
    "let me know",
    "to be announce",
    "laugh out loud"
]
//Declared Function
function getAbbr(text){
    let changeDataType = text.split(' ');
    return changeDataType.map(char => char[0]).join("").toUpperCase();
}
let t = getAbbr(abbrv[0]);
console.log(t) //for single array
let finalArr = abbrv.map(getAbbr);
console.log(finalArr) //for the whole array

//Arrow Function
let initials = abbrv.map(text => {
    let convertDataType = text.split(' ');
    return convertDataType.map(char => char[0]).join("").toUpperCase();
})
console.log(initials)
// **************************************************
// 1st task
// 0916-123-1234
//Declared Function
let mobileNum = [
    "09161231234",
    "09109992233",
    "09194206969",
    "09142002420"
]
function splitMobileNum(text){
    let newArrNum = text.split('');
    let first = newArrNum.slice(0,4).join("")
    let mid  = newArrNum.slice(4,7).join("")
    let end = newArrNum.slice(-4).join("")
    // let firstArr = first.join("");
    // let midArr = mid.join("");
    // let endArr = end.join("");
    let finalArr = first + ("-") + mid + ("-") + end;
    return finalArr;
}
let s = splitMobileNum(mobileNum[0])
console.log(s) // for the single array
let newSetofArray = mobileNum.map(splitMobileNum);
console.log(newSetofArray) // for the whole set
//Arrow Function
let newSetofArr = mobileNum.map(text => {
    let setTwoOfArr = text.split('');
    let firstArr = setTwoOfArr.slice(0,4).join("")
    let midArr  = setTwoOfArr.slice(4,7).join("")
    let endArr = setTwoOfArr.slice(-4).join("")
    // let firstArr = first.join("");
    // let midArr = mid.join("");
    // let endArr = end.join("");
    let finalSetOfArr = firstArr + ("-") + midArr + ("-") + endArr;
    return finalSetOfArr;
})
console.log(newSetofArr)
// 2nd task
// +63916-123-1234

function replaceChar(text){
   return firstChar = text.replace("0", "+63");
}
let test = replaceChar(mobileNum[0]);
console.log(test)
let test2 = mobileNum.map(replaceChar);
console.log(test2)
let ansToTasks = newSetofArray.map(replaceChar).toString();
console.log(ansToTasks);
// **************************************************
const normalWords = [
    "Hello World",
    "Love Maria",
    "Ubuntu Linux Another Word Place Holder",
    "Fedora Linux Other Word",
    "So much Word There Blah blAh blah"
]
// camelCase
// snake_case
// kebab-case 
// print like this 
// camelCase: helloWorld
// snake_case: hello_world
// kebab-case: hello-world

//Declared Function camelCase
function cCase(text){
    return text.replace(/\s(.)/g, function(match, group1) {
        return group1.toUpperCase();
    });
}
let cCaseText = normalWords.map(text => cCase(text));
console.log(cCaseText, "first char capitalized")

function camelCaseText(text){
   return newWord = text.toLowerCase();
}

//Arrow Function camelCase
let finalLastLast = cCaseText.map(word =>{
    let lowerChar = word[0].toLowerCase();
    return  lowerChar + word.slice(1);
});
console.log(finalLastLast, "working as expected")

//Declared Function snake_case
function toSnakeCase(text){
    // return letters = text.toLowerCase().replace(/\s/g, '_'); REGEX
    return letters = text.toLowerCase().replace(/ /g, "_");
}
let snakeCaseText = toSnakeCase(normalWords[0]);
console.log(snakeCaseText)
let allSnakeCaseText = normalWords.map(toSnakeCase);
console.log(allSnakeCaseText, "snekk case")

//Arrow Function snake-case
let snekkkCase = normalWords.map(text => {
    return snekkLetters = text.toLowerCase().replace(/ /g, "_");
})
console.log(snekkkCase, 'all snekk arrow')

//Declared Function kebab-case
function toKebabCase(text){
 return kebabStick = text.toLowerCase().replace(/ /g, "-");
}
let kebabCaseText = toKebabCase(normalWords[0]);
console.log(kebabCaseText, "keboob")
let allKebabText = normalWords.map(toKebabCase);
console.log(allKebabText, "all kebooob")

//Arrow Function kebab-case
let kibob = normalWords.map(text => {
    return kibobbStick = text.toLowerCase().replace(/ /g, "-");
})
console.log(kibob, "arrow kebab case")
// **************************************************
