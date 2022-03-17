// urlCartas = "http://localhost:8000/Food/"
urlCartas = "https://food-ed.herokuapp.com/Food/"
urlOne = "https://clothes-edwin.herokuapp.com/Clothes/"

const getData = async (url) => {
  const resp = await fetch(url);
  const data = resp.json();
  // console.log(data)
  return data;
};

addEventListener("DOMContentLoaded", async () => {
  const data = await getData(urlCartas);
  pintarCartas(data);
})

// pintarCartas

function pintarCartas(data) {
  console.log(data)
  let cartas = document.getElementById('cartas');
  let modalFooter = document.getElementById('modalFooter');
  cartas.innerHTML = ''
  data.forEach(element => {
    const { name, img, price, id, discount } = element;
    let m1 = price * (discount/ 100);
    let priceD = price - m1
    console.log(priceD)
    
    cartas.innerHTML += `
        <div class="card" style="width: 13rem;">
        <div class="descuento fw-bold">${discount}% dto.</div>

        <div class="padreImg">
        <img src="${img}" width="100%"class="card-img-top">
        </div>
        <div class="card-body">
        <p class="card-text fw-bold">$${priceD.toFixed(2)}/Kg <span class="text-muted text-decoration-line-through"> $${price}/Kg</span></p>          
        <p class="card-title text-capitalize">${name}</p>
          <a href="#"><button class="btn btnLook text-light w-100 agregar2" data-bs-toggle="modal" data-bs-target="#exampleModal2" onclick="pintarSola('${id}')">Ver más</button></a>  
          
        </div>
      </div>
        `;
        
  });
}

// ver mas local storage modal
function saveLocalS(id) {
  localStorage.setItem("llave", id);
  console.log(id);
}

// pintar carta en el modal
async function pintarSola(id) {
  url1 = "https://food-ed.herokuapp.com/Food/" + id;
  const f = await getData(url1);
  let space = document.getElementById("verSola");
  let m1 = f.price * (f.discount/ 100);
  let priceD = f.price - m1
  space.innerHTML = `
        <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
                <div class="card mb-3" style="max-width: 100w0px;">
            <div class="row g-0">
                <div class="col-md-4 d-flex align-items-center">
                    <img src="${f.img}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h2 class="card-title fw-bolder">${f.name}</h2>
                        <h3 class="card-text fw-bold">$${priceD}/Kg</h3>
                        <p class="card-text">Precio con IVA incluido</p>
                        <p class="card-text">Peso aproximado por pieza, pueda variar de acuerdo al peso real</small></p>
                        <h5 for="" class="fw-bold">Selecciona la madurez que desea</h5>
                        <form action="" id="addFruit">
                          <select class="form-select" id="madurez" aria-label="Default select example">
                              <!-- <option selected>Open this select menu</option> -->
                              <option value="maduro">Maduro (Para hoy)</option>
                              <option value="normal">Normal (3-5 días)</option>
                              <option value="verde">verde (7 días)</option>
                            </select>
                            <div class="btnPesoAdd">                          
                              <input type="number" id="peso" class=" peso" placeholder="Cantidad en U. " min="1" max="100" required>
                              <button type="button"  class="btn btnAdd w-50 " onclick="guardarCarrito('${id}')">Agregar</button>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer" id="modalFooter">
        </div>
                </div>
            </div>
        </div>

  `;
}
let addFruit = document.getElementById('addFruit');
// addFruit.addEventListener('submit', async (id), =>{
  let x = 0;
  let precioF = 0;
  let conjunto = []
