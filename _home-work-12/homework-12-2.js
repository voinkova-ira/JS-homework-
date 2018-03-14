
function Field(height, width) {
    this.A = new Array(width);
    for (var i = 0; i < this.A.length; i++){
        this. A[i] = new Array(this.height);
    }

    for(var i = 0; i < width; i++){
        for(var j = 0; j < height; j++){
            this.A[i][j] = 0;
        }
    }
}


Field.prototype.renderField = function() {
    document.write('<hr>');
    for(var i = 0; i < this.A.length; i++){
        for(var j = 0; j < this.A[i].length; j++){
            document.write(this.A[i][j] + " ");
        }
        document.write("<br />");
    }
    document.write('<hr>');
};

Field.prototype.clearField = function() {
    console.log("clear ");
};
Field.prototype.changeField = function(height, width) {
    this.height = height;
    this.width = width;
    console.log("change ", width, height);
    this.A = new Array(this.width);
    for (var i = 0; i < this.A.length; i++){
        this. A[i] = new Array(this.height);
    }

    for(var i = 0; i < this.width; i++){
        for(var j = 0; j < this.height; j++){
            this.A[i][j] = 0;
        }
    }
};

// function Person(name, XPosition, YPosition){
//     this.name = name;
//     this.XPosition = XPosition;
//     this.YPosition = YPosition;
// }
function Person(name){
    this.name = name;

}

Person.prototype = Object.create(Field.prototype);

Person.prototype.start = function (x,y){
    if(x === undefined) {
        this.XPosition = 0;
    } else {
        this.XPosition = x;
    }
    
    if(y === undefined) {
        this.YPosition = 0;
    } else {
        this.YPosition = y;
    }
    
}
Person.prototype.go = function (direction, step){
    function bottom(){
        A[i][j-1]
    }
    function top(){
        A[i+1][j]
    }
    function right(){
        A[i+1][j+1]
    }
    function left(){
        A[i-1][j-1]
    }

}
Person.prototype.resetPosition = function(){
    
}
var field = new Field(10,10);
field.renderField();
// field.changeField(5,5);
// field.renderField();

var person = new Person('Person');
person.start();
field.renderField();

