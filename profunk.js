// JavaScript File

function myFun(...args) {
    var posl = arguments.length-1,
    fan = arguments[posl],
    result = [];
    for (var i=0; i<posl ;i++){
        result[i]= fan (args[i]);

    }
    return result;
}
var finish ;

finihs = myFun('abc','ert','rty', 'bar' ,function(str){
    return str.toUpperCase();
});
console.log (finihs);


function myFun(...args) {
    var posl = arguments.length-1,
    fan = arguments[posl],
    result = [];
    for (var i=0; i<posl ;i++){
        result[i]= fan (args[i]);

    }
    return result;
}