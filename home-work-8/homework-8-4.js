
var A = {
    x: 10,
    y: 20
};
var B = { x: 30 };
function assignObjects(Obj1, Obj2, flag){
    var FullObj = {};
    if (flag == true){
        for (var key1 in Obj2) {
            FullObj[key1] = Obj2[key1];
        }
        for (var key in Obj1) {
            FullObj[key] = Obj1[key];
        }
    } else{
        for (var key in Obj1) {
            FullObj[key] = Obj1[key];
        }
        for (var key1 in Obj2) {
            FullObj[key1] = Obj2[key1];
        }
    }
    FullObj.bolean = flag;

    return FullObj;
}

console.log(A,B);
console.log(assignObjects(A,B, true));
console.log(assignObjects(A,B, false));
// console.log(A, B);
// console.log(assignObjects(A,B));
