A = [];
B = [];
n = +prompt();

A.length = n;

for(i = 0; i < A.length; i++){
    A[i] = Math.floor(Math.random()*100-30);
}
console.log('A= '+ A);

    min = A[0]; 
    d1 = 0;

    for (i = 1; i < A.length; i++){
        if (min > A[i]){
            min = A[i];
            d1 = i;
        }
    }

    max = A[0];
    d2 = 0;
    for (i = 1; i < A.length; i++){
        if (max < A[i]){
            max = A[i];
            d2 = i;
        }
    }

    console.log("min= " +min);
    console.log('max= '+ max);

    A.splice(d1,1,max);
    A.splice(d2,1,min);


