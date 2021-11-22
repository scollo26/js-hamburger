// variabile-hamburger
const hamburger = document.querySelector('.hamburger-menu');
console.log(hamburger);

// variabile-active
const active = document.querySelector('.header-right a i');
console.log(active);

// variabile-desactive
const desactive = document.querySelector('.hamburger-menu a i');
console.log(desactive);


// click-tasto-hamburger

active.addEventListener('click', function(){

    hamburger.classList.add('active');
    console.log(hamburger.className);
});

// click-tasto-x

desactive.addEventListener('click', function(){

    hamburger.classList.remove('active');
    console.log(hamburger.className);
});