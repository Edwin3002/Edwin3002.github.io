let formulario = document.getElementById('formulario');
let citas = [];


formulario.addEventListener('submit', e =>{
    e.preventDefault();
    console.log(e);
    let nombre = document.getElementById('nombre').value;
    let fecha = document.getElementById('fecha').value;
    let hora = document.getElementById('hora').value;
    let sintomas = document.getElementById('sintomas').value;
    console.log(nombre )
    console.log(fecha )
    console.log(hora)
    if(nombre === '' || fecha === '' || hora === '' || sintomas === ''){
        alert('faltan datos por llena')
    }else{
    capturarDatos(nombre,fecha,hora,sintomas);
    document.getElementById('formulario').reset();
    // nombre.value= '';
    }
});

const capturarDatos = (nombre,fecha,hora,sintomas) => {
    
    // if (nombre ==== )
    let registarCita = {
        id: Math.round(Math.random()*(100-1)+1),
        nombre,
        fecha,
        hora,
        sintomas,
    }
    console.log(registarCita)
    const key = JSON.parse(localStorage.getItem('citas'));


    if (key !== null){
        console.log(key)
        key.unshift(registarCita)
        localStorage.setItem('citas', JSON.stringify(key))
    }else{
        citas.unshift(registarCita);
        localStorage.setItem('citas', JSON.stringify(citas))
    }
    getLocalS()
}

let listarCitas = document.getElementById('listarCita');

const getLocalS= () => {
    listarCitas.innerHTML = '';
    let traerCitaLocalS = JSON.parse(localStorage.getItem('citas'));
    console.log(traerCitaLocalS)
    traerCitaLocalS.map(cita =>{
        const {id, nombre, fecha, hora, sintomas} = cita;
        listarCitas.innerHTML += ` 
        <tr>
                            <td>${nombre}</td>
                            <td>${fecha}</td>
                            <td>${hora}</td>
                            <td>${sintomas}</td>
                            <td><button id="${id}" class="btn btn-danger" >Delete</button></td>
                          </tr>
        `
    })
}

document.addEventListener('DOMContentLoaded', getLocalS);

listarCitas.addEventListener('click', e=>{
    console.log(e)
    const btnDelete = e.target.classList.contains('btn-danger');
    const id = e.target.id;

    const local = JSON.parse(localStorage.getItem('citas'));

    const buscar =  local.find(data => data.id === Number(id));
    console.log(buscar)

    if(btnDelete){
        local.forEach((element, index)=>{
            if(element.id === buscar.id){
                local.splice(index, 1);
                localStorage.setItem('citas', JSON.stringify(local));
                getLocalS();
            }
        })
    }
})

let search = document.getElementById('busqueda');
let btnBuscar = document.getElementById('btnBuscar');

btnBuscar.addEventListener('click', e => {
    e.preventDefault();

    let inputB = document.getElementById('inputBuscar').value;
    let data = JSON.parse(localStorage.getItem('citas'));
    console.log(data)
    let filtro = data.filter(cita => cita.nombre.toLowerCase().includes(inputB.toLowerCase()));
    console.log(filtro)
    console.log(inputB)

    search.innerText = '';

    if (inputB === ''){
    search.innerHTML = ` <div>El nombre ${inputB}, No existe</div>`
    console.log('no existe')
    }else{
        filtro.map(cita =>{
            const {nombre, fecha, hora, sintomas} = cita
            search.innerHTML += `
            <div>
            El nombre ${nombre}
            </div>`;
        
        })
    }
})