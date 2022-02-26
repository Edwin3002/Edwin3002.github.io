let C
getLocalS();

function getLocalS() {
    let nCarrito = document.getElementById('nCarrito');
    let cant = localStorage.getItem('cantidad');
    C = cant;
    console.log(C)
    if (C == null){
        nCarrito.textContent = (``)
    } else{
        nCarrito.textContent = (`${C}`)

    }
}



//validaciones y confirmar pedido
function confirmarP() {
    let nombre = document.getElementById("inputNombre").value;
    let telefono = document.getElementById("inputCorreo").value;
    let tarjeta = document.getElementById("inputTarjeta").value;
    let fecha = document.getElementById("inputFecha").value;
    let cvv = document.getElementById("inputCVV").value;
    
    if(C == null){
        alert('No hay nada en el carro')
    }else if (nombre.length == 0 || telefono.length == 0 || tarjeta.length == 0 || fecha.length == 0 || cvv.length == 0){
        alert('Faltan datos por llenar')
    }else{
    alert(`Se han confirmado ${C} pedidos para ${nombre}`)
    borrarLocalS();
    }
}

function borrarLocalS(){
    localStorage.removeItem('persona');
    localStorage.removeItem('cantidad');
    window.location.href = './productos.html'
}