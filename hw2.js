const numOfStrings = function(arr){
  return arr.filter((element) => {return typeof element === 'string'}).length;
}
const numOfIntegers = function(arr){
  return arr.filter((element) => typeof element === 'number').length;
}

const printCountOfStringsAndIntegers = function(arr){
  return  'Numbers:' + numOfIntegers(arr) + ', ' + 'Strings:' + numOfStrings(arr);
}
