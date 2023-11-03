

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
}

let convertedRates = amounts.map(getConvertedRates);
console.log(convertedRates);



  







// TOO HARD
// let abbrv = [
//     "as soon as possible",
//     "be right back",
//     "let me know",
//     "to be announce",
//     "laugh out loud"
// ]
// // ASAP
// // BRB
// // first char, capitilize, then combine

// //Declared Function
// function getAbbr(text){

// }