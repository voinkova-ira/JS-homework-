
var A = [1, 2, 3, 4];
var B = [];
var FirstObj = {
    x: 10,
    y: 20
};
var SecondObj={ z: 30 };
var A = {
    x: 10,
    y: 20
};
var B = { x: 30 };
function assignObjects(Obj1,Obj2){
    var FullObj = {};
    for (var key in Obj1) {
        FullObj[key] = Obj1[key];
    }
    for (var key in Obj2) {
        FullObj[key] = Obj2[key];
    }

    return FullObj;
}

console.log(FirstObj, SecondObj);
console.log(assignObjects(FirstObj,SecondObj));

console.log(A, B);
console.log(assignObjects(A,B));
