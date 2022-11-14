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


