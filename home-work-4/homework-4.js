A = [];
B = [];
n = +prompt();
var d = 0;
A.length = n;

for(i = 0; i < A.length; i++){
    A[i] = Math.floor(Math.random()*100-30);
}
console.log('A= '+ A);


    for(i = 0 ; i < A.length; i++){
        d = 0;
        if(A[i] > 0){
            for(k = 1; k <= A[i]; k++){
                if( (A[i] % k) == 0){
                    ++d;
                }
            }
            if(d == 2){
                B[B.length] = A[i];
            }
        }
        // else{
        // console.log('No number');
        // }
    }
    console.log('B= '+ B);

    //     if(A[i] > 0){
    //         for( j = 1 ; j <= A.length; j++){
    //             if( A[i] % j == 0){
    //                 ++d;
    //             }
    //         }
    //         if(d == 2){
    //             B[B.length] = A[i];
    //         }
    //     } else{
    //     console.log('No number');
    // }

// // C[C.lenght]=false;
// for (i = 0; i < A.length; i++){
//     C[i] = A[i];

// }
// // for (i = 0; i < B.length; i++){
// //     C[C.length] = B[i];

// // }
// // console.log(C);

// for (j=0, i=A.length; (i<(A.length+B.length)); i++,j++){
//     C[i]=B[j];
// }

    // console.log(A);

 