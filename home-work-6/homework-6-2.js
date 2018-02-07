var a = +prompt("a = ", 5);
var b = +prompt("b = ", 5);

var zn = prompt("m = ", '+');

function doMath(x, znak, y){
    var rez;
    switch(znak) {
        case '+':
        rez = x + y;
        break;

        case '-':
        rez = x - y;
        break;

        case '*':
        rez = x * y;
        break;
        
        case '/':
        rez = x / y;
        break;

        case '%':
        rez = (x % y);
        break;

        case '^':
        rez = Math.pow(x,y);
        break;

        case '!':
        rez = (!x && !y);
        break;

}

        
      return rez;
}

console.log(doMath(a,zn,b));
