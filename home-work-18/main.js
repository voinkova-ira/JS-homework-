window.onload = function() {

    var buttons = document.querySelectorAll('.Add-to-cart');
        seen = document.querySelector('.seen');
        message = document.querySelector('.cart-message');
    
// console.log(price);

    var isDefined = false;

    if (localStorage.list) {
        isDefined = true;
    }
    renderQuantity();

    buttons.forEach(function(item){
        item.addEventListener('click', addToList);
    });

    function addToList(event){

        var record = {
                id: this.dataset.id,
                count: 1,
                title: this.parentNode.querySelector('.title').innerHTML,
                price: this.parentNode.querySelector('.price').innerHTML
        }
        var list = [];
        if (isDefined) { 
            list = localStorage.list || '[]';
            list = JSON.parse(list);
        } else {
            isDefined = !isDefined;
        }

        var refresh = true;
        for( var i = 0; i < list.length; i++){
            if(list[i].id == record.id){
                list[i].count += 1;
                localStorage.setItem('list', JSON.stringify(list));
                refresh = !refresh;
                break;
            }
        }
        if (refresh){
            list.push(record);
            localStorage.setItem('list', JSON.stringify(list));
        }
        renderQuantity();
        // сооб о добавдении товара
        renderMessage(message, 'cart-message-add', "Товар добавлен!");
    }
// render function
    function renderQuantity (){
        if (localStorage.list){
            var list = JSON.parse(localStorage.list);
            for( var i = 0, sum = 0; i < list.length; i++){
                sum += list[i].count;
            }

            return document.querySelector('.goodsQuantity').innerHTML = sum;
        }

        return document.querySelector('.goodsQuantity').innerHTML = 0;
    }

    function renderMessage (variable, clas, messsage){
        variable.classList.add(clas);
        variable.innerHTML = messsage;
        setTimeout(function(){
            variable.classList.remove(clas);
        }, 1000);
    }
    //render list og goods

// remove function
    var removeAllButton = document.querySelector('.removeAll');

    removeAllButton.addEventListener('click', removeAll);
    function removeAll(event){
        localStorage.removeItem('list');
        renderQuantity();
        renderMessage(message, 'cart-message-clear',"Корзина пуста!");
    }
    var listCart = document.querySelector('.list-none');
        cart = document.querySelector('.cart-img');

    cart.addEventListener('click', display);
    function display (event){
        listCart.classList.toggle("list-disp");
    }
    function renderlist(){
        if (isDefined){
            var list = JSON.parse(localStorage.list); 
            for (var i = 0, sum = 0; i < list.length; i++){
                var liCart = document.createElement('li');
                liCart.innerHTML = list[i].title + ' ('+ list[i].count +')'+ '<span>'+list[i]. price*list[i].count +' $ </span>' + '<span class="remove">X</span>';
                document.querySelector('.cart-goods').appendChild(liCart);
                sum += list[i].price*list[i].count;
            }
            var finalSum = document.createElement('span');
            finalSum.innerHTML = 'ИТОГО ' + sum + ' $ ';
            document.querySelector('.cart-total').appendChild(finalSum);
        }

        
    }
    renderlist();
    var removeButton = document.querySelectorAll('.remove');
    console.log(removeButton);

    // function remove(){
    //     console.log('d');
        
    // }
    removeButton.forEach(function(item, j){
        item.addEventListener('click', function(){
            if (isDefined){
                
                var list = JSON.parse(localStorage.list); 
                var i = 0;

                    var currentI = list.length;
                    console.log("list.length = ",currentI);
                    console.log(" removeButton[]",removeButton.length);
                    if( j > list.length){
                        console.log(' +', j, '--',removeButton.length-j);
                        list.splice(removeButton.length-j-1, 1);

                        // list.splice(j-1, 1);
                    } else{
                        list.splice(j, 1);
                        i++;
                        // i.splice(j, 1);
                    }
                    console.log('j=',j);
                    console.log('list= ',list);
                    localStorage.setItem('list', JSON.stringify(list));
                    var s = document.querySelector('.cart-goods');
                    var li = document.querySelector('.cart-goods li');
                    s.removeChild(li);

            };
        });
    });
}
    // function renderCart(event){
    //     localStorage.list.forEach(function(j){
    //         concole.log(j)
    //     }
    // }

