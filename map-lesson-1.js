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

// // **************************************************
// //ANOTHER PROBLEM // 
// // **************************************************

// // name + ayala
// //Declared Function
const lastName = "Ayala"

function addLastName(text){
 return text + " " + lastName;
}
let newName = family.map(addLastName);
console.log(newName)

//Arrow Function
let newName2 = family.map(text => {
    return text + ' ' + lastName;
})
console.log(newName2)

// // **************************************************
// //ANOTHER PROBLEM // 
// // **************************************************

// //name@gmail.com
// // name@gmail.com,name@gmail.com,name@gmail.com,name@gmail.com

//Declared Function
let domain = "@gmail.com"
function wDomain(text){
    return text + lastName + domain;
}
let emailAdd = family.map(wDomain).toString().toLowerCase();
console.log(emailAdd, 'here')

//Arrow Function
let wDomain2 = family.map(text => {
    return text + lastName + domain;
}).toString().toLowerCase();
console.log(wDomain2)

// // **************************************************
// //ANOTHER PROBLEM // 
// // **************************************************

// // replace chars with *** 
let passwords = [
    "iloveyou",
    "qwerty",
    "hellohello",
    "admin",
    "adminadmin",
]
// //Declared Function
function maskPassword(text){
    return '*'.repeat(text.length);
}

let maskedPasswords = passwords.map(maskPassword);
console.log(maskedPasswords)

// //Arrow Function
let maskedPass = passwords.map(text => {
    return '*'.repeat(text.length);
})
console.log(maskedPass)

// // **************************************************
// //ANOTHER PROBLEM // 
// // **************************************************

// // Mask everything * except last digit
let numbers = [
    "09161231234",
    "09109992233",
    "09194206969",
    "091842002420"
]

//Declared Function
function maskExceptLastDigit(text){
    let lastDigit = text.slice(-1);
    let maskedText = '*'.repeat(text.length - 1);
    return maskedText + lastDigit;
}
let maskedNum = numbers.map(maskExceptLastDigit);
console.log(maskedNum)

// //Arrow Function
let maskedNumbers = numbers.map(text => {
    let lastNum = text.slice(-4);
    let maskedAlphabet = '*'.repeat(text.length - 4);
    return maskedAlphabet + lastNum;
})
console.log(maskedNumbers)

// // **************************************************
// //ANOTHER PROBLEM // 
// // **************************************************

// // Exchange Rate
// // 1 USD = 50 PHP
// // Transform the data to object
// // {
// // Php: 50
// // USD :1
// // }
// // Print
// // ₱ 50.00
// // $ 1.00

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

//Arrow Function
let conversionRate = amounts.map(text => {
    const exchangeRateUSD2 = getExchangeRates().Php; // Accessing the USD exchange rate
    const equivalentInPhp2 = text / exchangeRateUSD2;
    return { 
        Php: `₱${text}`,
        USD: `$${equivalentInPhp2}`
    };
})
console.log(conversionRate)

// // **************************************************
// //ANOTHER PROBLEM // 
// // **************************************************

// // TOO HARD
// // ASAP
// // // BRB
// // // first char, capitilize, then combine

let abbrv = [
    "as soon as possible",
    "be right back",
    "let me know",
    "to be announce",
    "laugh out loud"
]
// //Declared Function
function getAbbr(text){
    let changeDataType = text.split(' ');
    let newDataAbbr = changeDataType.map(char => char[0]);
    let toMixThemIn = newDataAbbr.join("").toUpperCase();
    return toMixThemIn
}
let t = getAbbr(abbrv[0]);
console.log(t) //for single array
let finalArr = abbrv.map(getAbbr);
console.log(finalArr) //for the whole array

// //Arrow Function
let initials = abbrv.map(text => {
    let convertDataType = text.split(' ');
    return convertDataType.map(char => char[0]).join("").toUpperCase();
})
console.log(initials)

// // **************************************************
// //ANOTHER PROBLEM // 
// // **************************************************

// // 1st task
// // 0916-123-1234
// //Declared Function
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
    let finalArr = first + ("-") + mid + ("-") + end;
    return finalArr;
}
let s = splitMobileNum(mobileNum[0])
console.log(s) // for the single array
let newSetofArray = mobileNum.map(splitMobileNum);
console.log(newSetofArray) // for the whole set

// //Arrow Function
let newSetofArr = mobileNum.map(text => {
    let setTwoOfArr = text.split('');
    let firstArr = setTwoOfArr.slice(0,4).join("")
    let midArr  = setTwoOfArr.slice(4,7).join("")
    let endArr = setTwoOfArr.slice(-4).join("")
    let finalSetOfArr = firstArr + ("-") + midArr + ("-") + endArr;
    return finalSetOfArr;
})
console.log(newSetofArr)


// // 2nd task
// // +63916-123-1234
//Declared Function
function replaceChar(text){
   return firstChar = text.replace("0", "+63");
}

let test = replaceChar(mobileNum[0]);
console.log(test)
let test2 = mobileNum.map(replaceChar);
console.log(test2)
let ansToTasks = newSetofArray.map(replaceChar);
console.log(ansToTasks);

let toReplaceChar = mobileNum.map(text => {
    return firstChar = text.replace("0", "+63");
})
console.log(toReplaceChar, 'arrow')

