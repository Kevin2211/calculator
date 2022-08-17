const add = (x,y) => x + y;
const sub = (x,y) => x - y;
const multiply = (x,y) => x * y;
const divide = (x,y) => x / y;

const total = 0;

// function numButtonClicked (num) {
//     console.log(num);
// }

const numButtonDivs = document.getElementsByClassName("numbers");
const operations = document.querySelector('.operators');
const display = document.getElementById('input');
const result = 0;


for (let j = 0; j < numButtonDivs.length; j++) {
    for (let i = 0; i < numButtonDivs[j].children.length; i++) {
        console.log(numButtonDivs[j].children[i].addEventListener('click', (event) => {
            display.textContent += event.target.textContent;
        }))  
    } 
}

console.log(operations);





