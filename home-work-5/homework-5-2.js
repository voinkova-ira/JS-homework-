
n = +prompt("n = ", 5);
m = +prompt("m = ", 5);

A = new Array(n);

for(i = 0; i < A.length; i++){
    A[i] = new Array(m);
}
console.log(A);

for(i = 0; i < A.length; i++){
    for(j = 0; j < A[i].length; j++){
        // console.log(A[i][j]);

        A[i][j] = Math.floor(Math.random()*10);
        document.write(A[i][j] + " ");
    }
    document.write("<br/>");
}
console.log(A);

sum = [];
min = [];
max = [];

for(i = 0; i < A.length; i++){
    sum[i] = 0;
}


console.log(sum);

for(i = 0; i < A.length; i++){
    for(j = 0; j < A[i].length; j++){
        sum[i] += A[i][j];
    }
}
min.push(sum[0], 0);
max.push(sum[0], 0);

for(i = 0; i < A.length; i++){
    if( min[0] > sum[i] ){
        min.splice(0,2, sum[i],i);
    }
    if( max[0] < sum[i] ){
        max.splice(0,2, sum[i],i);
    }
}


b = [];

    for(j = 0; j < A[max[1]].length; j++){
        b.push(A[max[1]][j]);
    }

for(i = 0; i < A.length; i++){
    for(j = 0; j < A[i].length; j++){
        A[max[1]][j] = A[min[1]][j]; 
    }
}
for(i = 0; i < A.length; i++){
    for(j = 0; j < A[i].length; j++){
        A[min[1]][j] = b[j]; 
    }
}

console.log("max = " + max[0]+" row = "+ max[1]);
console.log("min = " + min[0]+" row = "+ min[1]);
console.log("sum = " + sum);
console.log(A);