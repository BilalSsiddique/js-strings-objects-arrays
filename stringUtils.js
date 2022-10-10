/* Todo: Implment the functions below and then export them
      using the module.exports syntax. 
      DO NOT CHANGE THE FUNCTION NAMES
*/

let palindromes = (string) => {
      
      if (typeof(string)!=='undefined' ){
        if (typeof string === "string") {
          var palindromes = [];
          var str = string.replace(/[^a-zA-Z0-9]/g, " ").toLowerCase();
          const spltorig = str.split(" ");
          const reverse = [...str].reverse().join("");

          const filte = reverse.split(" ");
          for (let i = 0; i < filte.length; i++) {
            for (let j = 0; j < filte.length; j++) {
              if (spltorig[i] === filte[j]) {
                if (spltorig[i].length > 1) {
                  palindromes.push(spltorig[i]);
                }
              }
            }
          }
          if (palindromes.length > 1) {
            const array = palindromes.filter(function (str) {
              return /\S/.test(str);
            });
            return array;
          } else {
            return [];
          }
        } else {
          return 'undefined';
        }
      }
      else{
            return 'undefined'
      }
            
       
}

// console.log(palindromes('wow! Did you see that racecar go?'))
// console.log(palindromes("Hi mom, At noon, I'm going to take my kayak to the lake"))
// console.log(
//   palindromes("Hello world")
// );

// console.log(palindromes());
// console.log(palindromes(" "))
// // console.log(palindromes([]))

// console.log(palindromes(1))
// console.log(palindromes(['hello','word']))


let replaceChar = (str=string) => {
      
      if (str!=="" && typeof(str)!=='number'){
            let strObj = new String(str);
            // console.log(typeof str);
            const a = "*";
            for (let i = 1; i < str.length; i += 2) {
            strObj = strObj.slice(0, i) + a + strObj.slice(i + 1);
            //   console.log(strObj);
            }
            // console.log(strObj);
            const b = "$";
            for (let i = 3; i < str.length; i += 4) {
            strObj = strObj.slice(0, i) + b + strObj.slice(i + 1);
            
            }
            return strObj
      }
      else{
            return "undefined"
      }
};
// console.log(replaceChar("Daddy"));
// console.log(replaceChar("Hello, How are you? I hope you are well"))
// console.log(replaceChar("Mommy"))
// console.log(replaceChar(""))
// console.log(replaceChar(123))


let charSwap = (string1, string2) => {
      
      if (string1 !=="" && string2!=="" && typeof(string1)!=='undefined' && typeof(string2)!=='undefined') {
            if (string1.length>=4 && string2.length>=4){

            const temp1 = string1.slice(0, 4);
            const temp2 = string2.slice(0, 4);
            const str1 = temp2 + string1.slice(4);
            const str2 = temp1 + string2.slice(4);
            return (str1+" " + str2)
      }
      else{
            return 'undefined'
      }
        // console.log(temp1,temp2)
      }
      else{
            return "undefined"
      }
};


// console.log(charSwap('Patrick','Hill'))
// console.log(charSwap("hello",'world'))
// console.log(charSwap())
// console.log(charSwap(""))
// console.log(charSwap("john"))
// console.log(charSwap('j','s'))


module.exports= {palindromes,replaceChar, charSwap}