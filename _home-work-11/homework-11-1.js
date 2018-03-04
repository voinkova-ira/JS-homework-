

    function FirstLevel(x,y){
        // 
    }
    FirstLevel.prototype.render = function(x) {
        // 
        console.log("Rezult ",x);
      };
    FirstLevel.prototype.clear = function (x){
        this.x = 0;
        console.log("Clear ",this.x);
    };

    function SecondLevel(x,y){
        this.x = x;
        this.y = y;
        
    }
// 
    SecondLevel.prototype = Object.create(FirstLevel.prototype);
    SecondLevel.prototype.constructor = SecondLevel;

    SecondLevel.prototype.Sum = function() {
        this.sum = (this.x + this.y)*(this.x + this.y);
        console.log(this.sum);
        return this.sum;
        
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

      function FourthLevel(){
      };
// 
    FourthLevel.prototype = Object.create(ThirdLevel.prototype);
    FourthLevel.prototype.constructor = FourthLevel;

    var number = new FourthLevel(1,2);
    console.log(number);
