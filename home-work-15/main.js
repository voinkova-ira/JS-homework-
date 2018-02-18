window.onload = function(){

    var rng = document.getElementById('rng');
    var number = document.getElementById('inpt');
    var val = document.querySelector('.value');
    var commission = document.querySelector('.commission');
    var p = document.getElementById('one');

    rng.addEventListener('click', Range);
    rng.addEventListener('mousemove', Range);

    function Range (event){
        number.valueAsNumber = rng.valueAsNumber;
        val.style.height = rng.valueAsNumber + 'px';
        InputCommission();
    }

    number.addEventListener('blur', MoveRange);
    number.addEventListener('click', MoveRange);
    number.addEventListener('mousedown', MoveRange);

    function MoveRange (event){
        rng.valueAsNumber = number.valueAsNumber;
        val.style.height = number.valueAsNumber + 'px';
        InputCommission();
    }

    function InputCommission(){
        commission.style.height = Commission(number.valueAsNumber)+ 'px';
        p.innerHTML="Комисия - " + Commission(number.valueAsNumber); 
        
        function Commission (n){
        switch (true) {
            case (n <= 20):
                n = 0.02 * n;
                break;
            case (n > 20 && n <= 50):
                n = 0.04 * n;
                break;
            case (n > 50 && n <= 75):
                n = 0.06 * n;
                break;
            case (n > 75 && n <= 100):
                n = 0.08 * n;
                break;
        }

        return n;
        }
    }
}