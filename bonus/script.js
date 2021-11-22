// variabile-hamburger
const hamburger = document.querySelector('.hamburger-menu');
console.log(hamburger);

// variabile-active
const active = document.querySelector('.header-right a i');
console.log(active);

// variabile-desactive
const desactive = document.querySelector('.hamburger-menu a i');
console.log(desactive);


const blue = document.getElementById('.blue');
const red = document.getElementById('.red');



const aggiungi = document.querySelector('.aggiungi');
const rimuovi = document.querySelector('.rimuovi');
const add = document.querySelector('.add');

const li = document.createElement('li');

// click-tasto-hamburger

active.addEventListener('click', function(){

    
    hamburger.classList.add('active');
    console.log(hamburger.className);
    hamburger.style.backgroundColor = "grey";
    hamburger.style.color = "blue"; 
    
});

aggiungi.addEventListener('click', function(){
    li.append("prova");
    add.append(li);
    li.style.color = "blue"; 
});

rimuovi.addEventListener('click', function(){
    li.innerHTML = '';
});




// click-tasto-x

desactive.addEventListener('click', function(){

    hamburger.classList.remove('active');
    console.log(hamburger.className);
});