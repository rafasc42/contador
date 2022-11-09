let buttonPlus = document.querySelector("#mais");
let buttonMinus = document.querySelector("#menos");
let count = document.querySelector(".number");
let sum = 0;
count.innerHTML = sum;

buttonPlus.addEventListener("click", ()=>{
    sum = sum + 1;
    count.innerHTML = sum;
    console.log(count);
});

buttonMinus.addEventListener("click", ()=>{
    sum = sum - 1;
    count.innerHTML = sum;
    console.log(count);
});