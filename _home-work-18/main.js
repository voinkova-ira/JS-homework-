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
// переключатель корзины как меню.
    // cart.addEventListener('click', display);
    // function display (event){
    //     listCart.classList.toggle("list-disp");
    // }
    function renderlist(){
        if (isDefined){
            var list = JSON.parse(localStorage.list); 
            for (var i = 0, sum = 0; i < list.length; i++){
                var liCart = document.createElement('li');
                liCart.setAttribute('data-item', i);
                // liCart.classList.add('data-list='+'"'+i+'"'); 
                liCart.innerHTML = list[i].title + ' ('+ list[i].count +')'+ '<span>'+list[i]. price*list[i].count +' $ </span>' + '<span class="remove"'+'data-remove='+i+'>X</span>';
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

    function del(list,j){
        // var list = JSON.parse(localStorage.list);
        console.log('lll ',list, j);
    }
    removeButton.forEach(function(item, j){
        item.addEventListener('click', remove);
    });
    function remove(event){
        var d = event.currentTarget;
        console.log(d);
        var r = this.dataset.remove;
        console.log(r-1);
        var list = JSON.parse(localStorage.list);
        // delete list[r];
        
        list.splice(r, 1);console.log(list);
        var res = list.every(function(item) {
            return typeof item == "undefined" || typeof item == null;
          });
        console.log('res',res);
        // localStorage.setItem('list', JSON.stringify(res));
        localStorage.setItem('list', JSON.stringify(list));
                var selector = '[data-item="'+r+'"]'; 
                // console.log('selector ',selector);
                var tagParent = document.querySelector('.cart-goods');
                var li = document.querySelector(selector);
                console.log("Child remove",li);
                tagParent.removeChild(li);
    }
            // if (isDefined){
            //     var list = JSON.parse(localStorage.list);
            //     del(list, j);
            //     // for(var i = 0; i < Math.floor(list.length/2); i++){
            //     //     list.push(undefined);
            //     // }

            //     // if(list[j].count > 1){
            //     //     list[j].count = list[j].count -1
            //     // } else {
            //         list.splice(j, 1);
            //     // }
            //     console.log('list= ',list);
            //     // if (list[] == 'undefined')

            //     // var cartlist = lits.filter(function(number) {
            //     //     return number > 0;
            //     //   });
            //     localStorage.setItem('list', JSON.stringify(list));
            //     var s = document.querySelector('.cart-goods');
            //     var li = document.querySelector('.cart-goods li');
            //     s.removeChild(li);

            // };
    
    }
    // function renderCart(event){
    //     localStorage.list.forEach(function(j){
    //         concole.log(j)
    //     }
    // }

