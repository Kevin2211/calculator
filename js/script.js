
const numButtonDivs = document.getElementsByClassName("numbers");
const operations = document.querySelector('.operators').children;
const display = document.getElementById('input');
const equalButton = document.getElementById('result');
const clearButton = document.getElementById('clear');


let result = 0;
const operators = ["+","-","/","*"]



for (let j = 0; j < numButtonDivs.length; j++) {
    for (let i = 0; i < numButtonDivs[j].children.length; i++) {
            numButtonDivs[j].children[i].addEventListener('click', (event) => {
            if(result != 0){
                display.textContent = '';
                result =0;
            }
            
            display.textContent += event.target.textContent;
        }) 
    } 
}

for (let i = 0; i < operations.length; i++) {
    operations[i].addEventListener('click', (e) => {
        if(display.textContent != "" && operators.includes(display.textContent.slice(-1)) == false){
            display.textContent += e.target.textContent;        
        }
    })
}


equalButton.addEventListener('click', () => {
    if(operators.includes(display.textContent.slice(-1)) == true){
        display.textContent = display.textContent.slice(0, -1);
    }
    result = eval(display.textContent);   
    display.textContent = result;

})

clearButton.addEventListener('click', () => {
    display.textContent = '';
})





