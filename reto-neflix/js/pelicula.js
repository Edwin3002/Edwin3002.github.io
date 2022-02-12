const apiMarvel2 = [
    {
        "id": 1,
        "img": "https://cl.buscafs.com/www.tomatazos.com/public/uploads/images/170592/170592.jpg",
        "name": "Iron Man",
        "year": 2008,
        "duration": 126,
        "resumen": "Tony Stark es un inventor de armamento brillante que es secuestrado en el extranjero. Sus captores son unos terroristas que le obligan a construir una máquina destructiva pero Tony se construirá una armadura para poder enfrentarse a ellos y escapar.",
        "actors": "Robert Downey Jr./Terrence Howard/Gwyneth Paltrow/Shaun Toub/Paul Bettany",
        "directors": "Jon Favreau"
    },
    {
        "id": 2,
        "img": "https://cl.buscafs.com/www.tomatazos.com/public/uploads/images/170597/170597.jpg",
        "name": "Hulk",
        "year": 2008,
        "duration": 112,
        "resumen": "Bruce Banner recorre el mundo en busca de un antídoto para librarse de su alter ego. Además tendrá que hacer frente a Emil, un nuevo enemigo, lo que convertirá a Nueva York en el escenario de la última batalla entre las dos criaturas más poderosas.",
        "actors": "Edward Norton/Liv TylerTim/Roth/Tim Blake Nelson/Ty Burrell",
        "directors": "Louis Leterrier"
    },
    {
        "id": 3,
        "img": "https://cl.buscafs.com/www.tomatazos.com/public/uploads/images/170599/170599.jpg",
        "name": "Iron Man 2",
        "year": 2010,
        "duration": 124,
        "resumen": "Con el mundo ahora consciente de que él es Iron Man, el millonario inventor Tony Stark debe forjar nuevas alianzas y enfrentarse a un nuevo y poderoso enemigo.",
        "actors": "Robert Downey Jr./Gwyneth Paltrow/Don Cheadle/Scarlett Johansson/Sam Rockwell",
        "directors": "Jon Favreau"
    },
    {
        "id": 4,
        "img": "https://cl.buscafs.com/www.tomatazos.com/public/uploads/images/170606/170606.jpg",
        "name": "Thor",
        "year": 2011,
        "duration": 115,
        "resumen": "Tras desatar una antigua guerra, el codicioso guerrero Thor es desterrado a la Tierra por su padre para que viva entre los hombres y descubra así el verdadero sentido de la humildad. Allí, sin sus poderes, Thor deberá enfrentarse a las fuerzas más oscuras que su mayor enemigo le enviará desde Asgard.",
        "actors": "Chris Hemsworth/Tom Hiddleston/Natalie Portman/Stellan Skarsgård/Idris Elba",
        "directors": "Kenneth Branagh"
    },
    {
        "id": 5,
        "img": "https://cl.buscafs.com/www.tomatazos.com/public/uploads/images/170605/170605.jpeg",
        "name": "Capitán América",
        "year": 2011,
        "duration": 124,
        "resumen": "Tras tres meses de someterse a un programa de entrenamiento físico y táctico, Steve Rogers es encomendado su primera misión como Capitán América. Armado con un escudo indestructible, emprenderá la guerra contra el Mal como líder de los Vengadores.",
        "actors": "Chris Evans/Hugo Weaving/Hayley Atwell/Sebastian Stan/Dominic Cooper",
        "directors": "Joe Johnston"
    },
    {
        "id": 6,
        "img": "https://cl.buscafs.com/www.tomatazos.com/public/uploads/images/170610/170610.jpg",
        "name": "Los Vengadores",
        "year": 2012,
        "duration": 143,
        "resumen": "El director de la Agencia SHIELD decide reclutar a un equipo para salvar al mundo de un desastre casi seguro cuando un enemigo inesperado surge como una gran amenaza para la seguridad mundial.",
        "actors": "Robert Downey Jr./Chris Evans/Jeremy Renner/Mark Ruffal/Chris Hemsworth",
        "directors": "Joss Whedon"
    },
    {
        "id": 7,
        "img": "https://cl.buscafs.com/www.tomatazos.com/public/uploads/images/170611/170611.jpg",
        "name": "Iron Man 3",
        "year": 2013,
        "duration": 130,
        "resumen": "El descarado y brillante Tony Stark, tras ver destruido todo su universo personal, debe encontrar y enfrentarse a un enemigo cuyo poder no conoce límites. Este viaje pondrá a prueba su entereza una y otra vez, y le obligará a confiar en su ingenio.",
        "actors": "Robert Downey Jr./Gwyneth Paltrow/Don Cheadle/Guy Pearce/Rebecca Hall",
        "directors": "Shane Black"
    },
    {
        "id": 8,
        "img": "https://cl.buscafs.com/www.tomatazos.com/public/uploads/images/170612/170612.jpg",
        "name": "Thor 2",
        "year": 2013,
        "duration": 112,
        "resumen": "Malekith, un enemigo más antiguo que el universo, regresa a la Tierra para cumplir su plan destructor. Thor debe enfrentarse a un rival al que ni siquiera Odín parece poder detener y, desesperado, libera a su hermano Loki para que lo ayude.",
        "actors": "Chris Hemsworth/Natalie Portman/Tom Hiddleston/Anthony Hopkins/Stellan Skarsgård",
        "directors": "Alan Taylor"
    }
    
];
const peliculas = apiMarvel2;
const pelicula = JSON.parse(localStorage.getItem('video'));
const rep = document.getElementById('peliculaClick')
let nombre 
window.addEventListener('DOMContentLoaded', async()=> {
    const {id, img, name, year,duration, resumen, actors, directors} = pelicula[0];
    nombre = name;
    
    rep.innerHTML = `
    <!-- imagen -->
    <div class="card border-0 bg-black marginUp text-white">
        <img src="${img}" class="card-img-top" alt="...">
    </div>

    <!-- contenido -->
    <ul class="nav flex-column">
        <div class="container-fluid">
            <h1 id="h1" class="text-white fw-bold">${name}</h1>
        </div>
        <div class="container-fluid">
            <h1 id="h1" class="text-white fw-bold">${year} - ${duration}: min.</h1>
        </div>
        <div class="container-fluid">
            <div class="d-grid gap-2">
                <button class="btn btn-light text-black"><i class="fa-solid fa-play"></i> Reproducir</button>
                <button class="btn btn-secondary" onclick="descargar(${id})"><i class="fa-solid fa-download" ></i></i> Descargar</button>
            </div>
        </div>
        <div class="container-fluid">
            <p class="fs-3 text-white">${resumen}</p>
        </div>
        <div class="container-fluid">
            <p class="fs-4 text-secondary">${directors}</p>
        </div>
        <div class="container-fluid text-secondary">
            <p class="fs-4">${actors}</p>
        </div>

    </ul>
    `
});
        const cartaSola = document.getElementById('resumen');
function show(){
    location.reload();
}

function getVideos() {
    try {
        pintarPeliculas(peliculas)
        return peliculas;
    } catch (error) {
        return console.log(error);
    }
}
getVideos()

function pintarPeliculas(peliculas) {
    let data = peliculas;
    data.forEach(peli => {
        const { id, img, name, year, duration, resumen, actors, directors } = peli;
        const cajaPeli = document.getElementById('cajaPeli');
        cajaPeli.innerHTML += `
            <div class="p-2 bd-highlight over" onclick="verPelicula(${id})"><img class="cover" src="${img}" alt=""></div>
            `
            //onclick="verPelicula(${id})" va por fuera
    });
}
function verPelicula(id){
    const data2 = peliculas.filter((video)=> video.id === id);
    console.log(data2)
    localStorage.setItem('video', JSON.stringify(data2))
    window.location.href = './pelicula.html';
}
function show(){
    location.reload();
}

function descargar(){
    alert("Descargando: " + nombre)
}