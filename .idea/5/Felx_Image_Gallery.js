var panels =document.querySelectorAll('div div');
function toggleOpen(){
    this.classList.toggle('open');
}
function toggleFont(e){
    console.log(e.propertyName);
    this.classList.toggle('openFont');
}
panels.forEach(function (input) {
    input.addEventListener('click', toggleOpen);
    input.addEventListener('transitionend', toggleFont);
});

