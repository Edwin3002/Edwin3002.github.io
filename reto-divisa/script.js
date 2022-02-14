// importa y creo varables
import {divisa} from './moneda.js';
let boton = document.getElementById('calcular');
let coin = document.getElementById('moneda1');
let coin2 = document.getElementById('moneda2');
boton.addEventListener('click', convertir);

const money = divisa;
console.log(money)
money.forEach(moneda =>{  
    const{name, price} = moneda;
    coin.innerHTML +=`
                        <option value="${price}">${name}</option>
    `
    coin2.innerHTML +=`
                        <option value="${price}">${name}</option>
    `
});

//añádo la opcion del yen
let alerta2 = document.createElement('option');
alerta2.setAttribute("value", "115");
document.getElementById('moneda2').appendChild(alerta2);
let texto2 = document.createTextNode("Yen");
alerta2.append(texto2)

//Trae los valores del dom
function convertir() {
    let moneda1 = parseFloat(document.getElementById('moneda1').value);
    let moneda2 = document.getElementById('moneda2').value;
    multiplicar(moneda1, moneda2)
}

//realiza las operaciones
function multiplicar(conversion1, conversion2) {
    let resultado = parseFloat(conversion2 / conversion1);
    let cantidadDinero = parseFloat(document.getElementById('cantidadDinero').value);
    let rFinal = parseFloat(cantidadDinero * resultado);
    console.log(Number.isNaN(rFinal))
    console.log(rFinal)
    //Añade un elemento p con el valor convertido

    let alerta = document.createElement('p');
    let ale = document.getElementById('alerta1');
    ale.innerHTML = " "
    if (rFinal >= 0) {
        let texto = document.createTextNode(rFinal.toFixed(2) + '$');
        alerta.appendChild(texto);
        ale.appendChild(alerta);
        // document.getElementById('alerta1').appendChild(alerta);
    } else { 
        alert('Algo salio mal')
    }
}

//Document fragment
const myList = document.getElementById('mylist');
const docFrag = document.createDocumentFragment();

let item1 = document.createElement('li');
let item2 = document.createElement('li');
let item3 = document.createElement('li');
let item4 = document.createElement('li');
let item5 = document.createElement('li');

item1.textContent = ('Usd');
item2.textContent = ('Mxn');
item3.textContent = ('Cop');
item4.textContent = ('Euro');
item5.textContent = ('Libra');

docFrag.appendChild(item1);
docFrag.appendChild(item2);
docFrag.appendChild(item3);
docFrag.appendChild(item4);
docFrag.appendChild(item5);

myList.appendChild(docFrag)
