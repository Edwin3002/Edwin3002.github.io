import { apiDbd } from "./dataDbd.js";
const cartas = document.getElementById('cartas');

console.log(apiDbd);
const showKillers = (Killers) => {
    cartas.innerHTML = ' ';

    Killers.forEach(element => {
        //Trae solo todos los objetos
        const { name, alias, resumen, image, id } = element;
        const pintarDiv = document.createElement('div');
        pintarDiv.classList.add('movies');

        pintarDiv.innerHTML = `
        <div class="card bg-dark" style="width: 18rem;">
            <img src="${image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="text-info" class="card-title">${name}</h5>
                <button type="button" class="btn btn-primary btnCarta" >${alias} <input class="kill" id="prodId" name="prodId" type="hidden" value="${id}"></button>
            </div>
        </div>
        `
        cartas.appendChild(pintarDiv)
    });
}
showKillers(apiDbd)

// let tarjeta = document.querySelectorAll('btnCarta');
// for (let t of tarjeta) {
//     t.addEventListener('click', sele);
//     function sele(){
//         console.log(t)
//     }
// }



// Trae una tarjeta al seleccionarla
let btnC = document.getElementsByClassName('btnCarta');
let array = []
for (let btn of btnC) {
    btn.addEventListener('click', display);
    
    //         // muestra solo una carta
    //         const cartaR = document.getElementById('cartaResumen');
    //         const showKill = (Kill) => {
    //             cartaR.innerHTML = ' ';

    //            function Kill() {
    //                 //Trae solo unos objetos, NO todos
    //                 const { name, alias, resumen, image, } = element;
    //                 const pintarDiv = document.createElement('div');
    //                 pintarDiv.classList.add('movies');

    //                 pintarDiv.innerHTML = `
    //     <div class="card bg-dark text-light resumen">
    //     <h2 class="card-title ">${name}</h2>
    //     <img src="${image}" class="card-img-top" alt="...">
    //     <div class="card-body">
    //         <h4 class="card-title text-info">${alias}</h4>
    //         <p class="card-text">${resumen}</p>
    //             <a href="./index.html" class="btn btn-primary btnCarta"">${alias}</a>
    //     </div>
    // </div>
    //     `
    //                 cartaR.appendChild(pintarDiv)
    //             };
    //         }
    //        showKill(apiDbd)
    function display() {
        alert('hola')
        array.push = btnC;
    console.log(array)
            let des = document.getElementById('carouselExampleIndicators')
            let card = document.getElementById('cartas');
            if (des.style.display != 'none') {
                des.style.display = 'none';
                card.style.display = 'none';
                console.log(btn);

                console.log('yes');
            } else {
                des.style.display = 'block';
                card.style.display = 'flex';
                console.log(btn)
                console.log('no')
            }
        }
    }

    //funcion buscar y capturar el formulario
    const form = document.getElementById('form')
    //escucha los eventos
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        //apturo el valor o lo que escriben ene el input search
        const search = document.getElementById('search').value;
        //realizo la busqueda
        const busqueda = apiDbd.filter(killer => killer.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
        //llamo a la funcion a las tarjetas con el filtro
        showKillers(busqueda)
    })


    // activa o bloquea los displays
    let boton = document.getElementById('activeCartas2');
    boton.addEventListener('click', hide);

    function hide() {
        let des = document.getElementById('carouselExampleIndicators')
        let card = document.getElementById('cartas')
        let info = document.getElementById('form-info')
        let tabla = document.getElementById('tabla')
        let active = document.getElementById("activeCartas1")
        let active2 = document.getElementById("activeCartas2")
        if (des.style.display != 'none') {
            des.style.display = 'none';
            active.classList.remove("active")
            active2.classList.add("active")
            card.style.display = 'none';
            info.style.display = 'block';
            tabla.style.display = 'block';
        }
    }
