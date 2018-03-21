const source ='https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
var cities =[];
fetch(source)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        cities = data;
    });

function match(matchWord, cities){
    return cities.filter(function(place){
        const regex =new RegExp(matchWord,'gi')
        return place.city.match(regex) || place.state.match(regex);
    });
}

function display(){
    var ul =document.querySelector('ul');
    const val =this.value;
    var matchedCity =match(val, cities);
    const regex = new RegExp(val, 'gi');
    ul.innerHTML =matchedCity.map(function(city) {
        const hiCity = city.city.replace(regex, '<span class="highlight">'+val+'</span>');
        const hiState =city.state.replace(regex, '<span class="highlight">'+val+'</span>');
        return '<li>'+hiCity+'/'+hiState+'</li>';
    }).join('');

}
var input =document.querySelector("input");
input.addEventListener('keyup', display);
input.addEventListener('change', display);