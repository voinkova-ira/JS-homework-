

function SuperMath() {
    this.number1 = +prompt("a = ", 5);
    this.number2 = +prompt("b = ", 5);
    this.sign = this.input();
}
//proverka znaka
SuperMath.prototype.input = function (){ 
    var access = ['+', '-', '/','*','%','^'];
    var check = true, 
        sign;
    do {
        sign = prompt('sing', '+');
        for (var i = 0; i < access.length; i++){
            if (access[i] == sign){
            // if (access[i].localeCompare(sign) == 0){
                check = false; 
                break;
            }
        }
    } while (check);

    return sign;
}

SuperMath.prototype.doMath = function (){
    // var rez;
    switch(this.sign) {
        case '+':
        this.rezult = this.number1 + this.number2;
        break;

        case '-':
        this.rezult = this.number1 - this.number2;
        break;

        case '*':
        this.rezult = this.number1 * this.number2;
        break;
        
        case '/':
        this.rezult = this.number1 / this.number2;
        break;

        case '%':
        this.rezult = this.number1 % this.number2;
        break;

        case '^':
        this.rezult = Math.pow(this.number1,this.number2);
        break;
    }
    return this.rezult;
}

SuperMath.prototype.check = function(){
    var answer = confirm("сделать мат действие ? = " + this.number1 + this.sign + this.number2);
    if (answer) {
        return this.doMath( this.number1, this.number2, this.sign);
    }
    else {
        return this.doMath(this.input());
    }
}
var supermath = new SuperMath();
var supermath1 = new SuperMath();

supermath.check();
console.log(supermath);

console.log(supermath1);


    // this.obj = obj;
    // var str = ""; 
    // for(k in this.obj) { 
    //     str += k+": "+ this.obj[k]+" , "; 
    // } 

// SuperMath.prototype.run = function(obj) {
//     // this.s = s
//     console.log( obj);
// };
// supermath.ckecku = function(obj){
//     console.log( obj);
// }




    // supermath.check(object = { X:12, Y:3, znak: '/'}); 

    


// supermath.run(object = { X:12, Y:3, znak: '/'}); // Зверь бежит, скорость 10

// console.log(supermath.check(obj = { X:12, Y:3, znak: '/'}));
  //   this.run = function(speed) {
//     this.speed += speed;
//     alert( this.name + ' бежит, скорость ' + this.speed );
//   };


// Создать класс SuperMath. 
// Добавить к экземпляру метод - check(obj), параметр obj которого имеет свойства X, Y, znak. 
// Метод должен подтвердить у пользователя хочет ли он произвести действие znak c Х и У. 
// Если -да, сделать мат действие znak(которое описано в прототипе),
//  иначе - запросить ввод новых данных через метод input() класса SuperMath. 
//  Пример обекта: obj = { X:12, Y:3, znak: “/”}, возможные варианты znak=> + - / * %. 
//  При вводе znak нужно сделать проверку корректности ввода на возможные математические действия











// function SuperMath(number1, number2, s){
//     this.number1 = number1;
//     this.number2 = number2;
//     this.s = s;
//     this.obj = {
//         x : this.number1,
//         y: this.number2,
//         znak: this.s
//     }
//     console.log(this.obj);
//     this.check = function (obj){
//         var answer = confirm("сделать мат действие ? = "+ this.obj);
//         if (answer) {
//             return doMath( this.number1, this.number2, this.s);
//         }
//         else {
//             return this.inputt();
//         }
//     }
//     this.inputt = function (){
//         this.number1 = +prompt("a = ", 5);
//         this.number2 = +prompt("b = ", 5);
//         this.s = prompt("znak ", "+");
//         return this.check(obj);
//     }
// }

// function doMath(x,y,znak){
//     var rez;
//     switch(znak) {
//         case '+':
//         rez = x + y;
//         break;

//         case '-':
//         rez = x - y;
//         break;

//         case '*':
//         rez = x * y;
//         break;
        
//         case '/':
//         rez = x / y;
//         break;

//         case '%':
//         rez = (x % y);
//         break;

//         case '^':
//         rez = Math.pow(x,y);
//         break;
//     }
// }
// var a = +prompt("a = ", 5);
// var b = +prompt("b = ", 5);
// var zn = prompt("m = ", '+');
// var supermath = new SuperMath(a, b, zn);
// console.log(supermath.check());


