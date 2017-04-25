// JavaScript File
var str , fan , result;
function myFun(...args) {
	for (var i=0; i<arguments.length-1 ;i++){
		str =arguments[i]; fan = arguments[arguments.length];
		result = fan(str);
	}
	return console.log (result);
}
myFun('abc','ert','rty',function(str){
	return str.toUpperCase();
})