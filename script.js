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
    document.getElementById("slide_button1").className = "active_button";
    document.getElementById("slide_button2").className = "passive_button";

    document.getElementById("slide_button1").onclick = function() { 
      i = 0;
      console.log(i); 
      clearTimeout(timerId); 
      slideMove(1);
    };
    document.getElementById("slide_button2").onclick = function() {
      i = 1; 
      console.log(i); 
      clearTimeout(timerId);
      slideMove(0);
    };
    slideMove(0);
    
});

window.addEventListener(`resize`, event => {
    //console.log(document.documentElement.clientWidth);
    window_width = document.documentElement.clientWidth;
    slide_box1.style.width = window_width +"px"; 
    slide_box2.style.width = window_width +"px"; 
    slide_box3.style.width = window_width +"px"; 
    slider_line.style.width =  window_width*slideNum +"px";
  }, false);
  

//let timerId = setInterval(slideMove, waitTime);
let timerId;
function slideMove(param) {
    if(i == 0){
      if(param == 0){
        slider_line.style.transition ="all 0s ease 0s";
      }
      else{
        slider_line.style.transition ="all ease 1s";
      }
      offset = window_width*i;
      //console.log(i+ " "+ -offset+'px' );
      slider_line.style.left = -offset+'px';
      i++;
      document.getElementById("slide_button1").className = "active_button";
      document.getElementById("slide_button2").className = "passive_button";
      timerId = setTimeout(slideMove, waitTime/2,0)
    }
    else if(i == 1){
      slider_line.style.transition ="all ease 1s";
      offset = window_width*i;
      //console.log(i+ " "+ -offset+'px' );
      slider_line.style.left = -offset+'px';
      i++;
      document.getElementById("slide_button2").className = "active_button";
      document.getElementById("slide_button1").className = "passive_button";
      timerId = setTimeout(slideMove, waitTime,0)
    }
    else if(i == 2){
      offset = window_width*i;
      //console.log(i+ " "+ -offset+'px' );
      slider_line.style.left = -offset+'px';
      i = 0;
      document.getElementById("slide_button1").className = "active_button";
      document.getElementById("slide_button2").className = "passive_button";
      timerId = setTimeout(slideMove, waitTime/2,0)
      
    }    
  }