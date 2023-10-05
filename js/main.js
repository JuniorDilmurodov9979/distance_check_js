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

elForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    inputValue = elInput.value;    
    if (inputValue < 0) {
        alert('Manfiy son kiritmang!')
        return;
    }
    
    // functions 
    
    function walk() {
        return inputValue / piyoda;
    }
    function bicycle() {
        return inputValue / velosiped;    
    }
    function car() {
        return inputValue / mashina;
    }
    function plane() {
        return inputValue / samolyot; 
    }
    
    // walk
    
    const hoursW = Math.floor(walk());
    
    const remainingMinutesW = (walk() - hoursW) * 60;
    
    const minutesW = Math.floor(remainingMinutesW);
    
    const remainingSecondsW = (remainingMinutesW - minutesW) * 60;
    const secondsW = Math.round(remainingSecondsW);
    
    // bicycle
    
    const hoursB = Math.floor(bicycle());
    
    const remainingMinutesB = (bicycle() - hoursB) * 60;
    
    const minutesB = Math.floor(remainingMinutesB);
    
    const remainingSecondsB = (remainingMinutesB - minutesB) * 60;
    const secondsB = Math.round(remainingSecondsB);
    
    // car 
    
    const hoursC = Math.floor(car());
    
    const remainingMinutesC = (car() - hoursC) * 60;
    
    const minutesC = Math.floor(remainingMinutesC);
    
    const remainingSecondsC = (remainingMinutesC - minutesC) * 60;
    const secondsC = Math.round(remainingSecondsC);
    
    // plane
    
    const hoursP = Math.floor(plane());
    
    const remainingMinutesP = (plane() - hoursP) * 60;
    
    const minutesP = Math.floor(remainingMinutesP);
    
    const remainingSecondsP = (remainingMinutesP - minutesP) * 60;
    const secondsP = Math.round(remainingSecondsP);
    
    // show 
    
    elSpanOne.textContent = (`Soat: ${hoursW}, Minutes: ${minutesW}, Seconds: ${secondsW}`);
    elSpanTwo.textContent = (`Soat: ${hoursB}, Minutes: ${minutesB}, Seconds: ${secondsB}`);
    elSpanThree.textContent = (`Soat: ${hoursC}, Minutes: ${minutesC}, Seconds: ${secondsC}`);
    elSpanFour.textContent = (`Soat: ${hoursP}, Minutes: ${minutesP}, Seconds: ${secondsP}`);    
}) 
