/*Aqui va la seccion de modo oscuro y claro*/
const switchButton = document.getElementById('switch');
switchButton.addEventListener('click',()=>{
    document.body.classList.toggle('dark');
    switchButton.classList.toggle('active')
})

/*Aqui va la seccion de javascript funcion a la calculadora*/

/*se declaran variables*/
var operandoa;
var operandob;
var operacion;

/*se declara la funcion que se coloco en el body para inicializar cunado cargue la pagina*/
function init(){
    //se declaran variables y se hace llamado al dom para que los botones tengan funcionalidad respecto al id por medio de HTML y queden gusrdados desde el dom
    var resultado = document.getElementById('resultado');
    var reset = document.getElementById('reset');
    var elminarE=document.getElementById('eliminarE');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');
}


//se hace eventos por cada boton para que el usuario tenga interactualidad con el desarrollo

//llama la variable uno que contiene el DOM 
//se crea una funcion que contenga un argumento e
//onclick ejecuta cierta funcionalidad cuando se hace clic en el boton de numero 1 
uno.onclick = function(e){
    resultado.textContent = resultado.textContent  + "1";
}
/*se llama la variable dos que contiene el Dom */
//se crea una funcion que tenga el argumento e
//se crea el evento onclick que da cierta funcionalidad cuando se hace clic en el boton numero 2
//cuando se hace clic en bloque aparece el numero
dos.onclick = function(e){
    resultado.textContent = resultado.textContent  + "2";
}
/*se llama la variable tre que contiene el Dom */
//se crea una funcion que tenga el argumento e
//se crea el evento onclick que da cierta funcionalidad cuando se hace clic en el boton numero 3
//cuando se hace clic en bloque aparece el numero
tres.onclick = function(e){
    resultado.textContent = resultado.textContent  + "3";
}
/*se llama la variable cuatro que contiene el Dom */
//se crea una funcion que tenga el argumento e
//se crea el evento onclick que da cierta funcionalidad cuando se hace clic en el boton numero 4
//cuando se hace clic en bloque aparece el numero
cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent  + "4";
}
/*se llama la variable cinco que contiene el Dom */
//se crea una funcion que tenga el argumento e
//se crea el evento onclick que da cierta funcionalidad cuando se hace clic en el boton numero 5
//cuando se hace clic en bloque aparece el numero
cinco.onclick = function(e){
    resultado.textContent = resultado.textContent  + "5";
}

/*se llama la variable seis que contiene el Dom */
//se crea una funcion que tenga el argumento e
//se crea el evento onclick que da cierta funcionalidad cuando se hace clic en el boton numero 6
//cuando se hace clic en bloque aparece el numero
seis.onclick = function(e){
    resultado.textContent = resultado.textContent  + "6";
}
/*se llama la variable siete que contiene el Dom */
//se crea una funcion que tenga el argumento e
//se crea el evento onclick que da cierta funcionalidad cuando se hace clic en el boton numero 7
//cuando se hace clic en bloque aparece el numero
siete.onclick = function(e){
    resultado.textContent = resultado.textContent  + "7";
}
/*se llama la variable ocho que contiene el Dom */
//se crea una funcion que tenga el argumento e
//se crea el evento onclick que da cierta funcionalidad cuando se hace clic en el boton numero 8
//cuando se hace clic en bloque aparece el numero
ocho.onclick = function(e){
    resultado.textContent = resultado.textContent  + "8";
}
/*se llama la variable nueve que contiene el Dom */
//se crea una funcion que tenga el argumento e
//se crea el evento onclick que da cierta funcionalidad cuando se hace clic en el boton numero 9
//cuando se hace clic en bloque aparece el numero
nueve.onclick = function(e){
    resultado.textContent = resultado.textContent  + "9";
}
/*se llama la variable cero que contiene el Dom */
//se crea una funcion que tenga el argumento e
//se crea el evento onclick que da cierta funcionalidad cuando se hace clic en el boton numero 0
//cuando se hace clic en bloque aparece el numero
cero.onclick = function(e){
    resultado.textContent = resultado.textContent  + "0";
}