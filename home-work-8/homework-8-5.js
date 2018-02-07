
var A = {
    x: 10,
    y: 20
};
var B = {
    x: 30,
    z: 40
};
function assignObjects(Obj1, Obj2){
    var FullObj = {};
    var flag = arguments[arguments.length-1];

    if(typeof(arguments[arguments.length-1]) != "boolean"){
        flag = false;
    } else {
        flag = arguments[arguments.length-1];
    }

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

    FullObj.boolean = flag;

    return FullObj;
}

console.log(A,B);
console.log("without parametr",assignObjects(A,B));
console.log("with parametr true",assignObjects(A,B, true));
console.log("with parametr false",assignObjects(A,B, false));
