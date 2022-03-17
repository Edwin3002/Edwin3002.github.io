const add = (id) => {
  document.querySelector(`#cantidad${id}`).textContent =
    parseInt(document.querySelector(`#cantidad${id}`).textContent) + 1;
};

const delete_ = (id) => {
  if (
    parseInt(document.querySelector(`#cantidad${id}`).textContent) - 1 !==
    0
  ) {
    document.querySelector(`#cantidad${id}`).textContent =
      parseInt(document.querySelector(`#cantidad${id}`).textContent) - 1;
  }
};

const confirmarP = () => {
  let nombre = document.querySelector("#inputNombre").value;
  let telefono = document.querySelector("#inputCorreo").value;
  let tarjeta = document.querySelector("#inputTarjeta").value;
  let fecha = document.querySelector("#inputFecha").value;
  let cvv = document.querySelector("#inputCVV").value;

  let modalBody = document.getElementById('modalBody')
  if (
    nombre.length == 0 ||
    telefono.length == 0 ||
    tarjeta.length == 0 ||
    fecha.length == 0 ||
    cvv.length == 0
  ) {
    modalBody.innerHTML = `
    <div class="caja">
    <img class="gracias w-100" src="https://lhcampus.es/wp-content/uploads/2019/09/pago-cancelado.png" alt="Hands-Buying" border="0">
    </div>
                  <h2 class="text-center">!Pago errado, faltan datos por llenar! </h2>
                
    `
  } else {
    modalBody.innerHTML = `
    <div>
    <img class="gracias w-100"  src="https://i.ibb.co/YR71LpS/Hands-Buying.png" alt="Hands-Buying" border="0">
    </div>
                  <h2 class="text-center">!Thanks for your purchase! </h2>
                
    `
    localStorage.removeItem('carrito');
    const redirect = () => {
        window.location.href = `../html/index.html`
    }
     setTimeout(redirect, 4000)
  }
};

addEventListener('DOMContentLoaded', () => {
    let html = document.querySelector(".product-container");
    let carrito = JSON.parse(localStorage.getItem("carrito"));
    let total = 0;
    let counter = 1;
    carrito.forEach(element => {
        const { name, img, price, id, amount} = element;
        html.innerHTML+=`
        <div id="shop" class="card-body">
            <div class="shop-1">
            <div class="img">
            <img src="${img}" alt="" width="120">
            </div>
                <div class="shop-1-content">
                    <h3>${name}</h3>
                    <p>$${price}</p>
                </div>
            </div>
            <div class="shop-2">
            <button class="btn btn-warning shop-button" onclick="delete_(${counter})">-</button>
            <p class="shop-2-input text-center " id="cantidad${counter}" type="number">${amount}</p>
            <button class="btn btn-info shop-button" onclick="add(${counter})">+</button>
            </div>
        </div>
        `
        total+=price;
        counter+=1;
    });
    let payButton = document.querySelector("#pay-button");
    payButton.innerHTML = `Pagar $${total}`
})
