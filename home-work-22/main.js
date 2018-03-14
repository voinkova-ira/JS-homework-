
class Elem {
    constructor(selector) {
        this.selector = selector;
        this.elements = document.querySelectorAll(this.selector);
    }

    html(text){
        for (let i = 0; i< this.elements.length ;i++){
            // elements[i].firstChild.nodeValue += text;
            this.elements[i].innerHTML = text;
        }

        return this;
    }
    append(text){
        for (let i = 0, newEl, elName ; i< this.elements.length ;i++){
            elName = this.elements[i].tagName;
            newEl = document.createElement(elName);
            this.elements[i].append(newEl);
            newEl.append(text);
            // this.elements[i].appendChild(newEl);
        }

        return this;
    }
    prepend(text){
        for (let i = 0, newEl, elName ; i< this.elements.length ;i++){
            elName = this.elements[i].tagName;
            newEl = document.createElement(elName);
            this.elements[i].prepend(newEl);
            newEl.prepend(text);

        }

        return this;
    }
    attr(name, value, child){
        if (child){
            let selector = this.selector + child;
            let children = document.querySelectorAll(selector);
            children.forEach(function(item){
                item.setAttribute(name, value);
            })
            // {return }
            // this.elements[child].
        } else{
                for (let i = 0, newEl, elName ; i< this.elements.length ;i++){
                this.elements[i].setAttribute(name, value);
                }
        }

        return this;
    }
}

var elem = new Elem('.span');
// elem.html('Some text');
// elem.append(' -->');
// elem.prepend(' <--');
// elem.prepend(' <--');
// elem.prepend(' <--');
// elem.attr('class', 'color', ':nth-of-type(2n)');
// // elem.attr('value', 'border');
elem.html('Some text').append('!!').prepend('-------').attr('class', 'border');;


// elem.html('!'); //запишет в текст элемента '!'
// elem.append('!'); //запишет в начало элемента '!'
// elem.prepend('!'); //запишет в конец элемента '!'
// elem.attr('class', 'www'); //запишет в атрибут class значение www

// //Должны работать цепочки методов:

// elem.attr('class', 'www').attr('title', 'hello');