

var fraza = prompt("напишите любую фразу , \n мы проверим ее на полиндром.");
// приводим к нижнему регистру
fraza = fraza.toLowerCase();
//  alert(fraza);
fraza = fraza.split('');
//alert(fraza);
for (var i=0 ; i<fraza.length ; i++) {
    if ( fraza[i]===' '){
        fraza.splice(i,1);
    }
}
alert ('фраза бeз пробелов' +fraza);


function  sravnenie( fraza) {
    var palindrom = true;
    var bukaff = fraza.length ;
    for (var i = 0 ; i<bukaff/2 ; i++){
        if (fraza[i]!== fraza[bukaff-1-i]){
            palindrom = false;
            break ;
        }
    }
    return palindrom ;
}
 var result = sravnenie(fraza);
if (result) {
    alert('фраза  полиндром');
} else { alert ('Фраза не  полиндром');
}