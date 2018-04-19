var i = 0;
function Guardar(){
    
var formulario = new Object();
    
formulario.nombre = document.getElementById("nombreproyec").value;
formulario.nivel  = document.getElementById("nivel").value;
formulario.idproyecto = document.getElementById("idproyecto").value;
formulario.aula   = document.getElementById("aula").value;
formulario.especialidad = document.getElementById("country").value;
formulario.urllogo = document.getElementById("urllogo").value;
    
$.ajax({
    url:'http://localhost:8080/api/insertarproyecto',
    type:'POST',
    datatype: 'json',
    data:formulario,
    success: function(datad, textStatus, xhr) {
        alert("Se guardò el proyecto")
    },
    error : function(xhr, textStatus, errorThrown){
        alert(xhr);
    }});
}

function Mostrartodo(){
    var formulario = new Object();
    $.ajax({
    url:'http://localhost:8080/api/todosProyectosexpo',
    type:'POST',
    datatype: 'json',
    data:formulario,
    success: function(datad, textStatus, xhr) {
      for(var ele in datad){
          document.getElementById("tabla").innerHTML += "<li>"+datad[ele].nombre+" "+datad[ele].nivel+" "+datad[ele].idproyecto+" "+datad[ele].aula+" "+datad[ele].especialidad+" "+datad[ele].urllogo;
          
      }
    },
    error : function(xhr, textStatus, errorThrown){
        alert(xhr);
    }});
}