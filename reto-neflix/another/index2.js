function verVideo2(id){
   
    console.log('funciona')
    
}


function ver (){
    const img = document.getElementById('img');
    const img2 = document.getElementById('img').value;
    img.addEventListener("click", verVideo2(img2))
    console.log(img2)

}