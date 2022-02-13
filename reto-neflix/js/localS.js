function capturaDatos() {
  let nombre = document.getElementById('inputNombre').value;
  let plan = document.getElementById('inputPlan').value;
  let telefono = document.getElementById('inputTelefono').value;
  let correo = document.getElementById('inputCorreo').value;
  console.log(nombre, plan, telefono, correo);
  // let array = [nombre, plan, telefono, correo]
  if (nombre === "" || plan === "" || telefono === "" || correo === ""){
    alert('Falta llenar un espacio')
  }else{
    alert("Registro exitoso")
  }
}
