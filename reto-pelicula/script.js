// import { apiDbd } from "./dataDbd.js";
const apiDbd = [
    {
        "id": 1,
        "name": "Pyramid Head",
        "alias": "The Executioner",
        "resumen": "Pertrechado con un casco de metal en la cabeza y una espada descomunal a la espalda, acechaba entre los pasillos infernales de Silent Hill, comprometido con un deber que nadie llegaba a entender del todo. Hasta los monstruos huían nada más verlo para buscar cobijo entre las sombras, y aquellos que se cruzaban en su camino caían víctimas de actos de agresividad descontrolada.",
        "image": "./Dbd/db1.jpg"
    },
    {
        "id": 2,
        "name": "	Anna",
        "alias": "The Huntress",
        "resumen": "Anna y su madre acechaban a un alce grande en el bosque. Sabían que era una presa peligrosa, pero había sido un invierno especialmente difícil y casi no les quedaba comida. La idea de morir de hambre les daba más miedo que cualquier criatura del bosque. De improviso, el alce se alzó, bramó y atacó a Anna. Ella se quedó paralizada del miedo mientras el mundo entero parecía agitarse bajo los pisotones de la inmensa bestia. El alce estaba tan cerca que Anna vio la furia asesina en sus ojos cuando su madre se interpuso, hacha en mano.",
        "image": "./Dbd/db2.png"
    },
    {
        "id": 3,
        "name": "Rin Yamaoka",
        "alias": "The Spirit",
        "resumen": "Rin era la única descendiente de la familia Yamaoka. Se crió en las polvorientas paredes de una casa tradicional de Kagawa. Estudió Educación en Takamatsu, una universidad privada, lo cual supuso un duro golpe a la ya de por sí precaria situación financiera de la familia. Ese mismo año, su madre enfermó y las facturas comenzaron a acumularse. Rin consiguió un trabajo a tiempo parcial en un esfuerzo inútil por tratar de mejorar la situación económica familiar.",
        "image": "./Dbd/db3.png"
    },
    {
        "id": 4,
        "name": "Leatherface",
        "alias": "The Cannibal",
        "resumen": "Leatherface, alias Cara Cuero, no mata por deseo de imponer su voluntad a los demás, satisfacer necesidades carnales o silenciar a las voces de su cabeza. Mata porque tiene miedo: de que le hagan daño, de que su familia se enfade con él, de que se descubran sus costumbres de comer carne humana….",
        "image": "./Dbd/db4.png"
    },
    {
        "id": 5,
        "name": "Demogorgon",
        "alias": "The Beast",
        "resumen": "Una boca floreciente llena de dientes en forma de aguja por cara, garras grandes, curvas y afiladas, y piernas poderosas para atacar a las víctimas, hacen de El Demogorgon un monstruo aterrador para enfrentar en cualquier dimensión. Es una pesadilla de ira salvaje y desenfrenada mientras caza a su presa y la rompe en pedazos, devorando hasta el último bocado de carne y sangre, sin dejar nada para los carroñeros.",
        "image": "./Dbd/db5.png"
    },
    {
        "id": 6,
        "name": "Jed Olsen",
        "alias": "The Ghost Face",
        "resumen": "Danny Johnson, conocido por algunos como Jed Olsen, cogió el periódico que estaba sobre la encimera. Era de hacía una semana, pero en la portada aparecía su cara, hundida y borrosa. Era una de esas tardes de bochorno de Florida en las que el calor y la humedad impregnaban toda la cocina, haciendo que fuera imposible no sudar. Se arrellanó en una silla húmeda a leer. Esperaba que el artículo fuera bueno, porque había hecho un trabajo excepcional en Roseville.",
        "image": "./Dbd/db6.png"
    },
    {
        "id": 7,
        "name": "Nemesis T-Type",
        "alias": "The Nemesis",
        "resumen": "Creado por la corporación Umbrella, Némesis es un arma bioorgánica prácticamente invencible cuyo único objetivo es cazar y aniquilar a sus objetivos. Este espécimen forma parte de la serie Tyrant T-103 y posee una inteligencia y consciencia mayores gracias al Parásito NE-α Unknown QuestionMark.png que lleva implantado. Su primera misión fue en Raccoon City, donde tenía un objetivo específico: exterminar a los miembros de S.T.A.R.S. Némesis devastó la ciudad y se enfrentó varias veces a Jill Valentine.",
        "image": "./Dbd/db7.png"
    },
    {
        "id": 8,
        "name": "Talbot Grimes",
        "alias": "The Blight",
        "resumen": "Para comprender la condición humana, hay que superponerse a ella. Ese era el credo de Talbot Grimes, un químico escocés cuya ambición desenfrenada lo llevó a lo más alto. De niño era muy popular; un chico inteligente y carismático al que no le daba miedo enfrentarse a la autoridad. A pesar de sus habilidades sociales, tenía un carácter muy independiente y pasaba muchísimo tiempo explorando en solitario los inmensos campos que había cerca de su ciudad.",
        "image": "./Dbd/db8.png"
    },
    {
        "id": 9,
        "name": "Ji-Woon Hak",
        "alias": "The Trickster",
        "resumen": "Ji-Woon Hak se crecía cuando llamaba la atención de los demás; se sentía más vivo con cada mirada que se clavaba en él y con cada lengua que pronunciaba su nombre. Entre todo aquel prestigio, solo tenía un único anhelo: conseguir más. Desde que era niño sabía cómo enamorar al público. Trabajaba en el restaurante de la familia y atraía a los clientes con su espectáculo de lanzamiento de cuchillos.",
        "image": "./Dbd/db9.jpg"
    },
    {
        "id": 10,
        "name": "Freddy Krueger",
        "alias": "The Nightmare",
        "resumen": "Incluso en vida, Freddy Krueger fue una criatura de pesadilla para aquellos que lo conocieron de verdad. Oculta tras una máscara de amabilidad y simpatía, Freddy solo revelaba su auténtica naturaleza a sus víctimas. Cuando los padres de Springwood se enteraron, salieron a dar caza a Freddy y se tomaron la justicia por su mano. Pensaron que el fuego les había librado de un monstruo aquella noche, y que sus hijos por fin estarían a salvo.",
        "image": "./Dbd/db10.png"
    },
];
const cartas = document.getElementById('cartas');

