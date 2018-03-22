var index =0;
const input =document.querySelectorAll("input");
input.forEach(function(item){
    item.index = ++index;
    item.addEventListener("click", clicked);
});
var head;
var flag =false;
function clicked(e){
    if (flag){
        checking(head, this.index, input);
        flag =false;
    }else{
        flag = true;
        head = this.index;
    }
}
function checking(head, tail, input) {
    if(head >  tail){
        [head, tail] = [tail, head];
    }
    for(var i =head; i<tail; i++){
        input[i].checked =true;
    }
}