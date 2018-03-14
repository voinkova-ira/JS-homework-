    var list = [1, 2, 3]; 

function fmap (doFunction, list) {
    return genetor(doFunction, list);
}
function* genetor(f,arr){
    for(let item of arr){
        yield f(item);
    }
}
function square(x) { return x * x; }
function sumOfnumber(x) { return 2 * x; }


var squareGen = fmap(square, list);
    console.log(squareGen);
    console.log(squareGen.next()); // 1
    console.log(squareGen.next()); // 4
    console.log(squareGen.next()); // 9
    console.log(squareGen.next()); // undefined

var squareGen1 = fmap(sumOfnumber, list);
    console.log(squareGen1);
    console.log(squareGen1.next()); // 1
    console.log(squareGen1.next()); // 4
    console.log(squareGen1.next()); // 9
    console.log(squareGen1.next()); // undefined