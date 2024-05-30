function nombreLong(){
    var nombreJS = document.getElementById("nombre").value;
    var nombreLong = nombreJS.length;

    if(nombreLong<8){
        document.getElementById("pNombrelong").innerHTML = "No. caracteres: " + nombreLong;
    }else{
        document.getElementById("pNombrelong").innerHTML = "Tu nombre sobrepasa los 8 caracteres";
    }
}
function estadoMayus(){
    var estadoJS = document.getElementById("estado").value;
    document.getElementById("pEstado").innerHTML = "Tu estado = " + estadoJS.toUpperCase();
}
function correoNombre(){
    var alumnoC = "alumno@goes.com";
    var correoJS = document.getElementById("correo").value;
    document.getElementById("pCorreo").innerHTML = alumnoC.replace("alumno", correoJS);
}