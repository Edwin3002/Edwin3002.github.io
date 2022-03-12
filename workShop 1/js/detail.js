import getData from "./getData.js"

// const url = 'https://clothsapi.herokuapp.com/Cloths/';
const url = 'https://clothes-edwin.herokuapp.com/Clothes/';

let ropa
document.addEventListener('DOMContentLoaded', async () => {
    const data = await getData(url);
    ropa = data
    pintarCartas(ropa)
})
const carta = document.querySelector('.carta');

const getLocalStorage = () => {
  const det = JSON.parse(localStorage.getItem("Detalle"));
  const { name, description, img, price, id } = det;
  carta.innerHTML += `
  <section class="featured" id="featured">
  <div class="row">
      <div class="image-container">
          <div class="small-image">
              <img id="img_referencia" src="${img.img1}" class="featured-image-1" alt="">
              <img src="${img.img2}" class="featured-image-1" alt="">
              <img src="${img.img3} "class="featured-image-1" alt="">
              <img src="${img.img4}" class="featured-image-1" alt="">
          </div>
          <div class="big-image">
              <img src="${img.img1}" class="big-image-1" alt="">
          </div>
      </div>
      <div class="content">
          <h4 id="titulo-cloths">${name} </h4>

          <p> ${description}</p>
          <div class="price">${price} $</div>
          <div id="sizes">
            <input type="text" class="redondeado" value="S" disabled>
          <input type="text" class="redondeado" value="M" disabled>
          <input type="text" class="redondeado" value="L" disabled>
          <input type="text" class="redondeado" value="XL" disabled>
        </div>
        <button id="${id}" type="button" class="btn btn-primary btnAgregar">ADD TO CARD</button>
        <button type="button" class="btn btn-dark">BUY IT NOW</button>
        <!-- <a href="#" class="btn">add to cart</a>
          <a href="#" class="btn2">add to cart</a> -->
        </div>
      </div>
  </div>
</section>

  
    `

}
  

function pintarCartas(data) {
  let card = document.getElementById('similares');
    card.innerHTML = '';
    data.forEach(element => {
        const { name, img, price} = element;
        card.innerHTML += `
        <div class="card" style="width: 18rem;">
            <div class="mosaico">
                <img src="${img.img2}" class="card-img-top" alt="...">
            </div>
            <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text fw-bold fs-3">${price}$</p>
            
            </div>
        </div>
        `
    });
}

// añadir a carrito


carta.addEventListener('click', async(e) => {
    const btnAgregar = e.target.classList.contains('btnAgregar');
    const id = e.target.id;
    console.log(id)
    if(btnAgregar){
        localStorage.setItem("Compra",JSON.stringify(id));
    }else{
      console.log('algo fallo')
    }

})

document.addEventListener('DOMContentLoaded', getLocalStorage)

// pso2:Slider comienza con imagen principal desde 0
let slides = document.querySelectorAll('.slide-container');
let index = 0;


document.querySelectorAll('.featured-image-1').forEach(image_1 => {
  image_1.addEventListener('click', () => {
    var src = image_1.getAttribute('src');
    document.querySelector('.big-image-1').src = src;
  });
});

document.querySelectorAll('.featured-image-2').forEach(image_2 => {
  image_2.addEventListener('click', () => {
    var src = image_2.getAttribute('src');
    document.querySelector('.big-image-2').src = src;
  });
});

document.querySelectorAll('.featured-image-3').forEach(image_3 => {
  image_3.addEventListener('click', () => {
    var src = image_3.getAttribute('src');
    document.querySelector('.big-image-3').src = src;
  });
});

