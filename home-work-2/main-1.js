n = +prompt('n=');

x = 0;
y = 1;

if (n >= 2){
    document.write(x + ' '+ y);
    
    for(i = 3; i <= n; i++ ){
        S = y + x;
        document.write(' ' + S);
    
        x = y; 
        y = S;
    }
} else {
    document.write('n должно быть - n >= 2');
}