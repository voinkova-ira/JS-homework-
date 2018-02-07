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
    }
    console.log('B= '+ B);

    min = A[0];

    for (i = 1; i < A.length; i++){
        if (min > A[i]){
            min = A[i];
        }
    }

    max = A[0];
    for (i = 1; i < A.length; i++){
        if (max < A[i]){
            max = A[i];
        }
    }

    console.log("max= " +max);
    console.log('min= '+ min);
