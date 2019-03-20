//FUNCION AGREGAR

var contador = 0 
//EL CONTADOR SE INICIO AFUERA DE LA FUNCION, 
//YA QUE AL INICIARLO DENTRO EN CADA CLICK
//REINICIABA EL CONTEO

function agregar() {
    //TRAYENDO EL ELEMENTOS CON EL ID 
    var nombre = document.getElementById("nombre").value
    var fecha = document.getElementById("fecha").value
    var nota1 = document.getElementById("nota1").value
    var nota2 = document.getElementById("nota2").value
    var nota3 = document.getElementById("nota3").value
    
    var tablaP = document.getElementById("contenedor1")
    //INSERTANDO TABLA
    var row = tablaP.insertRow()
    //INSERTANDO CELDAS
    row.insertCell().innerHTML = ++ contador 
    row.insertCell().innerHTML = nombre
    row.insertCell().innerHTML = fecha
    row.insertCell().innerHTML = nota1
    row.insertCell().innerHTML = nota2
    row.insertCell().innerHTML = nota3

} 

/*
    var nombre = document.getElementById("nombre").value

    function edad (fecha){
        var fecha = document.getElementById("fecha")
        var hoy = new Date ()
        edad = parseInt((hoy - fecha)/365/24/60/60/1000)

        var row = tablaP.insertRow()

        document.getElementById("fecha").value
    }

        var promedio = ((nota1.value) + (nota2.value) + (nota3.value) / 3)
        promedioF.append(promedio)

        if (promedio) >= 



    //var categoriaI = document.getElementById("categoriaI")

*/


