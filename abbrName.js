function abbrevName(name){
    console.log(name);
    
    //   1st step split string into array
    let splitted = name.split(" ")
    //   convert string to array data
    console.log(splitted)
    
    
    //   2nd step get 1st character
    let initials = []
    for (let s in splitted){
      console.log(s)
      let firstCharacter = splitted[s][0] 
      initials.push( firstCharacter )
    } 
    console.log(initials)
  
    //   3rd step join 1st character with period
    const finalData = initials.join(".")
    console.log(finalData)
    
    return finalData;
  }



//   Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(abbrevName("Sam Harris"), "S.H");
//     assert.strictEqual(abbrevName("Patrick Feenan"), "P.F");
//     assert.strictEqual(abbrevName("Evan Cole"), "E.C");
//     assert.strictEqual(abbrevName("P Favuzzi"), "P.F");
//     assert.strictEqual(abbrevName("David Mendieta"), "D.M");
//   });
// });
