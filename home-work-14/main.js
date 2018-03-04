
window.onload = function() {

    var boxes = document.querySelectorAll('.box');
        html = document.documentElement;
// for all
    // for (var i = 0; i < boxes.length; i++){
    //     boxes[i].addEventListener('click', OnClick);

    //     console.log('box'+i,boxes[i]);
    // }

    // function OnClick (event){
    //     for (var i = 0; i < boxes.length; i++){
    //         boxes[i].style.transition = ".4s";
    //         boxes[i].style.top = html.clientHeight - boxes[i].clientHeight-boxes[i].offsetTop + "px";
    //     }
    // }
   

    for (var i = 0; i < boxes.length; i++){
        var box = boxes[i];
        box.addEventListener('click', OnClick);
    }

    function OnClick (event){
        var value = document.getElementById("speed").value;
        console.log(value);
        if (value != 9 ){
            this.style.transition = value + "s";
        } else{
            this.style.transition = "9s";
        }
        this.style.top = html.clientHeight - this.clientHeight - this.offsetTop + "px";
    }

}

