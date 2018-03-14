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

function Person(name){
    this.name = name;

}
Person.prototype = Object.create(Field.prototype);

Person.prototype.start = function (XPosition, YPosition){
    if(XPosition === undefined) {
        this.x = 0;
    } else {
        this.x = XPosition;
    }

    if(YPosition === undefined) {
        this.y = 0;
    } else {
        this.y = YPosition;
    }
//
    field.A[this.x][this.y]=1;
    field.A[this.x][this.y]=1;
}
Person.prototype.go = function (direction, step){
    this.direction = direction;
    this.step = step;

    function bottom(){
        field.A[i][j-step]
    }
    function top(){
        A[i+1][j]
    }
    function right(){
        A[i+step][j+step]
    }
    function left(){
        A[i-step][j-step]
    }
    return f(step);
}
Person.prototype.resetPosition = function(){
    
}


// function Person(name, XPosition, YPosition){
//     this.name = name;
//     this.XPosition = XPosition;
//     this.YPosition = YPosition;
// }
var field = new Field(10,10);
field.renderField();
// field.changeField(5,5);
// field.renderField();

var person = new Person('Person');
person.start();
field.renderField();

