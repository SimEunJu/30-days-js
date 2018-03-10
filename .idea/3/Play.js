var container =document.querySelector(".container");
var span =document.querySelector("span");

document.querySelector('input#spacing')
    .addEventListener('input', function (e) {
        console.log(e.target.value);
    container.style.padding =e.target.value+"px";
    e.preventDefault()
});

document.querySelector('input#blur')
    .addEventListener('input', function (e) {
    container.style.filter = "blur("+e.target.value+")";
    e.preventDefault()
});

document.querySelector('input#baseColor')
    .addEventListener('input', function (e) {
    container.style.backgroundColor =e.target.value;
    span.style.color =e.target.value;
    e.preventDefault()
});
