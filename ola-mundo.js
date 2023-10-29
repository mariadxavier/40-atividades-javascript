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

//Atividade 10:
//if para verificar se há input nulo, se sim retornar alert
const buttonSoma = document.getElementById('buttonSoma');
const soma1 = document.getElementById('soma1');
const soma2 = document.getElementById('soma2');

buttonSoma.addEventListener('click', () =>{
    let auxSoma1 = parseFloat(soma1.value, 10);
    let auxSoma2 = parseFloat(soma2.value, 10);
    
    if(soma1 == '' | soma2 == ''){
        alert('Preencha os campos da soma corretamente para realizá-la. Caso deseje somar 0, insira o mesmo.');
    } else {
        let resultado = auxSoma1 + auxSoma2;
        console.log(resultado);
        document.getElementById('resultadoSoma')
    }

})