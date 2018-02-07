A = [3, -1, -10, -5, 5, 0, -5, 2, 9];

console.log('A= '+ A);

    min = A[0]; 
    d1 = 0;

    for (i = 1; i < A.length; i++){
        if (min > A[i]){
            min = A[i];
            d1 = i;
        }
    }
    console.log("min= " +min);

    for (i = 0, j = 0; i < A.length; i++){
        sub=Math.abs(A[i] - min);
        if (sub == 5){
            j++;
        }
    }
    console.log("кол элементов отлич. от min на 5 = " +j);



