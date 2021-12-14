let offset = 0;
const slider_line = document.querySelector('.slider_line');
const slide_box = document.querySelector('.slide_box1');
const slide_box2 = document.querySelector('.slide_box2');
let window_width = document.documentElement.clientWidth;

window.addEventListener("load", function(event) {
    window_width = document.documentElement.clientWidth;
    slide_box.style.width = window_width +"px"; 
    slider_line.style.width =  window_width*2 +"px";
  });



window.addEventListener(`resize`, event => {
    console.log(document.documentElement.clientWidth);
    window_width = document.documentElement.clientWidth;
    slide_box.style.width = window_width +"px"; 
  }, false);
  

  let timerId = setInterval(slideMove, 4000);
function slideMove() {
    //alert( window_width);
    if(offset >=window_width){
        offset =0;
    }
    else{
        offset +=window_width;
    }
    slider_line.style.left = -offset+'px';
  }