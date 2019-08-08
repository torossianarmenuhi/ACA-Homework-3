const getProdOfNegNumbers= function(arr){
  if(arr.every((element) => !Array.isArray(element))){
    return 'Invalid argument';
  }
  else if(arr.every((element) => element.every((element1) => element1 >= 0)))
  {
    return 'No negatives';
  }
let prodOfMaxNegativeNumbers = 1;
arr.forEach(function(element) {

const maxNegativeElement = Math.max.apply(null, element.filter((element1) => element1 <= 0));
prodOfMaxNegativeNumbers *= maxNegativeElement;

});
return prodOfMaxNegativeNumbers;
}
