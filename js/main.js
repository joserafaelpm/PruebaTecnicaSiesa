window.alert("Bienvendio a la practica"); //Mensaje de bienvenida
var array = new Array(); //Funcion para agregar elementos al array
function operaciones() { //Funcion para realizar las operaciones arigmeticas
  if (document.getElementById("valor1").value == "") { //Validacion de que el campo no este vacio
    window.alert("Ingrese un valor correcto para 'valor 1'");
  } else if (document.getElementById("valor2").value == "") { //Validacion de que el campo no este vacio
    window.alert("Ingrese un valor correcto para 'valor 2'");
  } else {
    var num1 = parseInt(document.getElementById("valor1").value);
    var num2 = parseInt(document.getElementById("valor2").value);
    var operacion = document.getElementById("operador").value;
    var resultado;
    if (operacion == "suma") { //Operacion de suma
      resultado = num1 + num2;
      array.push(num1 + " + " + num2 + " = " + resultado);
    } else if (operacion == "resta") { //Operacion de resta
      resultado = num1 - num2;
      array.push(num1 + " - " + num2 + " = " + resultado);
    } else if (operacion == "multiplicacion") { //Operacion de multiplicacion
      resultado = num1 * num2;
      array.push(num1 + " * " + num2 + " = " + resultado);
    } else if (operacion == "division") { //Operacion de division
      resultado = num1 / num2;
      array.push(num1 + " / " + num2 + " = " + resultado);
    }

    if (document.getElementById("pagina").checked) { //Validacion de que el checkbox este activado para mostrar el resultado en la pagina
      document.getElementById("textArea").value =
        "El resultado es: " + resultado;
    } else { //Si no esta activado el checkbox, no se muestra el resultado en la pagina y se muestra en un alert el resultado
      window.alert("El resultado es: " + resultado); 
      document.getElementById("textArea").value = "";
    }
    mostrar(); //Llamada a la funcion mostrar
  }
}
var li = document.getElementById("listaR");
function mostrar() { //Funcion para mostrar los resultados en la pagina
  var text = "";
  li.innerHTML = "";
  for (var i = 0; i < array.length; i++) {
    text = array[i] + "";
    li.innerHTML +=
      "<li><div class='row'><div class='col-sm-8'><p>" +
      text +
      "</p></div><div class='col-sm-3'><p><button type='button' class='btn btn-link'  onclick='eliminar(" +
      i +
      ")'>[Eliminar]</button></p></div></div></li>";
  }
}

function eliminar(id) { //Funcion para eliminar un elemento del array
  window.confirm("¿Desea continuar con la eliminación?");
  array.splice(id, 1);
  mostrar();
}

var valor;
inputBuscar.oninput = function () {
  valor = inputBuscar.value;
  buscar(valor);
};

function buscar(dato) { //Funcion para buscar un elemento del array
  for (var i = 0; i < array.length; i++) {
    var palabra = array[i]+"";
    console.log(palabra.search(dato));
    if (palabra.search(dato) >= 0) {
      li.childNodes[i].style.display = "block";
    } else {
      li.childNodes[i].style.display = "none";
    }
  }
}
