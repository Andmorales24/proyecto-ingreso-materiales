var integrantes = new Array;


document.getElementById("titulo").innerHTML = localStorage.getItem("nombreelegido");

mostrar();
function annadir(){
    var integrante = new Object();
    integrante.nombre= document.getElementById("nombreinte").value;
    integrante.pa= document.getElementById("primerape").value;
    integrante.sa= document.getElementById("segundoape").value;
    integrante.carne= document.getElementById("carne").value;
    integrantes.push(integrante);
}

function Guardartodos(){
    
    var objeto = new Object();
    
    objeto.nombre = localStorage.getItem("nombreelegido");
    objeto.integrantes = integrantes;
    
    
    $.ajax({
    url:'http://localhost:8080/api/annadeestudiantes',
    type:'POST',
    datatype: 'json',
    data:objeto,
    success: function(datad, textStatus, xhr) {
        alert("Se guardaron los estudiantes")
    },
    error : function(xhr, textStatus, errorThrown){
        alert(xhr);
    }});
    
   /*var files = $("#logo").get(0).files;
        if (files.length>0){
            var data = new FormData();
            files[0].name = 'plantilla';
            
            for(i=0;i<filees.length;i++){
                data.append(document.getElementById('nombre').value, files[i]);
            }
            
            $.ajax({
                type:"POST",
                url:"/log",
                contentType:false,
                proccessData: false,
                enctype:"multipart/form-data",
                data:data,
                success: function(result){
                    alert("Datos guardados correctamente");
                    location.href="editar.html";
                }
                
            });
        }
    else{
        alert("Debe de seleccionar el archivo");
    }*/
    
    mostrar();
}

var inte = localStorage.getItem("integranteselegido");

function mostrar(){
integrantes = JSON.parse(localStorage.getItem("integranteselegido"));
    document.getElementById("tabla").innerHTML = "<tr><th>Carnè</th><th>Primer nombre</th><th>Primer apellido</th><th>Segundo apellido</th><th>Eliminar</th></tr>";

for(var ele in JSON.parse(localStorage.getItem("integranteselegido"))){
          
          document.getElementById("tabla").innerHTML +="<tr>"+"<td>"+JSON.parse(localStorage.getItem("integranteselegido"))[ele].carne+"</td>"+"<td>"+JSON.parse(localStorage.getItem("integranteselegido"))[ele].nombre+"</td>"+"<td>"+JSON.parse(localStorage.getItem("integranteselegido"))[ele].pa+"</td>"+"<td>"+JSON.parse(localStorage.getItem("integranteselegido"))[ele].sa+"</td>"+"<td id='edit'><input type='button' id='electronicos' onclick='eliminar(\""+JSON.parse(localStorage.getItem("integranteselegido"))[ele].carne+"\")' value='Eliminar'/></td>"+"</tr>";
          
      }
}

function eliminar(carnet){
    
    for(var ele in integrantes){
        if(integrantes[ele].carne == carnet){
            integrantes.splice(ele,1);
        }
        
    }

    Guardartodos();
}
   
