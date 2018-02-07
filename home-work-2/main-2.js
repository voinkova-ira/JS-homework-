a = +prompt('a=');
b = +prompt('b=');
h = +prompt('h=');

if (a >= b || h <= 0){
    document.write('wrong range ');
} else{
    document.writeln('range of numbers ['+ a +' , '+ b +'] </br>');
    for(i = a; i <= b; i += h){
        for(k = 1, fact = 1; k <= i; k++){
            fact *= k;
        }
        document.write('number '+ i +', '+ i +'! = ' + fact +'</br>');
    }
}

