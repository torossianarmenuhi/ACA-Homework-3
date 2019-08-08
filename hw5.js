const uniqueArr = function (arr) {
	return arr.filter(function(item, index){
		return arr.indexOf(item) >= index;
	});
};
