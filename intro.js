
/*
Write a javascript file that will do the following:
When the mouse goes over an item in the list, change the heading at the top to contain the text of the item
When the mouse is no longer over an item in the list, change the heading back to "Hello World!"
When an item on the list is clicked, remove it from the DOM
*/
var list = document.getElementById("thelist");
var btn =  document.getElementById("b");
var head = document.getElementById("h");
var fibtn = document.getElementById("fib");
var fiblist = document.getElementById("fiblist");

var add = function(){
    var newEl = document.createElement("li");
    list.appendChild( newEl );
    newEl.innerHTML = "New thing.";
    newEl.addEventListener('click', rm);
    newEl.addEventListener('mouseover', function(){
	changeHead(this.innerHTML)});
    newEl.addEventListener('mouseout', function(){
	changeHead("Hello World!")});
}

var rm = function(){
    this.remove();
}

var changeHead = function(newText){
    h.innerHTML = newText;
}

var addFib = function(n){
    console.log("fibbing, getting " + n);
    var newEl = document.createElement("li");
    fiblist.appendChild( newEl );
    newEl.innerHTML = fib(n);
}

var fib = function(n){
    if (n <= 2) return 1;
    else return fib(n-1) + fib(n-2);
}


btn.addEventListener('click', add);
fibtn.addEventListener('click', function(){
    addFib(fiblist.childNodes.length)});

//make removable
var lis = document.getElementsByTagName("li");
for (i = 0; i < lis.length; i++){
    lis[i].innerHTML = "changed";
    lis[i].addEventListener('click', rm);
    lis[i].addEventListener('mouseover', function(){
	changeHead(this.innerHTML)});
    lis[i].addEventListener('mouseout', function(){
	changeHead("Hello World!")});
}


//hover = 

