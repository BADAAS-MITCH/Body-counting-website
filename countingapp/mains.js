const boarded = document.querySelector('.one');
const alighted = document.querySelector('.two');
const saved = document.querySelector('.save-btn');
const savedOutput = document.querySelector('#saved')

boarded.addEventListener('click', add);
alighted.addEventListener('click', sub);
saved.addEventListener('click', save)

let countEl = document.getElementById('countEl')

let count = 0;

function add(e) {
    count = count + 1;
    countEl.innerText = count;
};

function sub(e) {
    count = count - 1;
    countEl.innerText = count;
};

function save(e) {
    savedOutput.textContent = count;
}