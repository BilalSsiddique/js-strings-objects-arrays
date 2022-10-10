/* Todo: Implment the functions below and then export them
      using the module.exports syntax. 
      DO NOT CHANGE THE FUNCTION NAMES
*/

 let arrayStats = (array) => {
  
    if (typeof array === "object" && array.length > 1) {
      const checkType = array.every((item) => typeof item === "number");
      if (checkType === true) {
        const { length } = array;
        const sort = array.sort((a, b) => a - b);
        const sum = sort.reduce((prev, curr) => prev + curr);
        // mean
        const mean = sum / length;
        // median
        const mediann = () => {
          if (length % 2 === 0) {
            return (sort[length / 2 - 1] + sort[length / 2]) / 2;
          }
          return sort[(length - 1) / 2];
        };
        // mode
        const modee = (data = sort) => {
          var counts = {};
          var max = 0;
          var modes = [];
          for (let i = 0; i < data.length; i++) {
            counts[data[i]] = (counts[data[i]] || 0) + 1;
          }
          for (var key in counts) {
            if (counts.hasOwnProperty(key)) {
              if (counts[key] > max) {
                max = counts[key];
                modes = [key];
              } else if (counts[key] === max) {
                max = counts[key];
                modes.push(key);
              }
            }
          }
          return modes.length === sort.length ? 0 : modes;
        };

        //  range
        const rangee = () => {
          return sort[length - 1] - sort[0];
        };

        // minimum
        const mini = () => {
          return Math.min(...sort);
        };
        //  maximum
        const maxi = () => {
          return Math.max(...sort);
        };
        //  count
        const count = sort.length;

        let median = mediann();
        let mode = modee();
        // let mode =
        //   modes.length > 1
        //     ? modes.map((item) => +item)
        //     : (modes = +modes.join(''));
        let range = rangee();
        let minimum = mini();
        let maximum = maxi();

        return { mean, median, mode, range, minimum, maximum, count, sum };
      } else {
        console.error("undefined");
      }
    } else {
      console.error("undefined");
    }
  }




 let makeObjects = (...arrays) => {
  //this function takes in a variable number of arrays that's what the ...arrays signifies
  

  if (typeof(arrays)==="object"){
    let obj = {};
    const arratevery= arrays.every((item)=> item.length==2 ? true :false)

    if (arratevery){
      for (let i = 0; i < arrays.length; i++) {
        obj[arrays[i][0]] = arrays[i][1];
        }
        console.log(obj); 
      }
      

    else{
      console.error("Error")
    }  
  }
  else{
    console.log("type")
  }
}
// makeObject(["foo","bar"],[5,"john"],["foo","bar bar"],[5,"bilal"])
// makeObject([true,undefined],[null,null])


 let commonElements = (...arrays) => {
  if (Array.isArray(arrays) && arrays.length>=2){
    //this function takes in a variable number of arrays that's what the ...arrays signifies

    // console.log(arrays);

    int = arrays.reduce((p, c) => p.filter((e) => c.includes(e)));
    console.log(int)
  }
};
// commonElements([true,5,"pattrick"],["cs-546","pattrick"],[67.7,'pattrick',true])


// const arre=[1, 2, 2, 4, 3, 4].filter((e, i, a) => a.indexOf(e) !== i)
// console.log(arre)


module.exports={arrayStats,makeObjects,commonElements}
