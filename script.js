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
    
    /*se declara variable resultado para que salga en el bloque  */
    var resultado = document.getElementById('resultado');

    /*Declaracion de variables con el dom para que elimine todo el contenido */
    var reset = document.getElementById('reset');
    /*declaracion de variable que elimina por digito*/
    var elminarE=document.getElementById('eliminarE');

    /*Declaracion de variable para los operadores aritmeticos */
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');

    /*declaracion de variables de los botones que contienen numeros */
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

/*se llama las variables para crear eventos para los operadores aritmeticos  +,-,*,/  se muestren  en cuanto el usuario le de click*/

/*se llama la variable suma que contiene el Dom */
//se crea una funcion que tenga el argumento e
//se crea el evento onclick que da cierta funcionalidad cuando se hace clic en el boton numero suma
//cuando se hace clic en bloque aparece el operador
suma.onclick = function(e){
    /*se llama la variable principal operandoa */
    /*el operandoa debe ser igual que resultado debe ser a texto del contenido */
    operandoa = resultado.textContent;
    /*se llama la variable operacion que sea igual a + */
    operacion = "+";
    /*se limpia el contenido */
    limpiar();
}

/*se llama la variable resta que contiene el Dom */
//se crea una funcion que tenga el argumento e
//se crea el evento onclick que da cierta funcionalidad cuando se hace clic en el boton resta
//cuando se hace clic en bloque aparece el operador
resta.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "-";
    limpiar();
}
/*se llama la variable multiplicacion que contiene el Dom */
//se crea una funcion que tenga el argumento e
//se crea el evento onclick que da cierta funcionalidad cuando se hace clic en el boton multiplicacion
//cuando se hace clic en bloque aparece el operador
multiplicacion.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "*";
    limpiar();
}
/*se llama la variable division que contiene el Dom */
//se crea una funcion que tenga el argumento e
//se crea el evento onclick que da cierta funcionalidad cuando se hace clic en el boton division
//cuando se hace clic en bloque aparece el operador
division.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "/";
    limpiar();
}
/*se llama la variable igual que contiene el Dom */
//se crea una funcion que tenga el argumento e
//se crea el evento onclick que da cierta funcionalidad cuando se hace clic en el boton igual
//cuando se hace clic en bloque aparece el operador
igual.onclick = function(e){
    /*se llama la variable operandoa */
    /*esta variable debe ser igual a la variable resultado que sea el contenido texto */
    operandob = resultado.textContent;
    /*debe resolver la operacion en cuanto los operadores aritmeticos */
    resolver();
}

/*se crea un evento de eliminar contenido en cuanto el usuario de click */
//en este caso no va quedar ningun digito en el bloque
//sigue teniendo el mismo argumento e 
reset.onclick = function(e){
    /*va a resetear el contenido en el bloque */
    resetear();
}

/*se crea una funcion limpiar*/
/*en este caso llama al metodo que tenga limpiar */
function limpiar(){
    /*no traera ningun digito porque limpia el contenido */
    resultado.textContent = "";
}

/*se crea la funcion a restablecer el bloque */
function resetear(){
    //llama la variable resultado que sea igual a que tenga un valor nullo
    resultado.textContent = "";
    //se llama las variables operandoa,b y operacion que contenga un valor nullo
    operandoa = 0;
    operandob = 0;
    operacion = "";
}

function resolver(){
    var res = 0;
    /*esta sentencia permite manipular el comportamiento de los bucles en este caso se hizo en eñ bucle switch */
    /*llama la operacion que contiene el valor de los botones */
    switch(operacion){
        case "+"://selecciona el operador suma
        /*la variable res contiene la operacion */
        /*parsefloat es que acepte tipo de dato decimal */
        /*el operandoa toma el valor 1 ingresado */
        /* el operandob toma el valor 2 ingresado */
            res = parseFloat(operandoa) + parseFloat(operandob); //valor 1 + valor 1 = a resultado 
            break;//permite que la sentecia continue
        case "-"://selecciona el operador resta
            res = parseFloat(operandoa) - parseFloat(operandob); //valor 1 - valor 1 = a resultado 
            break;//permite que la sentecia continue
        case "*"://selecciona el operador multiplicacion
            res = parseFloat(operandoa) * parseFloat(operandob);// valor 1 * valor 2 = a resultado
            break;//permite que la sentecia continue
        case "/"://selecciona el operador division
        res = parseFloat(operandoa) / parseFloat(operandob);// valor 1 / valor 2 = a resultado
        break;//permite que la sentecia continue
    }
    //llama al metodo resetear el resultado que sea a las variable res 
    resetear();
    resultado.textContent = res;
}
