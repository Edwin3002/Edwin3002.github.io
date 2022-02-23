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

document.addEventListener('DOMContentLoaded', pintarCartas())
let space = document.getElementById('cartas');

async function pintarCartas(categoria1) {
    let data
    if (categoria1 == undefined) {
        data = await API
    } else if (categoria1 == 'original') {
        let resultado = API.filter(cat => cat.categoria == 'original')
        data = await resultado
        // console.log(data)
    } else {
        let resultado = API.filter(cat => cat.categoria == 'replica')
        data = await resultado
        // console.log(data)
    }
    space.innerHTML = ''
    data.forEach(element => {
        const { nombre, resumen, img, precio, categoria } = element;
        space.innerHTML += `
                <div class="card" style="width: 18rem;">
            <div class="mosaico">

                <img src="${img}" class="card-img-top" alt="..." onclick="pintarSola('${nombre}')">
            </div>
            <div class="card-body">
            <h5 class="card-title">${nombre}</h5>
            <p class="card-text fw-bold fs-3">${precio}$<button class="btn btn-dark float-end" type="button" id="agregar" onclick="pintarSola('${nombre}')">Comprar</button></p>
            </div>
        </div>`
    });
}

function pintarSola(name) {
    console.log(name)
    let resultado = API.filter(cat => cat.nombre == name)
    resultado.forEach(element => {
        const { nombre, resumen, img, precio, categoria } = element;
        space.innerHTML = `
        <div class="card cardSola mb-3" style="max-width: 98%;">
        <div class="row g-0">
        <div class="col-md-4 mosaico2">
            <img src="${img}" class="card-img-top" alt="...">
        </div>
        <div class="col-md-8 d-flex align-items-center">
            <div class="card-body">
            <h2 class="card-title text-uppercase">${nombre}</h2>

            <p class="card-text fs-3 fw-bold">${precio}$</p>
            <p class="card-text fs-3 resumen">${resumen}</p>
            <p class="card-text d-flex flex-row-reverse">  <button class="btn btn-dark " type="button" id="agregar" onclick="guardarCarrito('${img}', '${nombre}', '${precio}')">Agregar <i class="fas fa-shopping-cart"></i></button> <input id="nCantidad"  type="number" value="1"></p>
            </div>
        </div>
        </div>
    </div>
    `
    });
}

// pintar elementos en el carrito
let pedidoCarrito = []
let x = 0;
let precioFinal = 0;
function guardarCarrito(img, name, precio) {
    let carrito = document.getElementById('listarCarrito');
    let ncarrito = document.getElementById('nCarrito');
    let totalItems = document.getElementById('totalItems');
    let total = document.getElementById('total');
    let nCantidad = document.getElementById('nCantidad').value;
    let valorT = precio * nCantidad;
    x += parseInt(nCantidad);
    precioFinal += parseInt(valorT);
    // if (true) {
    //     x++;
    //     pedidoCarrito += [
    //         name + ', '

    //     ];
    //     // console.log(pedidoCarrito)
    //     // console.log(x)
    //     // console.log(precio)
    // }
    ncarrito.textContent = (`${x}`)
    totalItems.textContent = (`${x} `)
    total.textContent = (`${precioFinal} `)
    carrito.innerHTML += `
    <tr>
                    <td>
                    <h4 class="card-title">${name}</h4>
                    <div class="divCarrito"><img src="${img}" alt=""> </div>
                    </td>
                    <td>${nCantidad}</td>
                    <td>${precio}$</td>
                    <td>${valorT}$</td>
                </tr>
    `
    alert('Agregado')
   pintarCartas()
}