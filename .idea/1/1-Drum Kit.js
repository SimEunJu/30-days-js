var btns =document.querySelectorAll('.btn');
document.addEventListener('keydown', function (e) {
    btns.forEach(function (btn) {
        if(btn.getAttribute('data-key') == e.keyCode) btn.classList.add('press');
    });
});
document.addEventListener('keyup', function (e) {
    btns.forEach(function (btn) {
        if(btn.getAttribute('data-key') == e.keyCode) btn.classList.remove('press');
    });
});