API = [
    {
        nombre: 'Nezuko',
        img: 'https://tierragamer.com/wp-content/uploads/2021/10/Kimetsu-no-Yaiba-Nezuko-Nendoroid-Doll-02.jpg',
        resumen: 'Es la hermana menor de Tanjiro. Ella fue transformada en Demonio por Muzan Kibutsuji acompañando a Tanjiro en su viaje para volver a ser humana. Es una de las protagonistas principales de Kimetsu no Yaiba.',
        precio: 70,
        categoria: 'original'
    },
    {
        nombre: 'Hinata',
        img: 'https://i0.wp.com/amaterasustore.co/wp-content/uploads/2021/02/nendoroid-haikyuu-1.jpg?ssl=1',
        resumen: 'Shōyō fue inspirado gracias a un partido en el que jugaba la preparatoria Karasuno, donde se encontraba "El Pequeño Gigante",un gran jugador conocido por su pequeña estatura y su gran capacidad de salto.',
        precio: 52,
        categoria: 'replica'
    },
    {
        nombre: 'Lucifer',
        img: 'https://1.bp.blogspot.com/-0v7ewfp2dyI/YIaFS-ZLG8I/AAAAAAADuqU/Oxbz-dTsUC8htKD8nPCBI5K4H8ClfaepgCLcBGAsYHQ/s1114/mj1.jpg',
        resumen: 'Lucifer es el octavo demonio encontrado en Helltaker. Ella asume el papel de la reina del infierno y tiene el mismo título: "CEO del infierno".',
        precio: 78,
        categoria: 'original'
    },
    {
        nombre: 'Rem',
        img: 'https://images-na.ssl-images-amazon.com/images/I/51%2BmsnrF-kL._AC_.jpg',
        resumen: 'Ella es la hermana gemela de Ram, con quien sobrevivió de un ataque del Culto de la Bruja a su aldea. Tras solo sobrevivir ella y su hermana, trabajo como criada para Roswaal.',
        precio: 54,
        categoria: 'replica'
    },
    {
        nombre: 'Albedo',
        img: 'https://2.bp.blogspot.com/-_7EbDHZ9ZnU/V2jW9wu37_I/AAAAAAABqR8/LvrDDObD1lot_kSKoQhS22pMqp_cvYLMACLcB/s1600/mj4.jpg',
        resumen: 'Albedo es la Supervisora de los Guardianes de la Gran Tumba de Nazarick. Está a cargo de la dirección general y supervisión de las actividades realizadas por los siete Guardianes de Piso.',
        precio: 66,
        categoria: 'original'
    },
    {
        nombre: 'Aqua',
        img: 'https://animecristal.com/wp-content/uploads/2021/09/Figura-Nendoroid-Swacchao-Aqua-05.jpg',
        resumen: 'Aqua es uno de los tres principales deuteragonistas de la serie KonoSuba. Antes de la vida en Fantasy World, ella era una diosa del agua que guiaba a los humanos al más allá.',
        precio: 56,
        categoria: 'replica'
    },
    {
        nombre: 'Rapthalia',
        img: 'https://m.media-amazon.com/images/I/416VFvx0bzL._AC_.jpg',
        resumen: 'Raphtalia es la deuteragonista de The Rising of the Shield Hero. Nacido en una aldea amiga de los demi-humanos en el país de Melromarc, que de otro modo discrimina a los demi-humanos.',
        precio: 68,
        categoria: 'original'
    },
    {
        nombre: 'Siesta',
        img: 'https://animecristal.com/wp-content/uploads/2021/11/Figura-Nendoroid-Siesta-The-Detective-01.jpg',
        resumen: '"Siesta", es un nombre en clave. Su arma principal es una pistola de mosquete, mientras que también tiene "Siete herramientas" que contienen poderes especiales.',
        precio: 80,
        categoria: 'replica'
    },
    {
        nombre: 'Zero Two',
        img: 'https://m.media-amazon.com/images/I/41Z9QAlgdFL._AC_.jpg',
        resumen: 'Es la heroína principal y el deuteragonista de Darling in the FranXX. Ella es un híbrido humano-klaxo sapien y miembro de la élite de pilotos de FRANXX.',
        precio: 76,
        categoria: 'original'
    },
    {
        nombre: 'Tohka',
        img: 'https://m.media-amazon.com/images/I/71hUF-7pn7L._AC_SL1000_.jpg',
        resumen: 'Tohka Yatogami es la hija de Mio Takamiya siendo la segunda Espíritu en ser creada y la segunda espíritu 100% pura. Tohka solía ser perseguida por miembros de la AST y DEM siempre que venía al mundo humano, por ende, creyó que todos los humanos querían matarla.',
        precio: 50,
        categoria: 'replica'
    },
]

// pintar elementos en el carrito
let C
let F
getLocalS();
function getLocalS() {
    let name = JSON.parse(localStorage.getItem('persona'));
    let cant = localStorage.getItem('cantidad');
    let precioF = localStorage.getItem('precioF');
    C = cant;
    F = parseInt(precioF)
    guardarCarrito(name)
}

function guardarCarrito(name) {
    name.forEach(elemento => {
        const { nombre, cant } = elemento;
        let resultado = API.filter(cat => cat.nombre == nombre)
        console.log(resultado)
        pintar(resultado, cant);
        console.log(cant)
    })
}
function pintar(array, nCantidad) {
    // console.log(precioFinal)
    let nCarrito = document.getElementById('nCarrito');
    let carrito = document.getElementById('listarCarrito');
    let totalItems = document.getElementById('totalItems');
    let total = document.getElementById('total');
    array.forEach(figura => {
        let { nombre, precio, img } = figura;
        let valorT = precio * nCantidad;
        nCarrito.textContent = (`${C}`)
        totalItems.textContent = (`${C} `)
        total.textContent = (`${F}$`)
        carrito.innerHTML += `
        <tr>
                    <td>
                    <h4 class="card-title">${nombre}</h4>
                    <div class="divCarrito"><img src="${img}" alt=""> </div>
                    </td>
                    <td>${nCantidad}</td>
                    <td>${precio}$</td>
                    <td>${valorT}$</td>
                </tr>
    `
    
    });
}

function vaciar(){
    localStorage.removeItem('persona');
    localStorage.removeItem('cantidad');
    alert('No hay productos en el carro')
}