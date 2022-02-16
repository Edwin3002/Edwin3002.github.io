// let datos = []
let boton = document.getElementById('calcular')
boton.addEventListener('click', calcular);
async function getInfo() {
    try {
        const resp = await fetch('https://imc-edwin.herokuapp.com/users');
        const data = await resp.json()
        return data
    } catch (error) {
        return console.log(error);
    }
}
async function getInfo2(gen) {
    try {
        const resp = await fetch(`https://imc-edwin.herokuapp.com/users?sexo=${gen}`);
        const data = await resp.json()
        return data
    } catch (error) {
        return console.log(error);
    }
}

// local Storage, calculos
function calcular() {
    let sex = document.getElementById('sex').value;
    let edad = document.getElementById('edad').value;
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;
    if (edad === '' || peso === '' || altura === ''){
        alert('faltan datos por llenar')
    }else{
    guardarObjeto(sex, edad, peso, altura)
    guardarLocalStorage(sex, edad, peso, altura)
    multiplicar(peso, altura)
    }
}

function guardarLocalStorage(sex, edad, peso, altura) {
    localStorage.setItem('Sexo', sex);
    localStorage.setItem('Edad', edad);
    localStorage.setItem('Peso', peso);
    localStorage.setItem('Altura', altura);
}

function multiplicar(peso, altura) {
    let result = peso / ((altura / 100) ** 2);
    let pintar = document.getElementById('resultado');
    pintar.innerHTML = `${(result).toFixed(2)} - masa corporal`
}

// me pinta el objeto del formulario
function guardarObjeto(sex, edad, peso, altura) {
    let obj = {
        sexo: sex,
        edad: edad,
        peso: peso,
        altura: altura
    };
    console.log(obj)
    function pintarOne(obj) {
        let listar = document.getElementById('listar');
        listar.innerHTML += ''
        // obj.forEach(users => {
        //     const { sexo, edad, peso, altura } = users;
            let result = peso / ((altura / 100) ** 2);
            let color
            if(result <= 18.4){
                
                color = 'background: blue;'
            } else if(result <= 24.9){
                color = 'background: green;'
            }else if(result <= 29.9){
                color = 'background: orange;'

            }else if(result <= 39.9){
                color = 'background: red;'

            }else{
                color = 'background: purple;'

            }
            console.log(color);
                
            listar.innerHTML += `
        <tr>
          <td >${obj['sexo']}</td>
          <td >${obj['edad']}</td>
          <td>${obj['peso']} kg</td>
          <td>${obj['altura']} cm</td>
          <td style="${color} color: white;">${result.toFixed(2)}</td>
        </tr>
    `;
    //     });
    }
    pintarOne(obj)
}

//pinta todo el json
async function pintarVideos(data) {
    if (data == undefined) {
        data = await getInfo()
    }
    let listar = document.getElementById('listar');
    listar.innerHTML = ''
    data.forEach(users => {
        const { sexo, edad, peso, altura } = users;
        let result = peso / ((altura / 100) ** 2);
        listar.innerHTML += `
    <tr>
      <td >${sexo}</td>
      <td >${edad}</td>
      <td>${peso} kg</td>
      <td>${altura} cm</td>
      <td class="resultadoT">${result.toFixed(2)}</td>
    </tr>
`;
    });
}
pintarVideos()

//filtro pintar
function pintarGen(gen) {
    let data =getInfo2(gen)
    let listar = document.getElementById('listar');
    listar.innerHTML = ''
    data.forEach(users => {
        const { sexo, edad, peso, altura } = users;
        let result = peso / ((altura / 100) ** 2);
        console.log(result)
        listar.innerHTML += `
    <tr>
      <td >${sexo}</td>
      <td >${edad}</td>
      <td>${peso} kg</td>
      <td>${altura} cm</td>
      <td class="resultadoT">${result.toFixed(2)}</td>
    </tr>
`;
    });
}

