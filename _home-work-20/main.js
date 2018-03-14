



// function doAjax(method, url){
//     var promise = new Promise(function(resolve, reject) {
//         var xhr = new XMLHttpRequest();
//         xhr.open(method, url);
        
//         xhr.onload = function() {
//             resolve(xhr.response);

//             if (xhr.status == 200) {
//                 resolve(xhr.response);
//             }
//              else {
//                 var error = xhr.statusText;
//                 // error.code = xhr.status;
//                 reject(error);
//             }

//         };
//         xhr.onerror = function() {
//             var m = "Network Error"
//             reject(m);
//         };
//         xhr.send();
//   })
//     .then(function(responseText){
//         console.log('good', responseText);
//     }, function(text){
//             console.log('bad ',url,' - ', text);
//         }
//     )
//     return promise;

// }
// doAjax('GET', '/data/info.json');
// doAjax('GET', '/info.json');

// doAjax('GET', 'data.json');
// doAjax('GET', 'main.json');



function httpGet(url) {

    return new Promise(function(resolve, reject) {
  
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
  
      xhr.onload = function() {
        if (this.status == 200) {
          resolve(this.response);
        } else {
          var error = new Error(this.statusText);
          error.code = this.status;
          reject(error);
        }
      };
  
      xhr.onerror = function() {
        reject(new Error("Network Error"));
      };
  
      xhr.send();
    });
  
  }
  httpGet("/article/promise/user.json")
  .then(
    response => alert(`Fulfilled: ${response}`),
    error => alert(`Rejected: ${error}`)
  );