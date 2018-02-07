var n = +prompt("n= ",5);
var m = +prompt("m= ",2);

function Calc(a,b,f){ 
    return f(a,b);
}

var doPower = function (x,y){
    var result = 1;
    var n = y;
    if (y < 0){
        y = -y;
    }
    for (i = 0; i < n; i++){
        result *= x;
    }
    if (y < 0){
        result = 1/result;
    }
    return result;
}

var doSum = function (x,y){
    var result = x + y;
    return result;
}
var doDiv = function (x,y){
    var result = x / y;
    return result;
}
var doMul = function (x,y){
    var result = x * y;
    return result;
}

alert(n+'^'+m+' = '+Calc(n,m,doPower));
alert(n+'+'+m+' = '+Calc(n,m,doSum));
alert(n+'/'+m+' = '+Calc(n,m,doDiv));
alert(n+'*'+m+' = '+Calc(n,m,doMul));