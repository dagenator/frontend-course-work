let offset = 0;
const slider_line = document.querySelector('#slider_line');
const slide_box1 = document.querySelector('#slide1');
const slide_box2 = document.querySelector('#slide2');
const slide_box3 = document.querySelector('#slide3');
let window_width = document.documentElement.clientWidth;
let slideNum = 3;
let i=0;
let waitTime=3000;

window.addEventListener("load", function(event) {
    window_width = document.documentElement.clientWidth;
    slide_box1.style.width = window_width +"px"; 
    slide_box2.style.width = window_width +"px"; 
    slide_box3.style.width = window_width +"px"; 
    slider_line.style.width =  window_width*slideNum +"px";
    slideMove();
  });



window.addEventListener(`resize`, event => {
    console.log(document.documentElement.clientWidth);
    window_width = document.documentElement.clientWidth;
    slide_box1.style.width = window_width +"px"; 
    slide_box2.style.width = window_width +"px"; 
    slide_box3.style.width = window_width +"px"; 
    slider_line.style.width =  window_width*slideNum +"px";
  }, false);
  

//let timerId = setInterval(slideMove, waitTime);
let timerId;
function slideMove() {
    if(i == 0){
      slider_line.style.transition ="all 0s ease 0s";
      offset = window_width*i;
      console.log(i+ " "+ -offset+'px' );
      slider_line.style.left = -offset+'px';
      i++;
      timerId = setTimeout(slideMove, waitTime/2)
    }
    else if(i == 1){
      slider_line.style.transition ="all ease 1s";
      offset = window_width*i;
      console.log(i+ " "+ -offset+'px' );
      slider_line.style.left = -offset+'px';
      i++;
      timerId = setTimeout(slideMove, waitTime)
    }
    else if(i == 2){
      offset = window_width*i;
      console.log(i+ " "+ -offset+'px' );
      slider_line.style.left = -offset+'px';
      i = 0;
      timerId = setTimeout(slideMove, waitTime/2)
      
    }
    
  }