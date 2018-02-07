

// function Calculate(number){
//     this.number = number;
// }

// var firstLevel = {

// };
// Calculate.prototype.
    function Calculate(number1, number2){
        this.number1 = number1;
        this.number2 = number2;
    }

    Calculate.prototype.DoMath = function(number){
        return this.number = number*5;
        // function render(x){
        //     this.x = x;
        //     console.log(this.x);
        // };
        // function clear(x){
        //     this.x = 0;
        // }
    }

    var firstLevel = {
        render : function (x){
            this.x = x;
            console.log(this.x);
        },
        clear : function (x){
            this.x = 0;
        }
    }

    var secondLevel = {
        
    }

// function doSum(a,b){
//     return doSquare(a+b);
// }
// function doMul(a,b){
//     return doSquare(a*b);
// }
// function doDiv(a,b){
//     return doSquare(a/b);
// }
// function doSubtraction(a,b){
//     return doSquare(a-b);
// }
// function doSquare(res){
//     return Math.pow(res,2);
// }
var calculate = new Calculate(4,3);
console.log(Calculate.DoMath);