
/*
Write a javascript file that will do the following:
When the mouse goes over an item in the list, change the heading at the top to contain the text of the item
When the mouse is no longer over an item in the list, change the heading back to "Hello World!"
When an item on the list is clicked, remove it from the DOM
*/
var list = document.getElementById("thelist");
var btn =  document.getElementById("b");

//make removable
var lis = document.getElementsByTagName("li");
for (i = 0; i < lis.length; i++){
    console.log(lis[0].innerHTML);
    lis[i].addEventListener('click', rm);
}

var add = function(){
    var newEl = document.createElement("li");
    list.appendChild( newEl );
    newEl.innerHTML = "New thing.";
    newEl.addEventListener('click', rm);
}

var rm = function(){
    this.remove();
}

btn.addEventListener('click', add);


//hover = 

