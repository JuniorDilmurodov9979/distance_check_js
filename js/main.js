let elForm = document.querySelector('.form');
let elLabel = document.querySelector('.label');
let elInput = document.querySelector('.label__input');
let elBtn = document.querySelector('.form');
let elSpanOne = document.querySelector('.span1');
let elSpanTwo = document.querySelector('.span2');
let elSpanThree = document.querySelector('.span3');
let elSpanFour = document.querySelector('.span4');

const piyoda = 3.6; 
const velosiped = 20.1;
const mashina = 70;
const samolyot = 800;

function checkTime(dis,speed) {
    let hours = Math.floor(dis / speed);
    let minutes = Math.floor((dis / speed - hours) * 60);
    let seconds = Math.floor(((dis / speed - hours) * 60 - minutes) * 60);    
    
    if (hours == 0 && minutes == 0) {
        return `Sekund: ${seconds}`;    
    }
    if (minutes == 0 && seconds == 0) {
        return `Soat: ${hours}`;     
    }
    if (hours == 0) {   
        return `Minut: ${minutes} Sekund: ${seconds}`;    
    }
    else if (minutes == 0) {
        return `Soat: ${hours} Sekund: ${seconds}`;    
    }
    if (seconds == 0) {
        return `Soat: ${hours} Minut: ${minutes}`;    
    }
    
    let elResult = `Soat: ${hours} Minut: ${minutes} Sekund: ${seconds}`;    
    return elResult;
}

elForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    let inputValue = elInput.value;    
    if (inputValue <= 0) {
        elSpanOne.textContent = '';
        elSpanTwo.textContent = '';
        elSpanThree.textContent = '';
        elSpanFour.textContent = '';      
        result.textContent = 'Iltimos musbat son kiriting!'
        return;
    }
    
    if (isNaN(inputValue)) {
        elSpanOne.textContent = '';
        elSpanTwo.textContent = '';
        elSpanThree.textContent = '';
        elSpanFour.textContent = '';      
        result.textContent = 'Iltimos son kiriting!'
        return; 
    }
    if (inputValue.length > 7) {
        elSpanOne.textContent = '';
        elSpanTwo.textContent = '';
        elSpanThree.textContent = '';
        elSpanFour.textContent = '';      
        result.textContent = '7 xonali songacha kiritish mumkin!'
        return;
    }
    elInput.value = '';
    result.textContent = "";
    
    
    elSpanOne.textContent = checkTime(inputValue,piyoda);
    elSpanTwo.textContent = checkTime(inputValue,velosiped);
    elSpanThree.textContent = checkTime(inputValue,mashina);
    elSpanFour.textContent = checkTime(inputValue,samolyot);  
})