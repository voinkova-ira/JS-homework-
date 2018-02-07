R = +prompt('R=');
H = +prompt('H=');

star = '*';
dash = '--------------------';
br = '<br/><br/>';

S = Math.PI * Math.pow(R,2);
V = S * H;

document.write('**************' + br);
document.write('Обьем цилиндра с площадью основы '+ star, S,star + ', радиусом '+ star, R, star +' и высотой '+ star, H, star +' равен: ' + br);
document.write(dash, br);
document.write('V = '+ V + '.' + br);

document.write(dash, br);
document.write('end.');
