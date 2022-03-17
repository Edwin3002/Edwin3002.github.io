// variables
let result = document.getElementById('result');
let result2 = document.getElementById('result2');
result.textContent = '0';

let numero1
let tipo
function cal(n) {
    if (result.textContent === '0' || result.textContent === '+' || result.textContent === '-' || result.textContent === '*' || result.textContent === '/') {

        result.textContent = n;
    } else {

        result.textContent += n;
    }
}
function del() {
    let h1 = result.textContent;
    let h2 = h1.slice(0, -1);
    result.textContent = h2;

}

function reset() {
    result.textContent = '0';
    let numero1 = '0';
    let n2 = '0'
}

function typeO(operation) {
    let n1 = Number(result.textContent)
    numero1 = Number(result.textContent)
    let typeOperation = operation
    tipo = operation
    result.textContent = operation
    // result.textContent += n2;
    console.log(n1)
    // console.log(n2)
    console.log(typeOperation)
    // same(n1, typeOperation)
    return (n1, typeOperation)

}

function calcular() {
    let n2 = Number(result.textContent);
    console.log(n2)
    console.log(numero1)
    console.log(tipo)
    if (result.textContent !== '0') {
        calculoFinal()
    } else {
        alert('no hay nada')
    }
    function calculoFinal() {

        switch (tipo) {
            case '+':
                result.textContent = numero1 + n2;
                break;
            case '-':
                result.textContent = numero1 - n2;
                break;
            case '*':
                result.textContent = numero1 * n2;
                break;
            case '/':
                result.textContent = numero1 / n2;
                break;
            default:
                break
        }
    }
}

//color
let t1 = 't1'
document.addEventListener("DOMContentLoaded", color(t1));

let theme = document.getElementById('theme');
theme.addEventListener('change', (valor) => {
    let tema = valor.target.value;
    console.log(tema);
    color(tema);
})
function color(tema) {

    let rootElement = document.documentElement;
    if (tema == 't1') {
        bg_a1 = 'hsl(222, 26%, 31%)';
        bg_a2 = 'hsl(223, 31%, 20%)';
        bg_a3 = 'hsl(224, 36%, 15%)';

        keys_a1 = 'hsl(225, 21%, 49%)';
        keys_a2 = 'hsl(224, 28%, 35%)';
        keys_a3 = 'hsl(6, 63%, 50%)';
        keys_a33 = 'hsl(6, 70%, 34%)';        
        keys_a4 = 'hsl(30, 25%, 89%)';
        keys_a5 = 'hsl(28, 16%, 65%)';

        text_a1 = 'hsl(221, 14%, 31%)';
        text_a2 = 'hsl(0, 0%, 100%)';
    } else if (tema == 't2') {
        bg_a1 = 'hsl(0, 0%, 90%)';
        bg_a2 = 'hsl(0, 5%, 81%)';
        bg_a3 = 'hsl(0, 0%, 93%)';

        keys_a1 = 'hsl(185, 42%, 37%)';
        keys_a2 = 'hsl(185, 58%, 25%)';
        keys_a3 = 'hsl(25, 98%, 40%)';
        keys_a33 = 'hsl(25, 99%, 27%)';  
        keys_a4 = 'hsl(45, 7%, 89%)';
        keys_a5 = 'hsl(35, 11%, 61%)';

        text_a1 = 'hsl(60, 10%, 19%)';
        text_a2 = 'hsl(60, 10%, 19%)';
    } else {
        bg_a1 = 'hsl(268, 76%, 18%)';
        bg_a2 = 'hsl(268, 71%, 12%)';
        bg_a3 = 'hsl(268, 71%, 12%)';

        keys_a1 = 'hsl(281, 89%, 26%)';
        keys_a2 = 'hsl(285, 91%, 52%)';
        keys_a3 = 'hsl(176, 100%, 44%)';
        keys_a33 = 'hsl(177, 92%, 70%)';  
        keys_a4 = 'hsl(268, 47%, 21%)';
        keys_a5 = 'hsl(290, 70%, 36%)';

        text_a1 = 'hsl(52, 100%, 62%)';
        text_a2 = 'hsl(52, 100%, 62%)';
    }
    rootElement.style.setProperty('--bg-a1', bg_a1);
    rootElement.style.setProperty('--bg-a2', bg_a2);
    rootElement.style.setProperty('--bg-a3', bg_a3);
    rootElement.style.setProperty('--keys-a1', keys_a1);
    rootElement.style.setProperty('--keys-a2', keys_a2);
    rootElement.style.setProperty('--keys-a33', keys_a33);
    rootElement.style.setProperty('--keys-a3', keys_a3);
    rootElement.style.setProperty('--keys-a4', keys_a4);
    rootElement.style.setProperty('--keys-a5', keys_a5);

    rootElement.style.setProperty('--text-a1', text_a1);
    rootElement.style.setProperty('--text-a2', text_a2);

    // alert('DOM is ready');
}
