const h1 = document.querySelector("h1");//selecciona al primero que se encuentra
//const allH1 = document.querySelectorAll("h1");//selecciona a todas la etiquetas h1
const parrafo = document.querySelector(".parrafo");
const pid = document.querySelector("#pid");
const input = document.querySelector('input');

//tambien podemos usar la propiedad get element

const select1 = document.getElementById("pid");  //no se usan hastags ni puntos 
const select2 = document.getElementsByClassName("parrafo");
const select3 = document.getElementsByName("h1");

//console.log("h1"); //esto muestra solo el html

/*console.log({  //si lo imprimimos como un objeto nos va a mostrar todas sus propiedades
    h1,parrafo,pid
})*/

h1.innerHTML = "Patito <br> Feo"; //permite modificar lo que esta dentro de la etiqueta seleccionada, inner = dentro, dentro podemos
//insertar etiquetas html, en este caso <br> que es un salto de linea, pero esto es peligroso por que atacantes podrian poner codigo
//malicioso en este inner, solo usar en caso de que no afecte la seguridad de nada mas, en el caso de que si usamos innerText.

h1.innerText = "Patito Feo"; //aqui solo podemos ingresar texto, no codigo html o css o js ni ningun otro

h1.getAttribute("class");
console.log(h1.getAttribute("class"));
h1.getAttribute("pantalla");
console.log(h1.getAttribute("pantalla"));
//h1.setAttribute
h1.setAttribute('class','rojo');//nos sirve para cambiar el valor de un atributo
console.log(h1.getAttribute("class"));

//otra erramiento para trabajar especificamente con las clases es classList
h1.classList.add('azul'); //agrega una clase sin eliminar la que tenia
h1.classList.remove('rojo'); //remueve la clase que coincida con el argumento

//a algunos atributos de nuestros elementos podemos acceder sin necesidad de un getAttributo o un setAttributte
input.value = "123";

const img = document.createElement('img');
img.setAttribute('src','https://img2.freepng.es/20180202/qxq/kisspng-call-of-duty-black-ops-iii-call-of-duty-3-call-of-duty-black-ops-transparent-png-5a74df737175c8.5432086115176088194647.jpg');
pid.append(img);