// // **************************************************
// //ANOTHER PROBLEM // 
// // **************************************************
const normalWords = [
    "Hello World",
    "Love Maria",
    "Ubuntu Linux Another Word Place Holder",
    "Fedora Linux Other Word",
    "So much Word There Blah blAh blah"
]
// // camelCase
// // snake_case
// // kebab-case 
// // print like this 
// // camelCase: helloWorld
// // snake_case: hello_world
// // kebab-case: hello-world

// Declared Function

function toCamelCase(text) {
     return text.replace(/\s(.)/g, function(match, group1) {
        return group1.toUpperCase();
    }); 
} //to get the white spaces
let cCaseHere = toCamelCase(normalWords[0]);
console.log(cCaseHere)

let cCaseText = normalWords.map(text => toCamelCase(text));
console.log(cCaseText, "first char capitalized")
//first char to capitalized
let finalLastLast = cCaseText.map(word =>{
    let lowerChar = word[0].toLowerCase();
    return  lowerChar + word.slice(1);
}); // combined code from above
console.log(finalLastLast, "working as expected")


// //Declared Function snake_case
function toSnakeCase(text){
    return text.toLowerCase().replace(/ /g, "_");
}
let snakeCaseText = toSnakeCase(normalWords[0]);
console.log(snakeCaseText, 'declared_snakeCase')

// //Arrow Function snake-case
let arrowSnake = normalWords.map(text => {
    return text.toLowerCase().replace(/ /g, "_");
})
console.log(arrowSnake, 'arrow_snake')

// //Declared Function kebab-case
function toKebabCase(text){
 return text.toLowerCase().replace(/ /g, "-");
}
let kebabCaseText = toKebabCase(normalWords[0]);
console.log(kebabCaseText, "kebab-case")

// //Arrow Function kebab-case
let arrowKebabCase = normalWords.map(text => {
    return text.toLowerCase().replace(/ /g, "-");
})
console.log(arrowKebabCase, 'arrow-kebab-case')


// // **************************************************
// //ANOTHER PROBLEM // 
// // **************************************************

// //   Create a function that will turn the name to classified data 
// //   - get mr or mrs/ms to determine gender
// //   - then transform data to object 
 
// //   name: Andrew
// //   gender: male
// //   prefix: mr
  
// //   name: Kirstine
// //   gender: female
// //   prefix: ms
  
// //   name: Maria Ozawa
// //   gender: female
// //   prefix: mrs

const names = [
    "Mr Andrew",
    "Ms Kirstine",
    "Mr Yoso",
    "Ms Taken",
    "Mrs Maria Ozawa",
    "Mr Some one bullshit"
  ]

//   //Declated Function
function fullsetData(text){
    let separateWord = text.split(" ");
    let prefixOnly = separateWord.shift();
    let fullName = separateWord.join(" ");
    let gender 
    if (text.includes('Mr')){
        gender = 'male'
    } else {
        gender = 'female'
    }

    return {name: fullName,
    gender: gender,
    prefix: prefixOnly}

}
let wholeDataObj = names.map(fullsetData);
console.log(wholeDataObj, 'declared-function')

//Arrow Function
let anotherVariable = names.map(text => {
    let separateWord = text.split(" ");
    let prefixOnly = separateWord.shift();
    let fullName = separateWord.join(" ");
    let gender 
    if (text.includes('Mr')){
        gender = 'male'
    } else {
        gender = 'female'
    }

    return {name: fullName,
    gender: gender,
    prefix: prefixOnly}
})
console.log(anotherVariable, 'arrow-function')


// // **************************************************
// //ANOTHER PROBLEM // 
// // **************************************************

const professions = [
    "Dr Greg House",
    "Prof. Albert Einstein",
    "Pres. Barack Obama",
    "Prof. Rick Sanchez",
    "Pres. Bullshit Labrador",
]

// // Dr => Doctor
// // Prof => Professor
// // Pres => President


// // Output should be

// {
//     first_name: Greg,
//     last_name:  House,
//     work: Doctor
//     total_characters: 9 // count only name characters don't include prefix
// }


// //Declared Function with same variables/names

function toGetProfession(text){
    let completeNames = text.split(" ");
    let firstName = completeNames[1];
    let lastName = completeNames[2];
    let totalChar = firstName.concat(lastName).length;
    let work
        if (text.includes('Prof.')) {
            work =  "Professor"
         } else if (text.includes('Pres.')) {
            work = "President"
         } else if (text.includes('Dr')) {
            work = "Doctor"
         };


    return {
        name: firstName,
        last_name: lastName,
        work: work,
        totalChar: totalChar
        };
}
let declaredF = toGetProfession(professions[0]);
console.log(declaredF, 'declared function')

let mappedName = professions.map(toGetProfession);
console.log(mappedName, 'with map--declared')
// //Arrow Function with same variables/names

let varSample = professions.map(text => {
    let completeNames = text.split(" ");
    let firstName = completeNames[1];
    let lastName = completeNames[2];
    let totalChar = firstName.concat(lastName).length;
    let work
        if (text.includes('Prof.')) {
            work =  "Professor"
         } else if (text.includes('Pres.')) {
            work = "President"
         } else if (text.includes('Dr')) {
            work = "Doctor"
         };


         return {
             name: firstName,
             last_name: lastName,
             work: work,
             totalChar: totalChar
             };
})

console.log(varSample, 'arrow-function')