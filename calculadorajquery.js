
var expresion = ''; // variable global

//sintaxis para clickear:
$(document).ready(function (){
    $('button').click(function(){
        //si al clickear el =
      if ($(this).text() === '='){
          //calcular el resultado, y se guarda en expresion
          expresion = eval(expresion);
          $('#pantalla').text(expresion);
          //si clickeas el boton C
      }else if ($(this).text() === 'C'){
          //se borra la pantalla
          expresion = ' '
          $('#pantalla').text(expresion);
          // otro caso: se agrega el caracter a expresion
      }else {
    expresion += $(this).text();
    $('#pantalla').text(expresion); 
    }
    }); 
});


//sintaxis desde el teclado:
$(document).keypress(function(e){
    var codigo =e.charCode;
    var caracter = String.fromCharCode(codigo);
    var posibles_caracteres = ['1','2','3','4','5','6','7','8','9','0','/','+','*','-'] //array[]
    if (posibles_caracteres.includes(caracter)){   
        // si el caracter seleccionado esta incluido en el array
        // que a la expresion se le añada el caracter
        expresion += caracter;
        //si el caracter seleccionado es enter...
    }else if(codigo === 13){
        //...calcular la expresion 
        expresion = eval(expresion);
        //si el caracter seleccionado es 32 BARRA ESPACIADORA..
    }else if (codigo === 32){
        //.. borrar el contenido
        expresion = '';
    }

    $('#pantalla').text(expresion); // colocar el valor de expresion
});