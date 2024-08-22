const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const decreaseBtn = document.querySelector('#decreaseBtn');
const resetBtn = document.querySelector('#resetBtn');
const increaseBtn = document.querySelector('#increaseBtn');
let count = 0;

function updateColor() {
    if (p.innerText < 0) {
        p.style.color = '#464F51';
    } else if (p.innerText > 0) {
        p.style.color = '#2C3D55';
    } else {
        p.style.color = '#000009';
    }
}

decreaseBtn.addEventListener('click', function () {
    count--;
    p.innerText = count;
    updateColor()
})

increaseBtn.addEventListener('click', function () {
    count++;
    p.innerText = count;
    updateColor()
})

resetBtn.addEventListener('click', function () {
    count = 0;
    p.innerText = count;
    updateColor()
})
