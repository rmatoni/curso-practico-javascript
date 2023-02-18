const h1 = document.querySelector("h1");
const form = document.querySelector("#form");
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

//btn.addEventListener("click",btnOnClick);

/*function btnOnClick() {
    console.log(+input1.value + +input1.value);
    pResult.innerText = +input1.value + +input2.value;
}*/

form.addEventListener('submit', btnOnClick);

function btnOnClick(event){
    console.log({event});
    event.preventDefault();
    const sumaInputs = input1.value + input1.value;
    pResult.innerText = "Resultado: " + sumaInputs;
}