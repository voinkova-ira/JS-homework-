var x = +prompt("a= ",5);
var y = +prompt("^y= ",2);

function Calc(a,b,f){ 
    return f(a,b);
}

var doPower = function (x,y){
    var result = 1;
    for (i = 0; i < y; i++){
        result *= x;
    }
    return result;
}

alert(Calc(x,y,doPower));



// function Calc2(a,b){ 
//     return function (x,y){
//         var result = 1;
//         for (i = 0; i < y; i++){
//             result *= x;
//         }
//         return result;
//     }
// }

// var doPower2 = Calc2();

// alert(doPower2(x,y));