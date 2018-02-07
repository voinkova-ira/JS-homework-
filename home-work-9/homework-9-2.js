
// var ss =  'var_text_hello';

// function doWord (s){
//     var arr = s.split('_');

//     for (i = 0; i < arr.length; i++){
//         arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
//     }
    
//     return s;
// }
// console.log(doWord (ss));
var symbol = "_"
var string =  'var_text_hello';

var MethodSTR = {
    result: "some text",
    doWord: function(str,s){
        var arr = str.split(s);
        for (i = 0; i < arr.length; i++){
            arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
        }
        this.result = arr.join('');
        return this.result;
    }
};
console.log(MethodSTR.doWord(string,symbol));
console.log(MethodSTR);
console.log(MethodSTR.doWord("sss-sss","-"));
console.log(MethodSTR);



