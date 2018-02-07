var S = [1,2,3,4,'s','s','d'];
var D = [1,2,3, true];


// function fillArr (arr){
//     var n = +prompt("n= "+ n);
//     A = [];
//     A.length = n;
//     for (i = 0; i < A.length; i++){
//         // A[i] = Math.floor(Math.random()*10);
//         A[i] = +prompt();
//     }
//     console.log(A);
//     return A;
// }

// fillArr(B);

function compare(A,B){


    function FindNumb(D){
        for(var i = 0, sum = 0; i < D.length; i++){
            if(typeof(D[i])=="number"){
                sum +=D[i];
            }
        }
        return sum;
    }
    if (FindNumb(A) > FindNumb(B)){
        return A;
    } 
    if (FindNumb(A) < FindNumb(B)){
        return B;
    }
    return "equal arrays";

}
console.log(S);
console.log(D);

console.log("Cумма больше "+compare(S,D));