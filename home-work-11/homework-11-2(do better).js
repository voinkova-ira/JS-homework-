

function SuperMath() {
    this.obj = this.input();
}
//proverka znaka
SuperMath.prototype.input = function (){ 
    this.obj = {};
    this.obj.number1 = +prompt('a = ', '5');
    this.obj.number2 = +prompt('b = ', '5');

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
    this.obj.sign = sign;

    return this.obj;
}

SuperMath.prototype.doMath = function (){
    // var rez;
    switch(this.obj.sign) {
        case '+':
        this.obj.rezult = this.obj.number1 + this.obj.number2;
        break;

        case '-':
        this.obj.rezult = this.obj.number1 - this.obj.number2;
        break;

        case '*':
        this.obj.rezult = this.obj.number1 * this.obj.number2;
        break;
        
        case '/':
        this.obj.rezult = this.obj.number1 / this.obj.number2;
        break;

        case '%':
        this.obj.rezult = this.obj.number1 % this.obj.number2;
        break;

        case '^':
        this.obj.rezult = Math.pow(this.obj.number1, this.obj.number2);
        break;
    }
    return this.obj.rezult;
}

SuperMath.prototype.check = function(){
    var answer = confirm("сделать мат действие ? = " + this.obj.number1 + this.obj.sign + this.obj.number2);
    if (answer) {
        return this.doMath(this.obj);
    }
    else {
        return this.doMath(this.input());
    }
}
var supermath = new SuperMath();
var supermath1 = new SuperMath();

supermath.check();
console.log(supermath);

supermath1.check();
console.log(supermath1); 