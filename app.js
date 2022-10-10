/* TODO: Import the functions from your three modules here and write two test cases for each function.. You should have a total of 18 test cases. 
do not forget that you need to create the package.json and add the start command to run app.js as the starting script*/
const {arrayStats,makeObjects,commonElements}= require('./arrayUtils.js')
const {deepEquality,commonKeysValues,calculateObject}     = require('./objectUtils.js')
const {palindromes,replaceChar,charSwap} = require('./stringUtils.js')



// console.log(arrayStats([9, 15, 25.5, -5, 5, 7, 10, 5, 11, 30, 4, 1, -20]))
// console.log(arrayStats([7, 9, 11, 15, 19, 20, 35, 0]))
// console.log(arrayStats([11, 54, 79, 5, -25, 54, 19, 11, 56, 100]));

// console.log(arrayStats([]) )// throws an error 
// console.log(arrayStats("banana")); // throws an error
// console.log(arrayStats(["guitar", 1, 3, "apple"])); // throws an error 
// console.log(arrayStats());

// makeObjects([4, 1], [1, 2]); // returns {'4':1, '1': 2}
// makeObjects(["foo", "bar"], [5, "John"]); // returns {foo:'bar', '5': "John"}
// makeObjects (["foo", "bar"], ["name", "Patrick Hill"], ["foo", "not bar"]) //returns {foo: "not bar", name: "Patrick Hill"}
// makeObjects([true, undefined], [null, null]); // returns {true: undefined, null : null}
// makeObjects([undefined, true], ["date", "9/11/2022"]); // returns {undefined: true, date : "9/11/2022"}
// makeObjects([4, 1, 2], [1,2]); // throws error
// makeObjects([]) // throws an error
// makeObjects("banana"); // throws an error
// makeObjects(1,2,3); // throws an error
// makeObjects(["guitar", 1, 3, "apple"]); // throws an error
// makeObjects(); // throws an error
// makeObjects([1],[1,2]); // throws an error


// common Elements

const arr1 = [5, 7]; 
const arr2 = [20, 5]; 
const arr3 = [true, 5, 'Patrick']; 
const arr4 = ["CS-546", 'Patrick']; 
const arr5 = [67.7, 'Patrick', true]; 
const arr6 = [true, 5, 'Patrick']; 
const arr7 = [undefined, 5, 'Patrick']; 
const arr8 = [null, undefined, true];
const arr9 = ["2D case", ["foo", "bar"], "bye bye"]
const arr10= [["foo", "bar"], true, "String", 10]

// commonElements(arr1, arr2); // Returns [5]
// commonElements(arr3,arr4,arr5); // returns ['Patrick']
// commonElements(arr5,arr6); // returns ['Patrick', true]
// commonElements(arr9,arr6); // returns []
// commonElements(arr7,arr8); // returns [undefined]
// commonElements(arr3, arr4, arr5, arr7); // returns ['Patrick']
// commonElements(arr9, arr10); // returns [["foo", "bar"]]
// commonElements(); // throws error
// commonElements("test"); // throws error
// commonElements([1,2,"nope"]); // throws error



// Plaindromes
// console.log(palindromes("Hi mom, At noon, I'm going to take my kayak to the lake"))// Returns: ["mom", "noon", "kayak"]
// console.log(palindromes('Wow! Did you see that racecar go?')); // Returns: ["Wow", "Did", "racecar"]
// console.log(palindromes('Hello World')); // Returns: []
// console.log(palindromes()); // throws error
// console.log(palindromes("    ")); //  throws error
// console.log(palindromes(1));  //throws error
// console.log(palindromes(["hello there"])); //throws error


// replacechar

// console.log(replaceChar("Daddy"));
// console.log(replaceChar("Mommy"));
// console.log(replaceChar("Hello, How are you? I hope you are well"))
// console.log(replaceChar(""))
// console.log(replaceChar(123))


// characterswap

// console.log(charSwap('Patrick','Hill'))
// console.log(charSwap("hello",'world'))
// console.log(charSwap("Patrick", ""))
// console.log(charSwap())
// console.log(charSwap("john"));
// console.log(charSwap("h",'hello'))
// console.log(charSwap('h','e'))


// deepequality

// const first = {a: 2, b: 3};
// const second = {a: 2, b: 4};
// const third = {a: 2, b: 3};
// const forth = {a: {sA: "Hello", sB: "There", sC: "Class"}, b: 7, c: true, d: "Test"}
// const fifth  = {c: true, b: 7, d: "Test", a: {sB: "There", sC: "Class", sA: "Hello"}}
// console.log(deepEquality(first, second)); // false
// console.log(deepEquality(forth, fifth)); // true
// console.log(deepEquality(forth, third)); // false
// console.log(deepEquality({}, {})); // true
// console.log(deepEquality([1,2,3], [1,2,3])); // throws error 
// console.log(deepEquality("foo", "bar")); // throws error


// common keyvalues

const first = { name: { first: "Patrick", last: "Hill" }, age: 46 };
const second = { school: "Stevens", name: { first: "Patrick", last: "Hill" } }; 
const third = {a: 2, b: {c: true, d: false}};
const forth = {b: {c: true, d: false}, foo: "bar"};

// console.log(commonKeysValues(first, second)); // returns  {name: {first: "Patrick", last: "Hill"}, first: "Patrick", last: "Hill"} 
// console.log(commonKeysValues(third, forth)); // returns {b: {c: true, d: false}, c: true, d: false }
// console.log(commonKeysValues({}, {})); // {}
// console.log(commonKeysValues({a: 1}, {b: 2})); // {}
// console.log(commonKeysValues([1,2,3], [1,2,3])); // throws error 
// console.log(commonKeysValues("foo", "bar")); // throws error


// caculate object
console.log(calculateObject({ a: 3, b: 7, c: 5 }, n => n * 2));/* Returns:{a: 2.45,b: 3.74,c: 3.16}*/

  

