const f = function(arr){
  return arr.forEach((item,index,arr) => {
    if(index != arr.length -1){return arr[index] =  item * arr[index + 1]}
    else return arr;
  });
}
