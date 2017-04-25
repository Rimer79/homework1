// JavaScript File

// надо проверить фразу на полиндром
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
alert (fraza.reverse());
var polindrom = fraza.reverse();
   function  sravnenie( fraza,polindrom) {
       for (var i=0 ; i<fraza.length ; i++){
           if (fraza[i]=== polindrom[i]){
               alert ('фраза  полиндром');

           }
           else { alert('фраза не полиндром'); break ;}
       }
   }
sravnenie(fraza, polindrom);