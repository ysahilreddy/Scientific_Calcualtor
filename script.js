var screen=document.querySelector('#screen');
// we used query selector to get the query from the elemnt which has id screen
// The document.querySelector("#screen") expression would select this specific div element with the id of "screen."

// It's important to note that querySelector will only select the first matching element if multiple elements have the same id. If you want to select all elements with a specific id, you should use document.querySelectorAll("#screen"), which returns a NodeList of elements (or an empty list if no elements match the selector). However, it's generally recommended to use unique id attributes for elements, so you can reliably select them using querySelector.
var btn=document.querySelectorAll('.btn');//returna alot node list for .btn class

//for loop runs on that nodelist
for(item of btn){
  item.addEventListener('click',function(e){
     btntext=e.target.innerText;
    //  e.target refers to the element that triggered the event (i.e., the element that was clicked).
    if(btntext=='x'){
        btntext='*';
    }
    if(btntext=='÷'){
        btntext='/';
    }
   
      screen.value+=btntext;
    })

}

function sin(){
    screen.value=Math.sin(screen.value);
}
function cos(){
    screen.value=Math.cos(screen.value);
}
function tan(){
    screen.value=Math.tan(screen.value);
}
function pow(){
    screen.value=Math.pow(screen.value,2);
}
function sqrt(){
    screen.value=Math.sqrt(screen.value,2);
}
function log(){
    screen.value=Math.log(screen.value);
}

function pi(){
    screen.value=3.14159265359;
}
function e(){
    screen.value=2.71828182845;
}

function fact(){
  var num ,i,f;
   f=1;
  for(i=1;i<=num;i++){
    f=f*i;
  }
  screen.value=f;
}

function backspace(){
    screen.value=screen.value.substring(0,screen.value.length-1);
}