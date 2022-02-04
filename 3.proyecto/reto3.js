function multiplicar(cantidad, valorJuego) {
    const valorTotal = cantidad * valorJuego;
    return valorTotal;
}

function preciovalorJuego() {
    const cantidadJ = document.getElementById("cantidadJuego").value;
    const precioJ = document.getElementById("precioJuego").value;
    const precioConvalorJuego = multiplicar(cantidadJ, precioJ);

    const precioTotal = document.getElementById("precioT");
    precioTotal.value = precioConvalorJuego;
    const descuento = document.getElementById("descuento").value;
    const Total = document.getElementById("total");
    Total.value = precioConvalorJuego - (precioConvalorJuego * (descuento/100));

    if (descuento == 0){   
        var alerta = document.createElement('p');
        var texto = document.createTextNode('No existe descuento');
        alerta.appendChild(texto);
        document.getElementById('ale').appendChild(alerta);
    }else{
        document.getElementById('ale').remove('multi')
    };
    var div = document.getElementById('multi');
    div.classList.add('multi');
    var div2 = document.getElementById('quitar');
    div2.classList.remove('quitar');
}