console.log(apiDbd);
const Killers = apiDbd;
const showKillers = (Kill) => {
    cartas.innerHTML = '';
    Kill.forEach(element => {
        //Trae solo todos los objetos
        const { name, alias, resumen, image, id } = element;
        const pintarDiv = document.createElement('div');
        pintarDiv.classList.add('movies');

        pintarDiv.innerHTML = `
        <div class="card bg-dark " style="width: 18rem;" >
            <img src="${image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="text-info" class="card-title">${name}</h5>
                <button type="button" class="btn btn-primary btnCarta" onclick="verCarta(${id})" >${alias}</button>
            </div>
        </div>
        `
        cartas.appendChild(pintarDiv)
    });
}
showKillers(Killers)

// Trae una tarjeta al seleccionarla
function verCarta(id){
    const data2 = Killers.filter((killer1)=> killer1.id === id);
    console.log(data2)
    data2.forEach(k => {
        const { name, alias, resumen, image} = k;
        const cartaSola = document.getElementById('resumen');
        cartaSola.innerHTML = `
        <div class="card bg-dark text-light resumen">
        <h2 class="card-title scary">${name}</h2>
        <img src="${image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h4 class="card-title text-info">${alias}</h4>
            <p class="card-text">${resumen}</p>
            <a href="#" class="btn btn-primary btnCarta"" onclick="show()">Back</a>
    </div>
            `
    });
}
function show(){
    location.reload();
}

let btnC = document.getElementsByClassName('btnCarta');
for (let btn of btnC) {
    btn.addEventListener('click', display);
    function display() {
            let des = document.getElementById('carouselExampleIndicators')
            let card = document.getElementById('cartas');
            if (des.style.display != 'none') {
                des.style.display = 'none';
                card.style.display = 'none';
                console.log(btn);
            } else {
                des.style.display = 'block';
                card.style.display = 'flex';
                console.log(btn)
            }
        }
    }

    //funcion buscar y capturar el formulario
    const form1 = document.getElementById('form')
    //escucha los eventos
    form1.addEventListener('submit', (e) => {
        e.preventDefault();
        //apturo el valor o lo que escriben ene el input search
        const search = document.getElementById('search').value;
        //realizo la busqueda
        const busqueda = apiDbd.filter(killer => killer.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
        //llamo a la funcion a las tarjetas con el filtro
        showKillers(busqueda)
    })

    // activa o bloquea los displays
    let boton1 = document.getElementById('activeCartas2');
    boton1.addEventListener('click', hide);

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

