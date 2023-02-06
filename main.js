let numCircle= document.querySelectorAll('.circle');
let btnPrev = document.querySelector('#btn1');
let btnNext = document.querySelector('#btn2');
let hr = document.querySelectorAll('hr');

let counter = 0

function print() {
    if (counter <= 3) {
        numCircle[counter].classList.add('next');
    }
    if (counter <= 2) {
        hr[counter].classList.add('next');
    }
    counter++
}

function delette() {
    if (counter >= 1) {
        numCircle[counter--].classList.remove('next');
    }
    if (counter >= 0) {
        hr[counter].classList.remove('next');
    }
}

btnPrev.addEventListener('click', delette)
btnNext.addEventListener('click', print)