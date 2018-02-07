
function Field(width, height){
    this.width = width;
    this.height = height;
}
Field.prototype.createField = function(w,h){
    this.A = new Array(this.width);
    for (var i = 0; i < this.A.length; i++){
        this. A[i] = new Array(this.height);
    }
}
Field.prototype.renderField = function(x,y){


    // this.x = x;
    // this.y = y;
    // A = new Array(this.width);
    // for (var i = 0; i < A.length; i++){
    //     A[i] = new Array(this.height);
    //     for(var j = 0; j < A[i].length; j++){
    //         if (typeof(this.x) != 'undefined'){
    //             A[this.x][this.y] = 1;
    //         } else A[i][j] = 0

    //     }
    // }

    // function setStart (x,y){
    //     return this.A[x][y] = 1;
    // }    document.write('x=',x);
    // document.write('x=',y);
   
    // var output = 
    // document.write('<hr>');
    // for(var i = 0; i < A.length; i++){
    //     for(var j = 0; j < A[i].length; j++){
    //         document.write(A[i][j] + " ");
    //     }
    //     document.write("<br />");
    // }
    // document.write('<hr>');
    // return this.A;
}
Field.prototype.clearField = function(){
    document.write('New Game');
    for (var i = 0; i < this.A.length; i++){
        for(var j = 0; j < this.A[i].length; j++){
            this.A[i][j] = 1;
        }
    }
    return this.renderField(this.A);
}
Field.prototype.changeSize = function(newX, newY){

    }


function Person(name, XPosition, YPosition){
    this.name = name;
    this.XPosition = XPosition;
    this.YPosition = YPosition;
}

Person.prototype = Object.create(Field.prototype);

Person.prototype.start = function(){
    // Animal.prototype.run.apply(this);

    // Field.prototype.renderField.apply(this, arguments);
    // // this.A[this.XPosition][this.YPosition] = 1;
    // // this.position = function(x,y) {
    // //     return this.A[x][y] = 1;
    // // }
    // // console.log(Field.prototype);
    // Field.prototype.renderField(1,1)
    
}
Person.prototype.resetPosition = function(){

}




var field = new Field(10,10);
var person = new Person('V',1,1);
field.changeSize(5,5);
// console.dir(person);
// field.renderField();
// // person.start();
// field.renderField();
// field.clearField();

// Animal.prototype.run.apply(this, arguments);
