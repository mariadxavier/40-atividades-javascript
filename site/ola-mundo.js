// Atividade 2: 
//alert("Olá Mundo!");

//Atividade 3:
//alert(2+2);

//Atividade 4:
document.getElementById("btnNomeCompleto").addEventListener('click', function() {
    const nomeCompleto = document.getElementById('inputNomeCompleto').value;
    alert('O Nome completo é: ' + nomeCompleto + ". ");
});

//Atividade 5:
document.getElementById('btnVisualizar').addEventListener('click', function() {    
    let nome = document.getElementById('inputNome').value;
    let quantCharNome = nome.length;
    alert(nome + " possui " + quantCharNome + " caracteres, incluindo os espaços.");
});

//Atividade 6:
const lampadaAtiv6 = document.getElementById('lampadaAtiv6');
const apaga = "https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/lampada.jpg";
const acende = "https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true";

lampadaAtiv6.addEventListener('click', () => {
    if (lampadaAtiv6.src == apaga) {
        lampadaAtiv6.src = acende;
    }else { 
        lampadaAtiv6.src = apaga;
    };

});

// Atividade 7: 
const lampadaAtiv7 = document.getElementById('lampadaAtiv7');
lampadaAtiv7.addEventListener('mouseover', function onmouseover(){
    lampadaAtiv7.src = acende;
    setTimeout(() => {
        lampadaAtiv7.src = apaga;
      }, 500);
});

// Atividade 8:
const buttonCPF = document.getElementById('buttonCPF');
const cpf = document.getElementById('cpf');
buttonCPF.addEventListener('click', () => {
    let auxCPF = cpf.value;
    alert('CPF: ' + auxCPF.slice(0,3)+'.'+auxCPF.slice(3,6)+'.'+auxCPF.slice(6,9)+'-'+auxCPF.slice(9,11));
});

// Atividade 9: 
const buttonCPFPoint = document.getElementById('buttonCPFPoint');
const cpfPoint = document.getElementById('cpfPoint');

buttonCPFPoint.addEventListener('click', () => {
    let auxCpfPoint = cpfPoint.value.replaceAll('.','').replaceAll('-','');
    alert('CPF: ' + auxCpfPoint);
});

//Atividade 10: (alterada após atividade 16, que exigia o uso da função 'somar' nesta)
const buttonSoma = document.getElementById('buttonSoma');
const soma1 = document.getElementById('soma1');
const soma2 = document.getElementById('soma2');
const resultadoSoma = document.getElementById('resultado-soma');
const btnLimpar = document.getElementById('btnLimpar');

/* antiga:
buttonSoma.addEventListener('click', () =>{
    let auxSoma1 = parseFloat(soma1.value, 10);
    let auxSoma2 = parseFloat(soma2.value, 10);
    
    if((soma1.value == '' || soma1.value == null) || (soma2.value == '' || soma2.value == null)){
        alert('Preencha os campos da soma corretamente para realizá-la. Caso deseje somar 0, insira o mesmo.');
    } else {
        let resultado = auxSoma1 + auxSoma2;
        resultadoSoma.value += resultado; 
    }
}); 
*/


btnLimpar.addEventListener('click', () => {
    soma1.value = '';
    soma2.value = '';
    resultadoSoma.value = '';
});

//Atividade 11

//Atividade 12:
const btnChangeToGreen = document.getElementById('btnChangeToGreen');
const btnChangeToRed = document.getElementById('btnChangeToRed');
const btnResetColor = document.getElementById('btnResetColor');
const divAlteraCor = document.getElementById('divAlteraCor');



btnChangeToGreen.addEventListener('click', () => {
    divAlteraCor.style = "background-color: rgb(63, 127, 47);";
});

btnChangeToRed.addEventListener('click', ()=> {
    divAlteraCor.style = "background-color: rgb(165, 61, 42);";
});

btnResetColor.addEventListener('click', ()=> {
    divAlteraCor.style = "background-color: rgb(42, 101, 165)";
});

/* Atividade 13
comentando várias linhas 
*/

// Atividade 14:
window.onload = function() {
    const resultado14 = document.getElementById('resultado14');
    resultado14.innerHTML = '<h2> <b>Esse texto foi inserido pelo JavaScript...</b></h2>'
};

// Atividade 15:
const btnResultado15 = document.getElementById('btnResultado15');

btnResultado15.addEventListener('click', () => {

    const resultado15 = document.getElementById('resultado15');
    resultado15.innerHTML = '<h2><b>SURPRESA!!</b></h2>';
});

//Atividade 16:

function somar(valorA, valorB) {
    let resultadoSoma = valorA + valorB;
    return resultadoSoma;
};

// nova:
buttonSoma.addEventListener('click', () =>{
    let auxSoma1 = parseFloat(soma1.value, 10);
    let auxSoma2 = parseFloat(soma2.value, 10);
        
    if((soma1.value == '' || soma1.value == null) || (soma2.value == '' || soma2.value == null)){
        alert('Preencha os campos da soma corretamente para realizá-la. Caso deseje somar 0, insira o mesmo.');
    } else {        
        resultadoSoma.value += somar(auxSoma1, auxSoma2);
    }
}); 

// Atividade 17: Crie uma função que recebe 2 parâmetros e retorna a soma deles, porem caso seja passado um parâmetro vazio ela retorne zero.

const btnSoma17 = document.getElementById('btnSoma17');
const soma117 = document.getElementById('soma1-17');
const soma217 = document.getElementById('soma2-17');
const resultadoSoma17 = document.getElementById('resultado-soma-17');
const btnLimpar17 = document.getElementById('btnLimpar17');

function somarZero(valorA, valorB) {
    let a = parseFloat(valorA);
    let b = parseFloat(valorB);
    let result = a + b;
    if ((valorA == null || valorA == '')||(valorB == null || valorB == '')) {
        result = 0;
    }; 
    return result;    
};

btnSoma17.addEventListener('click', () =>{
    let auxSoma117 = soma117.value;
    let auxSoma217 = soma217.value;
    resultadoSoma17.value += somarZero(auxSoma117, auxSoma217);    
}); 

btnLimpar17.addEventListener('click', () => {
    soma117.value = '';
    soma217.value = '';
    resultadoSoma17.value = '';
});