const evenArr = function(arr){
  return arr.filter((element) => element % 2 != 0)
};
const multipledEvenArr = evenArr.map((element) => {return element *  evenArr.length});
