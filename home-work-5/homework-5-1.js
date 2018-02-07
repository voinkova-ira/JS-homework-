A = [];
n = +prompt("n = ", 5);

A.length = n; 
for (i = 0; i < A.length; i++){
     A[i] = i;
}

console.log('A= '+ A);

    for (i = 0; i < A.length-1; i+=2){
        a = A[i];
        A[i] = A[i+1];
        A[i+1] = a;
    }
console.log("A= " +A);




