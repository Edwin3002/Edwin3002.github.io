const doHW = (iterations) => new Promise((resolve, reject) =>{
   const numbers = []
   for (let i = 0; i < iterations; i ++){
       const number = 1 + Math.floor(Math.random() * 6)
       numbers.push(number)
       if(number === 6){
           reject({
               error: true,
               message: 'se ha sacado un 6 :('
           })
       }
   }
   resolve({
    error: false,
    message: numbers
   })
})

doHW()
.then(res => console.log(res))
.catch(error => console.log(error.message))