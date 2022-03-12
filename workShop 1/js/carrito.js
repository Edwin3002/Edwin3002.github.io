import getData from "./getData.js"

const url = 'https://clothes-edwin.herokuapp.com/Clothes/';

let dt
document.addEventListener('DOMContentLoaded', async () => {
    const data = await getData(url);
    dt = data
    agregar();
})

function agregar() {
    let data = JSON.parse( localStorage.getItem("Compra"));
    console.log(data)
    guardarCarrito(data)
}
function guardarCarrito(cc) {
      console.log(cc)
      console.log(dt)
      let resultado = dt.filter(cat => cat.id == cc);
      console.log(resultado)
      pintar(resultado);

  }
  let carrito = document.getElementById('productosCarrito');

  function pintar(array) {
    array.forEach(figura => {
        let { name, price, img } = figura;
        carrito.innerHTML += `
        <div class="d-flex justify-content-evenly">
                        <img src="${img.img1}" class="img-fluid" style="width: 150px;"
                          alt="Generic placeholder image">
                      
                      <div class="flex-grow-1 ms-3">
                        <a href="#!" class="float-end text-black"><i class="fas fa-times"></i></a>
                        <h5 class="text-primary">${name}</h5>
                        <div class="d-flex align-items-center">
                          <p class="fw-bold mb-0 me-5 pe-3">${price}</p>
                        </div>
                        <div class="def-number-input number-input safari_only">
                          <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                            class="minus">-</button>
                          <input class="quantity fw-bold text-black" min="0" name="quantity" value="1" type="number">
                          <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                            class="plus">+</button>
                          </div>
                        </div>
                      </div>
    `
    });
}


// Cargar elementos del carrito cuando la pagina carg
// document.addEventListener('DOMContentLoaded', () => {
//   console.log(productos)

//   let carrito = document.getElementById('productosCarrito');
//   let response = localStorage.getItem('compra');
//   //Parseamos la informacion guardada del localStorag
//   let inf_carrito = JSON.parse(response)
// })

//     carrito.innerHTML = `

    // <div class="flex-shrink-0">
    //                       <img src="${inf_carrito.img.img1}" class="img-fluid" style="width: 150px;"
    //                         alt="Generic placeholder image">
    //                     </div>
    //                     <div class="flex-grow-1 ms-3">
    //                       <a href="#!" class="float-end text-black"><i class="fas fa-times"></i></a>
    //                       <h5 class="text-primary">${inf_carrito.name}</h5>
    //                       <div class="d-flex align-items-center">
    //                         <p class="fw-bold mb-0 me-5 pe-3">${inf_carrito.price}</p>
    //                       </div>
    //                       <div class="def-number-input number-input safari_only">
    //                         <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
    //                           class="minus">-</button>
    //                         <input class="quantity fw-bold text-black" min="0" name="quantity" value="1" type="number">
    //                         <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
    //                           class="plus">+</button>
    //                       </div>
    //                     </div>
    //                   </div>

// `


//validaciones y confirmar pedido

// let pagar_boton = document.getElementById("pagar")

// pagar_boton.addEventListener('click', () => {
// console.log('validacion')

// })

let pagar = document.getElementById('pagarForm')
pagar.addEventListener('submit', validacion())
function validacion(){

    let titular = document.getElementById("titular").value;
    let tarjeta = document.getElementById("tarjeta").value;
    let expiracion = document.getElementById("expiracion").value;
    let clave = document.getElementById("clave").value;
    console.log(titular, tarjeta, expiracion, clave)
    

    if (titular.length == 0 || tarjeta.length == 0 || expiracion.length == 0 || clave.length == 0){
        alert('Faltan datos por llenar')
    }else{
    alert(`Se han confirmado pedidos para ${nombre}`)
    }

console.log('validacion')
}






