A = [];
C = [];
n = +prompt();

for(i = 0; i < n; i++){
    A[A.length] = Math.floor(Math.random()*100-30);
    C[B.length] = A[i];
}
console.log('A= '+ A);
//1
//удваиваем масив
A = A.concat(A);
// или
// for(i = 0; i < n; i++){
//     A[A.length] = A[i];
// }

// переворвчиваем м 
for(i = 0, j = A.length - 1; i < A.length/2; i++, j--){
    A[i] = A[j];
    console.log('A= '+ A);
}
//отнимаем лишнее
for(i = 0 ; i < n; i++){
        A.pop();
}
console.log('A reverse = '+ A);
 
C.reverse();
console.log('C= '+ C);
