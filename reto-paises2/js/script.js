import getData from "./getData.js"
import getRegion from "./getRegion.js"
import {showData} from './showData.js'

const urlPaises = 'https://restcountries.com/v3.1/all';
const element = document.querySelector('#cartas');

let paises
document.addEventListener('DOMContentLoaded', async() => {
    const data = await getData(urlPaises);
    paises = data
    console.log(data)
    showData(data,element);

})


//trae el valor del select
const selectElement = document.querySelector('#region');

selectElement.addEventListener('change', async (event) => {
    let continente = event.target.value
    // console.log(continente)
    if(continente!=='All'){
        const filtro = await getRegion(continente);
        console.log(filtro)
        showData(filtro,element);
    } else {
        const all = await getData(urlPaises);
        showData(all,element);
    }
});


//funcion buscar y capturar el formulario
const form1 = document.getElementById('form')
//escucha los eventos
form1.addEventListener('submit', (e) => {
    e.preventDefault();
    //apturo el valor o lo que escriben ene el input search
    const search = document.getElementById('search').value;
    //realizo la busqueda
    const busqueda = paises.filter(pais => pais.name.common.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
    //llamo a la funcion a las tarjetas con el filtro
    console.log(busqueda)
    showData(busqueda,element);
})
