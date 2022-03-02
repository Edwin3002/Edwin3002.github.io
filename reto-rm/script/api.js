const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = `https://image.tmdb.org/t/p/w1280`
const SEARCH_URL = 'http://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

// const getMovies = () => {
//     const res = fetch(url)
//     const data = res.json();
//     console.log(data);
// }
// getMovies(API_URL)

const getMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json();
    console.log(data);
}
getMovies(API_URL)
