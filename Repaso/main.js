//  Estas son funciones de nuestro navegador.
// const h1 = document.querySelector("h1");
// const h3 = document.querySelector("h3");
// const input = document.querySelector("input")

// const nav = document.getElementById("info");

// Insetar texto
// h1.innerHTML="Sigue en nuestra nueva pagina";
// h1.innerText="Sigue en nuestra nueva pagina <br>";

// Clases y atributos
// console.log(h1.getAttribute("venta")
// );

// console.log(h3.getAttribute("class")
// );

// h1.setAttribute("venta","monedas");

// // solo para clases agregar
// h1.classList.add("iva");
// h1.classList.remove("iva");

// input.value =""
// Crear elemento des JS 

// const img =document.createElement("img");
// img.setAttribute("src","https://static.platzi.com/media/achievements/practico-javascript_badge-fb533fa5-73c8-4f75-9d81-0294d9013ab5.png")

// console.log(img);

// h3.innerHTML="";
// h3.append(img);



// console.log(document.createElement("p"));

// Eventos de Js Interactua con el usuario

// Cuando usamos le id en el HTMl en el js es ponemos
// # Para llamar 

const h1 = document.querySelector("h1");
const form = document.querySelector("#formulario");
const input1  = document.querySelector("#calcula1");
const input2  = document.querySelector("#calcula2");
const btn = document.querySelector("#btnCalcular");
const pResouesta =document.querySelector("#resultado");

function sumarInput(event){
    // No recarga la pagina cuando estamos en un formulario
    event.preventDefault();

    const sumaInputs = input1.value + input2.value;
    pResouesta.innerText = "Resultado: " + sumaInputs;

}


// addEventListener
// Primero el nombre, despues el evento y la funcion 

// btn.addEventListener("click", btnOnClick);
 form.addEventListener("submit", sumarInput);

