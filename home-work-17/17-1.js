var characters = [
        {
            'name': 'barney',
            'age': 36
        },
        {
            'name': 'fred',
            'age': 40
        }
    ];
        function pluck1(obj,n){
            var mas = [];
            for( var key in obj){
                mas.push(obj[key][n]) ;
            }

            return mas;
        }

        function pluck(obj,n){
            var m = obj.map(function(item){

                return item[n];
            })

            return m;
        }

    console.log(pluck(characters, 'name')); // ['barney', 'fred']
    console.log(pluck1(characters, 'age')); 