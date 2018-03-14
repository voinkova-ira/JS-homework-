function FirstLevel(){
    // 
}
FirstLevel.prototype.render = function() {
    // 
    console.log("Rezult ", this.result);
  };
FirstLevel.prototype.clear = function (key){
    // this[key] = 0;
    this.result = 0;
    console.log("Clear ", this.result);
};

function SecondLevel(){

}
// 
SecondLevel.prototype = Object.create(FirstLevel.prototype);
// SecondLevel.prototype.constructor = SecondLevel;

SecondLevel.prototype.Sum = function() {
    this.result = (this.x + this.y)*(this.x + this.y);
    console.log(this.result);

    return this.result;
};

SecondLevel.prototype.Mul = function() {
    this.result = (this.x * this.y)*(this.x * this.y);
    console.log(this.result);

    return this.result;
};

function ThirdLevel(){
    this.arr = new Array(200);
    for (var i = 0; i < this.arr.length; i++){
        this.arr[i] = Math.floor(Math.random()*50);
    }
}
// 
ThirdLevel.prototype = Object.create(SecondLevel.prototype);
ThirdLevel.prototype.constructor = ThirdLevel;

ThirdLevel.prototype.reInit= function() {
    for (var i = 0; i < this.arr.length; i++){
        this.arr[i] = Math.floor(Math.random()*49);
    }
  };

function FourthLevel(x, y){
    this.x = x;
    this.y = y;
};
// 
FourthLevel.prototype = Object.create(ThirdLevel.prototype);
FourthLevel.prototype.constructor = FourthLevel;

var number = new FourthLevel(10,2);
console.log(number);

number.Sum();
number.render();
number.clear();
number.render();