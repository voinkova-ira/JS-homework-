A = [1,2,3,4];
B = [5,6,7]
C = [8,9,10,11];

console.log(A);

function Mediana(){
    var M = [];
    for(i = 0; i < arguments.length; i++ ){
        if (arguments[i].length % 2 == 0){
            M[M.length] = arguments[i].slice(arguments[i].length/2-1,3);
        }
        else{
            M[M.length] = arguments[i].slice(Math.floor(arguments[i].length/2),2);
        }
        
    }
    return M;

}

console.log(Mediana([1,"a","b",4],[5,true,7],[8,9,10,11]));
console.log(Mediana(A,B,C));
alert(Mediana(A,B,C));

