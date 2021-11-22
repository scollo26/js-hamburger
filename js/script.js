// variabile-hamburger
const hamburger = document.querySelector('.hamburger-menu');
console.log(hamburger);

// variabile-active
const active = document.querySelector('.fas.fa-bars');
console.log(active);

// variabile-desactive
const desactive = document.querySelector('.fas.fa-times');
console.log(desactive);


// click-tasto-hamburger

active.addEventListener('click', function(){

    hamburger.classList.add('active');
});

// click-tasto-x

desactive.addEventListener('click', function(){

    hamburger.classList.remove('active');
});