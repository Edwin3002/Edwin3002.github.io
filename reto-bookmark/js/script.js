UrlGit = 'https://api.github.com/users/'

const git = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    pintar(data)
}
let f = document.getElementById('form');
f.addEventListener('submit', e => {
    e.preventDefault();
    // console.log(e)
    let user = document.getElementById('github').value;
    console.log(user)
    newUrl = UrlGit + user
    git(newUrl)

});
let modal = document.getElementById('modal');
function pintar(data) {
    modal.innerHTML = `
        <div class="card" style="width: 18rem;">
        <h4>${data.login},s github</h4>
        <img src="${data.avatar_url}" class="card-img-top" alt="...">
        <ul class="list-group list-group-flush">
        <li class="list-group-item">${data.name}</li>
        <li class="list-group-item">${data.location}</li>
        </ul>
        <button type="button" class="btn btn-danger W-50" onclick="cerrar()">Cerrar</button>
        </div>
        `
}

function cerrar() {
    modal.innerHTML = '';
    alert('Te estoy vigilando')
    document.getElementById('form').reset();
}
let img = document.getElementById('imagenBook');
let navH = document.getElementById('navH');
let navP = document.getElementById('navP');
let img1 = '../images/illustration-features-tab-1.svg';
let img2 = '../images/illustration-features-tab-2.svg';
let img3 = '../images/illustration-features-tab-3.svg';
let idImg1 = document.getElementById('imagen1');
let idImg2 = document.getElementById('imagen2');
let idImg3 = document.getElementById('imagen3');
let h1 = 'Bookmark in one click';
let h2 = 'Intelligent search';
let h3 = 'Share your bookmarks';
let p1 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quod consectetur quisquamatque eum eius quo repellendus maiores, in consequuntur optio, blanditiis inventore, nobis ataccusantium animi veritatis suscipit tempora.'
let p2 = "Maxime neque amet dignissimos architecto error perferendis, eius nam autem nulla numquam nemo, ducimus consectetur iure quo sit laborum? Velit, id assumenda delectus soluta ea aliquam exercitationem blanditiis accusamus animi."
let p3 = 'Itaque harum sit repellat aspernatur ad esse! Omnis blanditiis at, placeat perferendis fugiat iure distinctio, reiciendis beatae animi, neque expedita totam consectetur! Hic magni qui nulla cum veniam, dolore adipisci?'
document.addEventListener('DOMContentLoaded', imagen());


function imagen(picture, id, h, p) {
    if (picture == undefined) {
        picture = img1
        id = idImg1
        h = h1
        p = p1
    }

    idImg1.classList.remove('btnA')
    idImg2.classList.remove('btnA')
    idImg3.classList.remove('btnA')
    id.classList.add('btnA')
    img.innerHTML = `
    <img id="imagenB2" src="${picture}" class="img-fluid rounded-start fondoImg2" alt="...">
    <div class="fondo2"></div>
    `
    navH.innerHTML = `${h}`
    navP.innerHTML = `${p}`
}

