const clock =document.querySelectorAll("div div");

function tictok() {
    var now =new Date();
    clock[0].style.transform ='rotate('+(6*now.getSeconds()-90)+'deg)';
    clock[1].style.transform ='rotate('+(6*now.getMinutes()-90)+'deg)';
    clock[2].style.transform ='rotate('+(now.getHours()%12*30-90)+'deg)';
}
var interval =setInterval(tictok, 1000);

document.addEventListener('click', function (e) {
    clearInterval(interval);
})
