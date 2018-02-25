
var input = [1, 2, 3, 4, 5, 6];

    function filter(int,even){
        return ( even(int));
    }
    function isEven(x){
        var rez ;
        rez= x.map(function(item, pos, arr){
            if (item % 2 == 0){
                return item;
            }
        });
        return rez;
    }

    function isEven2(x){
        var res = [];
        x.forEach(function(item){
            if (item % 2 == 0) {
                res.push(item);
            }
        });
        return res;
    }

console.log("filtr map = ", filter(input, isEven));
console.log("filtr forEach = ", filter(input, isEven2));