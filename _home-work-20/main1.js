const myFirstPromise = new Promise((resolve, reject) => {

    // выполняется асинхронная операция, которая в итоге вызовет:
    //
    //   resolve(someValue); // успешное завершение
    // или
    //   reject("failure reason"); // неудача
  });

// function download (type) {
//     return new Promise(function(resolve, reject) {
//         var burger = cookBurger(type)
//         burger.ready = function (err, burger) {
//             if (err) {
//                 return reject(Error('Error while cooking'))
//             }
//             return resolve(burger)
//         }
//     })
// }
new Promise ( function (resolve, reject){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'filqe.txt');
    xhr.send();

    xhr.onreadystatechange = function() {
        if (this.readyState != 4) {
            return 
        }
        if (this.status != 200) {
            console.log( 'ошибка: ' + (this.status ? this.statusText : 'запрос не удался') );
            return reject();
        } else{
            resolve(xhr.responseText);
        }
    }
})
.then(function(a){
    console.log("удача" , a);

}, function(){ 
    console,log('false');
 })
