

//2 capturar el boton enviar
let boton = document.getElementById('btnEnviar');
//3 llamar al controlador de eventos
boton.addEventListener('click',capturaDatos)

function capturaDatos(){
    let nombre = document.querySelector('#inputNombre').value;
    let apellido = document.querySelector('#inputApellido').value;
    let telefono = document.getElementById('inputTelefono').value;
    let direccion = document.getElementById('inputDireccion').value;
    let comentarios = document.getElementById('inputComent').value;
    
    guardarLocalStorage(nombre,apellido,telefono,direccion, comentarios);
    console.log(nombre,apellido,telefono,direccion, comentarios);
}

function guardarLocalStorage(nom,ape,tel,dir,con){

    localStorage.setItem('Nombre',nom);
    localStorage.setItem('Apellido',ape);
    localStorage.setItem('Teléfono',tel);
    localStorage.setItem('Dirección',dir);
    localStorage.setItem('Comentarios',con);
    listarData();
} 

//capturar la lista
let listar = document.getElementById('listar');


//capturamos el formulario
let form = document.getElementById('form');




//cargar la lista al cargar el DOM
//document.addEventListener('DOMContentLoaded',listarData)

//5 llamar al escuchador del evento
form.addEventListener('submit',formSumbit)

//6 funcion para prevenir el evento por defecto
function formSumbit(e){
    e.preventDefault();
  }

  function listarData(){
    
    let nombre = localStorage.getItem('Nombre');
    let apellido = localStorage.getItem('Apellido');
    let telefono = localStorage.getItem('Teléfono');
    let direccion = localStorage.getItem('Dirección');
    let comentarios = localStorage.getItem('Comentarios');
    listar.innerHTML += `
    <tr>
      <td>${nombre}</td>
      <td>${apellido}</td>
      <td>${telefono}</td>
      <td>${direccion}</td>
      <td>${comentarios}</td>
    </tr>
`;
}
