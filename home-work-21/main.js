var list = [1, 2, 3]
    list2 = [1, 4, 9]; 
var obj = {
        value: 2,
        item: 4,
        ten: 5
}

var fmap = (doFunction, list) => genetor(doFunction, list);

function* genetor(f,arr){
    for( let item in arr){
        yield f(arr[item]);
    }
}
var square = (x) => x * x; 
var squareRoot = (x) => Math.pow(x, 1/2);

var squareGen = fmap(square, list);
    console.log(squareGen.next()); // 1
    console.log(squareGen.next()); // 4
    console.log(squareGen.next()); // 9
    console.log(squareGen.next()); // undefined

squareGen = fmap(squareRoot, list2);
    console.log(squareGen.next()); // 1
    console.log(squareGen.next()); // 4
    console.log(squareGen.next()); // 9
    console.log(squareGen.next()); // undefined

squareGen = fmap(square, obj);
    console.log(squareGen.next()); // 1
    console.log(squareGen.next()); // 4
    console.log(squareGen.next()); // 9
    console.log(squareGen.next()); // undefined