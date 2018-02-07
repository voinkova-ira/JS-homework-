
var Obj = {
    copy: function(buffer){
        this[buffer] = this.result;

        return this;
    },
    clear: function(){
        this.result = 0;

        return this;
    } ,
    doFunction: function(f,a,b){
        this.result = f(a,b);
        return this;
    }

};

var doSum = function (x,y){
    return x + y;
}
var doMul = function (x,y){
    return x * y;
}


console.log(Obj.doFunction(doSum,1,5));
console.log(Obj.doFunction(doSum,1,5).clear());
console.log(Obj.doFunction(doSum,4,5).copy("first result").doFunction(doMul,1,5).copy("key2"));
console.log(Obj.copy("key").copy("key5"));

