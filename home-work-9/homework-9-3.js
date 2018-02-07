


function inArray(word, text){
    var res;
    for(var i = 0, pos = 0; i < text.length; i++){
        res = text[i].indexOf(word,pos);
        if (res != -1) {
            res = true;
            break;
        }
    }
    if (res == -1){
        res = false;
    }
    return res;
}
var A = ['sjhfnaofo', 'affoasf'];
var A1 =  ['sjhfnaof', 'affooasf', 'dfhdfhdfh'];
var w ='foo';
console.log(w +' in '+ A + ' - ', inArray('foo', A ));
console.log(w +' in '+ A1 + ' - ', inArray('foo', A1 ));



