n = +prompt('n=');
m = +prompt('m=');

s = "&";
// space = "&nbsp;";
space = "!";
fullLine = "";
line = s;

//square
for(i = 1; i <= n; i++){
    fullLine += s;

    if(i <= n-2){
        line += space;
    }
}
fullLine += "<br />";
line += s+"<br />";


document.write(fullLine);
for(i=1; i<= m-2; i++){
    document.write(line);
}
document.write(fullLine);

//right-angled triangle
s = "&";
// space = "&nbsp;";
space = "!";
fullLine = "";
line = s;

document.write('</br>'+'right-angled triangle'+'</br>');

document.write(s+ '<br />');
document.write(s, s + '<br />');

for(i = 1; i <= m-3; i++){
    line += space;
    document.write(line, s + '<br />');
}
for(i=1; i<= m; i++){
    fullLine+=s;
}
document.write(fullLine);





