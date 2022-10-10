/* Todo: Implment the functions below and then export them
      using the module.exports syntax. 
      DO NOT CHANGE THE FUNCTION NAMES
*/

let deepEquality = (x=obj1, y=obj2) => {
  if (typeof(x)==='string' && typeof(y)==='string'){
      return 'undefined'
  }
  if (Array.isArray(x)===true && Array.isArray(y)===true){
      return 'undefined'
  }   

  if (x === null || x === undefined || y === null || y === undefined) {
    return x === y;
  }
  

 

  if (x === y || x.valueOf() === y.valueOf()) {
    return true;
  }
  if (Array.isArray(x) && x.length !== y.length) {
    return false;
  }


  // if they are strictly equal, they both need to be object at least
  if (!(x instanceof Object)) {
    return false;
  }
  if (!(y instanceof Object)) {
    return false;
  }

  // recursive object equality check
  var p = Object.keys(x);
  return (
    Object.keys(y).every(function (i) {
      return p.indexOf(i) !== -1;
    }) &&
    p.every(function (i) {
      return deepEquality(x[i], y[i]);
    })
  );
}
      

       


// console.log(deepEquality({a:2,b:3},{a:2,b:4}))
const fourth = {
  a: { sA: "Hello", sB: "There", sc: "Class" },
  b: 7,
  c: true,
  d: "Test",
};
const fifth = {
  c: true,
  b: 7,
  d: "Test",
  a: { sB: "There", sc: "Class", sA: "Hello" },
};
// console.log(deepEquality(fourth, fifth));
// console.log(deepEquality({},{}))
// console.log(deepEquality([1,2,3],[1,2,3]))
// console.log(deepEquality('foo',"bar"))






let commonKeysValues = (obj1, obj2) => {
        if (Array.isArray(obj1)===false && typeof(obj2)!== 'string'){
          var result = {};
          for (var key in obj1) {
            if (obj1[key] && obj1[key] === obj2[key]) result[key] = obj1[key];
            else if (typeof obj1[key] === "object" && obj1[key] !== null) {
              result[key] = commonKeysValues(obj1[key], obj2[key]);
            }
          }

          return result;
        }
      }
      
      
      
      

const first= {name:{first:'Patrick',last:'Hill'},age:46}
const second = { school: "Stevens", name: { first: "Patrick", last: "Hill" } }; 
// console.log(commonKeysValues(first,second))     
// console.log(commonKeysValues(obj1, obj2));




  const calculateObject = (obj, func) => {
     const checkType = Object.values(obj).every((item)=> typeof(item)==='number')
      if (checkType){
        if (typeof obj === "object" && typeof func === "function") {
          const result = {};

          for (const key in obj) {
            result[key] = func(obj[key]);
          }
          return result;
        } else {
          return "undefined";
        }
      }
  }

    

  const squareRoot = (num) => {
    const sq = num * 2;
    return Math.sqrt(sq).toFixed(2);
  };

  
//   console.log(calculateObject({ a: 3, b: 7, c: 5 }, squareRoot));


module.exports = {deepEquality,commonKeysValues, calculateObject}




