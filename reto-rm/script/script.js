const API_RM = 'https://rickandmortyapi.com/api/character/?page=1';
const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

const getMovies2 = async (url) => {
    try {
        const res = await fetch(url)
        const data = await res.json()
        console.log(data.results)
        if (data.results.length === 0) {
            swal.fire({
                title: 'Error!',
                text: 'No se ha encontrado ninguna pelicula',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            })
        
        } else {
            showMovies(data.results)
        }
    } catch (error) {
        swal.fire({
            title: 'Error!',
            text: error,
            icon: 'error',
            confirmButtonText: 'Aceptar'
        })
    }
};
getMovies2(API_RM);

const showMovies = (movies) => {
    let main = document.getElementById('main')
    main.innerHTML = '';
    movies.forEach(movie => {
        let {name, id, image, species, status} = movie;
        // let l = API_RM_Location + '/' + id;
        main.innerHTML += `
        <div class="movie">
        <h3>${name}</h3>
        <div class="overview">
                <h3 class="${status}">${status}</h3>
            </div>
            <img src="${image}" alt="">
            <div class="movie-info">
                <h3>${species}</h3>
                
                <span class="green">${id}</span>
            </div>
            
        </div>
        `
    })
};

form.addEventListener('submit', e => {
    e.preventDefault();

    const searchTerm = search.value.toLocaleLowerCase();
    if(searchTerm && searchTerm !== ''){
        console.log(searchTerm)
        getMovies2('https://rickandmortyapi.com/api/character/?name=' +  searchTerm)
        search.value = '';
    }else{
        swal.fire({
            title: 'Error!',
            text: 'No hay nada en escrito',
            icon: 'error',
            confirmButtonText: 'Aceptar'
        })
                // getMovies2(API_RM);
    }
});