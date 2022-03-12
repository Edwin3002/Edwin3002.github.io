// const urlUser = 'https://clothsapi.herokuapp.com/Cloths/';
const urlUser = 'http://localhost:3003/Clothes/';

const tbody = document.querySelector('tbody');
const form = document.querySelector('.form-group');

const getUsers = async () => {

    const resp = await fetch(urlUser);
    const users = await resp.json();
    console.log(users)
    users.forEach(element => {
        const { img, name, price, description, id } = element;
        tbody.innerHTML += `
        <tr>
            <td class="tdImg">
            <img src=${img.img1}>
            <img src=${img.img2}>
            <img src=${img.img3}>
            <img src=${img.img4}>
            </td>
            <td>${name}</td>
            <td>${price}</td>
            <td>${description}</td>
            <td><a id=${id} href="#" class="btn btn-danger eliminar">Delete</a></td>
        </tr>
        `
    });
}

document.addEventListener('DOMContentLoaded', getUsers)


tbody.addEventListener('click', async (e) => {
    // e.defaultPrevented();
    const btnDelete = e.target.classList.contains('eliminar');
    const id = e.target.id;
    if (btnDelete) {
        await fetch(urlUser + id, {
            method: 'DELETE'
        })
    }
})

form.addEventListener('submit', async (e) => {
    // e.preventDefault();
    const img1 = document.getElementById('inputImg1').value;
    const img2 = document.getElementById('inputImg2').value;
    const img3 = document.getElementById('inputImg3').value;
    const img4 = document.getElementById('inputImg4').value;
    const name = document.getElementById('inputName').value;
    const price = document.getElementById('inputPrice').value;
    const description = document.getElementById('inputDescription').value;
    console.log(name,price,description)
    // const valid = await validarName(name)

    if (false) {
        alert(`Ya existe la prenda ${name}`)
    } else {
        const obj = {
            name,
            img:{
                img1,
                img2,
                img3,
                img4
            },
            description,
            price
        }

        await fetch(urlUser, {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        })
    }
})

const validarName = async (name) => {

    const resp = await fetch(urlUser);
    const data = await resp.json();
    const result = data.find(dat => dat.name.toLocaleLowerCase() === name.toLocaleLowerCase())
    if (result === undefined) {
        return false
    }
    else {
        return true
    }
}