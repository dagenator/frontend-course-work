let offset = 0;
const slider_line = document.querySelector('.slider_line');
let timerId = setInterval(slideMove, 4000);


function slideMove() {
    if(offset >= 1440){
        offset =0;
    }
    else{
        offset+=1600;
    }
    slider_line.style.left = -offset+'px';
  }