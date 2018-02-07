
var A = [1, 2, 3, 4];
var B = [];

function map(fn, array){
    for (i = 0; i < array.length; i++){
        array[i] = fn(array[i]);
    }
    
    return array;
}

var square = function (x) {
    return (x*x);
}
console.log(A, B);
console.log(map(square, A),map(square, B));
