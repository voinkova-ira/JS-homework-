
var object = {
        name : '1',
        age : 10
}
var a = [1,2,3,4];

Object.prototype.count = function (obj){
    this.obj = obj;
    var i = 0;
    for(key in this.obj){
        if (this.obj.hasOwnProperty(key)){
            ++i;
            // console.log(key);
        }
    }

    return i;
}

Object.prototype.count2 = function (obj){
    this.obj = obj;
    var i = 0;
    Object.keys(this.obj).forEach( function() {
        ++i;
    });

    return i;
}

console.log(object," = ",count(object));
console.log(a ," = ",count(a));

console.log(object," = ",count2(object,a));
console.log(a ," = ",count2(a));

// [].forEach.call( object, function (item, i) {
//     console.log(i + ": " + item);
// });



