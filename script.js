/*Aqui va la seccion de modo oscuro y claro*/
const switchButton = document.getElementById('switch');
switchButton.addEventListener('click',()=>{
    document.body.classList.toggle('dark');
    switchButton.classList.toggle('active')
})

/*Aqui va la seccion de javascript funcion a la calculadora*/

/*Se declaran las variables constantes*/
/* se llama los elemeentos de name de html a el documento js*/
/*se coloca un argumento al boton delete para que borre todo */
const botonees=document.getElementsByName('number');
const botonoperacion=document.getElementsByName('operacion'); 
const botonigual=document.getElementsByName('igual')[0];
const botondelete=document.getElementsByName('delete')[0];
var result= document.getElementById('result');
var operActual='';
var operanterior='';
var operacion=undefined;

/*se llama la variable botones para obtener un evento del los botones*/
botonees.forEach(function(boton){
    boton.addEventListener('click',function(){
        agregarnumero(boton.innerText);
    })
});
/*se llama la variable boton de operacion para obtener un evento*/
botonoperacion.forEach(function(boton){
    boton.addEventListener('click',function(){
        selectOperacion(boton.innerText);
    })
});
/*se llama la variable boton de igual para obtener  evento*/
botonigual.addEventListener('click',function(){
    calcular();
    actualizarDisplay();
});
/*se llama la variable boton de igual para obtener  evento*/
botondelete.addEventListener('click',function(){
    clear();
    actualizarDisplay();
});

/*se crea funcion para la funcionalidad de la calculadora  */

function selectOperacion(op){
    if(operActual ==='') 
    return;
    if(operanterior !== ''){
        calcular()
    }
    operacion=op-toString();
    operanterior=operActual;
    operActual='';
}

function calcular(){
    var calculo;
    const anterior = parseFloat(operanterior);
    const actual = parseFloat(operActual)
    if(isNaN(anterior) || isNaN(actual)) return;
    switch(operacion){
        case '+':
            calculo=anterior + actual;
            break;
        case '-':
            calculo= anterior - actual;
            break;
        case '*':
            calculo=anterior * actual;
            break;
        case '/':
        calculo=anterior / actual;
            break;
        default:
            return;

    }
    operActual=calculo;
    operacion=undefined;
    operanterior='';
}
/*se llama una funcion*/
/* se implementa los string*/
function agregarnumero(num){
    operActual=operActual.toString() + num.toString();
    actualizarDisplay();
}

function clear(){
    operActual='';
    operanterior='';
    operacion=undefined;
}

function actualizarDisplay(){
    result.value=operActual;
}

clear();



