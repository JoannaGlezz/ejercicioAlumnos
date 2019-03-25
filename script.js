/*EL CONTADOR SE INICIO AFUERA DE LA FUNCION, 
YA QUE AL INICIARLO DENTRO EN CADA CLICK
REINICIABA EL CONTEO */
var contador = 0

//ARRAY
var alumnos = []

//function limpiar () {
    //   var resetear = document.getElementById("limpiar").reset()
    //}

//FUNCION AGREGAR
function agregar() {
    //TRAYENDO EL ELEMENTOS CON EL ID
    //VALUE TRAE EL VALOR QUE TIENE EN EL FORM
    var nombre = document.getElementById("nombre").value
    var fecha = document.getElementById("fecha").value
    var nota1 = document.getElementById("nota1").value
    var nota2 = document.getElementById("nota2").value
    var nota3 = document.getElementById("nota3").value

    //TRAYENDO EL ELEMENTODONDE INSERTARE LA TABLA
    let tablaP = document.getElementById("contenedor1")
    //INSERTANDO TABLA
    let row = tablaP.insertRow()

    //ESTO ES UN OBJETO, ES EL OBJETO ALUMNO
    let alumno = {
        id: ++contador,
        nombre: nombre,
        fecha: fecha,
        nota1: nota1,
        nota2: nota2,
        nota3: nota3
    }

    //INSERTANDO CELDAS ALUMNO . < > HACE REFERENCIA AL OBJETO
    row.insertCell().innerHTML = alumno.id
    row.insertCell().innerHTML = alumno.nombre
    row.insertCell().innerHTML = alumno.fecha
    row.insertCell().innerHTML = alumno.nota1
    row.insertCell().innerHTML = alumno.nota2
    row.insertCell().innerHTML = alumno.nota3

    /* AL HACER PUSH ESTAMOS "METIENDO UN 
    OBJETO ALUMNO DENTRO DEL ARRAY ALUMNOS" */
    alumnos.push(alumno)

    //LIMPIANDO EL FORM
    document.getElementById("formulario").reset();
    //IMPRIMENDO ARRAY

}


function calcular() {
    //ELIMINAR HIJOS DEL CONTENEDOR 2 PARA NO DUPLICAR ID'S
    var nodoSeg = document.getElementById("nodo2")
    while (nodoSeg.firstChild) {
        nodoSeg.removeChild(nodoSeg.firstChild);
    }

    /* MI INDICE ESTA INICIANDO EN LA POSICION 0 DEL ARREGLO
    I ES MENOR A LA LONGITUD DEL ARREGLO  */
    for (i = 0; i < alumnos.length; i++) {
        let alumno = alumnos[i];



        /* TRAYENDO AL OBJETO ALUMNO DENTRO DE OTRO OBJETO LLAMADO
        CALCULOAL */
        let promedioF = promedio(alumno.nota1, alumno.nota2, alumno.nota3)
        //LET PROMEDIOF SE HIZO COMO VARIABLE EXTERNA 
        //PARA PODER REFERENCIAR DESDE CUALQUIER PARTE DLE CODIGO
        let calculoAl = {
            id: alumno.id,
            nombre: alumno.nombre,
            edad: edad(alumno.fecha),
            promedio: promedioF,
            categoria: categorias (promedioF)
        }

        //INSERTANDO TABLA Y CELDAS DE NUEVO EL TABLA 3
        let tablaP = document.getElementById("nodo2")
        let row = tablaP.insertRow()

        row.insertCell().innerHTML = calculoAl.id
        row.insertCell().innerHTML = calculoAl.nombre
        row.insertCell().innerHTML = calculoAl.edad
        row.insertCell().innerHTML = calculoAl.promedio
        row.insertCell().innerHTML = calculoAl.categoria

    }

}


//FUNCION PARA CALUCULAR EDAD
function edad(fechaNac) {
    var hoy = new Date()
    var edad = new Date(fechaNac)
    var final = (hoy - edad)

    return new Date(final).getFullYear() - 1970
}

//FUNCION PARA CALCULAR PROMEDIO
function promedio(nota1, nota2, nota3) {
    let promedioF = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3

    return promedioF.toFixed(2)
}

//FUNCION PARA ASIGNAR CATEGORIAS
function categorias(promedioF) {
    if (promedioF <= 25) {
        return "Pesimo"
    } 
        if (promedioF >= 26 && promedioF <= 50) {
            return "Malo"
        } 
            if (promedioF >= 51 && promedioF <= 70){
                return "Regular"
            }
            if (promedioF >= 71 && promedioF <= 90){
                return "Bueno"
            } 
            if (promedioF >= 91 && promedioF <= 100){
                return "Excelente"
            }
    }