const guardarCarrito = async (id,) => {

  let cant = document.getElementById('peso').value;
  console.log(cant)
  x += Number(cant)
  let item = await getData(
    `https://food-ed.herokuapp.com/Food/${id}`
    );
    let precioT= item.price * Number(cant)
    precioF += Number(precioT)
    let m1 = precioF * (item.discount/ 100);
    let priceD = precioF - m1
    console.log(item)
    let cnt = {amount:cant}
    let item2 = Object.assign(item,cnt)
    console.log(item)
    console.log(item2)
  let carrito_actual = JSON.parse(localStorage.getItem("carrito"));
  let shop_cart = document.querySelector("#shop-cart");

  if (!localStorage.getItem("carrito")) {
    console.log(precioT.toFixed(2) + ",1")
    
    let carrito = [item2];
    localStorage.setItem("carrito", JSON.stringify(carrito));
    localStorage.setItem("cantidad", JSON.stringify(x));
    localStorage.setItem("precioF", JSON.stringify( Number(priceD.toFixed(2))));
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Producto agregado al carrito!",
      showConfirmButton: false,
      timer: 1500,
    });
    shop_cart.textContent = ` ${x}`;
  } else {
    let existe = carrito_actual.find((e) => e.name === item.name);
    if (!existe) {
      console.log(precioT.toFixed(2) + ",2")
      carrito_actual.push(item2);
      localStorage.setItem("carrito", JSON.stringify(carrito_actual));
      localStorage.setItem("cantidad", JSON.stringify(x));
      localStorage.setItem("precioF", JSON.stringify(Number(priceD.toFixed(2))));
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Producto agregado al carrito!",
        showConfirmButton: false,
        timer: 1500,
      });

      shop_cart.textContent = ` ${x}`; /////se modifica el valor del carro
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "El producto ya esta en el carrito!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    // console.log(`Tipo: ${typeof carrito_actual} Contenido: ${carrito_actual}`);
  }
};

// ver mas local storage carrito
function guardarLocalS(id, madurez, peso) {
  localStorage.setItem("llave", id);
  console.log(id);
}

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

let shopCartButton = document.querySelector("#shop-cart");

shopCartButton.addEventListener("click", async () => {
  const shopCart = await JSON.parse(localStorage.getItem("carrito"));
  const shopCartHTML = document.querySelector("#shopCartModal");
  if (!shopCart) {
    shopCartHTML.innerHTML = ``;
    document.querySelector(".shopCartButtons").style.display = `none`;
    document.querySelector(".emptyShopCart").style.display = `flex`;
  } else {
    document.querySelector(".emptyShopCart").style.display = `none`;
    document.querySelector(".shopCartButtons").style.display = `flex`;
    shopCartHTML.innerHTML = ``;
    let total = 0;
    let counter = 1;
    shopCart.forEach((element) => {
      const { id, name, price, img, discount, amount } = element;
      let m1 = price * (discount/ 100);
      let priceD = price - m1
      shopCartHTML.innerHTML += `
      <div id="shop" class="card-body d-flex justify-content-between">
      <div class="shop-1">
          <img src="${img}" alt="" width="70">
          <div class="shop-1-content">
              <p class="fs-5">${name}</p>
              <p class="fw-bold">$${priceD} U.</p>
          </div>
      </div>
      <div class="shop-2">
      <button class="btn btn-warning shop-button" onclick="delete_(${counter})">-</button>
      <p class="shop-2-input text-center " id="cantidad${counter}" type="number">${amount}</p>
      <button class="btn btn-info shop-button" onclick="add(${counter})">+</button>
      </div>
      </div>
      `;
      counter += 1;
    });
    let shopButton = document.querySelector("#shop-button");
    let x = localStorage.getItem('cantidad')
    let totalPrecio = localStorage.getItem('precioF')
    shopButton.innerHTML = `<span class="n">${x}</span> - Ir a pagar - $${totalPrecio}`;
    shopButton.addEventListener("click", () => {
      window.location.href = `../html/pagar.html`;
    });
  }
});

let cleanButton = document.querySelector("#cleanCarrito");

cleanButton.addEventListener("click", () => {
  localStorage.removeItem("carrito");
  localStorage.removeItem("cantidad");
  localStorage.removeItem("precioF");
  document.querySelector("#shopCartModal").innerHTML = ``;
  document.querySelector(".emptyShopCart").style.display = `flex`;
  document.querySelector(".shopCartButtons").style.display = `none`;
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Carrito vaciado",
    showConfirmButton: false,
    timer: 1500,
  });
  let shop_cart = document.querySelector("#shop-cart");
  shop_cart.textContent = ``;
});
function city(){
  let inputAdress = document.getElementById('inputAdress').value;
  console.log(inputAdress)
  let adress = document.getElementById('adress');
  adress.textContent= `${inputAdress}`;
}