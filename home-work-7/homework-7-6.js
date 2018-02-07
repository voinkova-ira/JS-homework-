var n = +prompt("n= ",5);
var m = +prompt("m= ", 2);
var n1 = "s";
var m1 = 6;


function Calc(a,b,f){
  for(var i = 0, j = 0, c; i <arguments.length; i++){
    if (typeof(arguments[i]) === "number" ){
      ++j;
      c = arguments[i];
    }
  }
  if (j == 1){
    return doFact(c); 
  }
    return f(a,b);
}

function doFact (x){
    for(var i = 1, result = 1; i <= x; i++){
      result *= i;
  }

    return x + "! =" + result ;
}

var doSum = function (x,y){
  var result = x + y;

  return result;
}

alert(n+'+'+m+' = '+Calc(n,m,doSum));
alert(n1+'+'+m1+' = '+Calc(n1,m1,doSum));
