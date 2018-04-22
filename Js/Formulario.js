var inte = JSON.parse(localStorage.getItem("estudiantesdelproyecto"));
var matesElec =  JSON.parse(localStorage.getItem("materialElecProyecto"));
var matesNoElec =  JSON.parse(localStorage.getItem("materialNoElecProyecto"));
    if(inte == null)
        {
            inte = [];
        }
    if(matesElec == null)
        {
            matesElec = [];
        }
    if(matesNoElec == null){
        matesNoElec = [];
    }
//Guardar proyectos

function guardarProyecto(){
        var files = $("#logo").get(0).files;
        var campos= new Object();
        campos.codigo= document.getElementById("code").value;
        campos.nombre= document.getElementById("nombre").value;
        campos.nivel= document.getElementById("nivel").value;
        campos.especialidad= document.getElementById("especialidad").value;
        campos.aula= document.getElementById("numeroAula").value;  
        campos.seccion= document.getElementById("seccion").value; 
        campos.urllogo= document.getElementById("logo").value; 
        
        if (files.length > 0){
            var sFilename =files[0].name;
            var sFileExtension = sFilename.split('.')[sFilename.split('.').length - 1].toLowerCase();
            campos.urllogo= 'logos/'+ document.getElementById("nombre").value + "." + sFileExtension;
        }
        else{
            campos.urllogo= 'logos/' + document.getElementById('nombre').value;
        }
    $('input[type="text"],input[type="date"]').val('');
        $.ajax({ 
            //url: 'http://localhost:8080/api/insertarproyecto',
            url: 'api/insertarproyecto',
            type: 'POST',
            dataType:'json',
            data: campos,
            success: function(datad, textStatus, xhr){
            subeImagen();
            alert("Se guardo el proyecto");
        },
        error: function(xhr, textStaus, errorThrown){
            alert (xhr);
        }
        });
}
//Mostrar proyectos guardados
function mostrarProyectos(){
    var campos = new Object();
    $.ajax({
        //url: 'http://localhost:8080/api/todosProyectosexpo',
        url: 'api/todosProyectosexpo',
        type: 'POST',
        dataType:'json',
        data: campos,
        success: function(datad, textStatus, xhr){
            for (var ele in datad){
                document.getElementById("bodyTabla").innerHTML += 
                "<tr>" +
                    "<td class='resul'>"+datad[ele].codigo + "</td>" + 
                    "<td class='resul'>"+datad[ele].nombre+"</td> " +
                    "<td class='resul'>"+datad[ele].seccion+"</td> "+
                    "<td class='resul'>"+datad[ele].nivel+"</td> "+
                    "<td class='resul'>"+datad[ele].especialidad+"</td> "+
                    "<td class='resul'>" +datad[ele].urllogo+"</td> "+
                    "<td class='resul'>"+datad[ele].aula+"</td>" + 
                    "<td class='resul'>"+"<button type='submit' class='botonTabla' onclick='eliminarProyecto(\""+datad[ele].nombre +")'>Eliminar</button>"+"</td>" + 
                    "<td class='resul'>"+"<button type='submit' class='botonTabla' onclick='annadirIntegranteTabla(\""+datad[ele].nombre +"\","+JSON.stringify(datad[ele].integrantes)+")'>Añadir</button>"+"</td>" + 
                    "<td class='resul'>"+"<button type='submit'  class='botonTabla' onclick='annadirMaterialesElecTabla(\""+datad[ele].nombre +"\","+JSON.stringify(datad[ele].materialeselectronicos)+")'>Añadir</button>"+"</td>" +
                    "<td class='resul'>"+"<button type='submit'  class='botonTabla' onclick='annadirMaterialesNoElecTabla(\""+datad[ele].nombre +"\","+JSON.stringify(datad[ele].materialesnoelectronicos)+")'>Añadir</button>"+"</td>" +
                "</tr>";
                
            }
$(document).ready(function() {
    $('table').DataTable( {
        "language": {
            "paginate": {
                "previous": "Anterior",
                "next": "Siguiente"
            },
            "info": "Mostrando _PAGE_ de _PAGES_ de _MAX_ registros totales",
            "search": "Buscar",
            "lengthMenu": "Mostrar _MENU_ resultados",
            "emptyTable": "No hay datos en la tabla"
        },   
        responsive: {
            details: {
                display: $.fn.dataTable.Responsive.display.modal( {
                    header: function ( row ) {
                        var data = row.data();
                        return 'Detalles del proyecto '+data[1];
                    }
                } ),
                renderer: $.fn.dataTable.Responsive.renderer.tableAll( {
                    tableClass: 'table'
                } )
            }
        }
    } );
} );


        },
    });
}

    
//Fin para proyectos
//Para imagen
function subeImagen(){
var files = $("#logo").get(0).files;
if (files.length > 0){
    var data = new FormData();
    for (i = 0; i < files.length; i++){
        data.append(document.getElementById('nombre').value, files[i]);
    }
    $.ajax({
        type: "POST",
        //url:"http://localhost:8080/log",
        url:"/log",
        contentType: false,
        processData: false,
        enctype: "multipart/form-data",
        data: data,
        success: function (result){
            alert ("Imagenes guardadas");
            location.href='Formulario.html'
        }
        
    });
}
else{
    alert ("Por favor seleccione una imagen");
}
}
//Fin imagen
//Empieza el añadido de estudiantes
function annadirestudiante(){  
    var integrante = new Object();
    integrante.nombre= document.getElementById("nombre").value;
    integrante.pa= document.getElementById("pa").value;
    integrante.sa= document.getElementById("sa").value;
    integrante.carne= document.getElementById("carne").value;
    integrante.foto= document.getElementById("foto").value;
    inte.push(integrante);
    alert("Se añadió el integrante, puede añadir otro");
    document.getElementById("nombre").innerHTML="";
    $('input[type="text"]').val('');
}
function guardarIntegrantes(){
  var objeto = new Object();
    objeto.nombre = localStorage.getItem("nombreproyectoseleccionado");
    objeto.integrantes = inte;
    $.ajax({ 
            // url: 'http://localhost:8080/api/annadeestudiantes',
            url: '/api/annadeestudiantes',
            type: 'POST',
            dataType:'json',
            data: objeto,
            success: function(datad, textStatus, xhr){
            alert("Se guardaron los integrantes");
        },
        error: function(xhr, textStaus, errorThrown){
            alert (xhr);
        }
        });
}
function annadirIntegranteTabla(nombreproyecto,estudiantes){
    localStorage.setItem("estudiantesdelproyecto",JSON.stringify(estudiantes));
    localStorage.setItem("nombreproyectoseleccionado",nombreproyecto);
    window.open('Integrantes.html')
}
function mostrarIntegrantes(){
    document.getElementById("headerTabla").innerHTML ="<tr><th class='titulos'>Nombre</th><th class='titulos'>Carne</th><th class='titulos'>Foto</th><th class='titulos'>Pa</th><th class='titulos'>Sa</th><th class='titulos'>Boton</th></tr>"
    

    for (var ele in inte){
        document.getElementById("bodyTabla").innerHTML += 

            "<tr>" +
                "<td class='resul'>" + inte[ele].nombre + "</td>" + 
                "<td class='resul'>" + inte[ele].carne + "</td>" +
                "<td class='resul'>" + inte[ele].foto + "</td>" + 
                "<td class='resul'>" + inte[ele].pa + "</td>" + 
                "<td class='resul'>" + inte[ele].sa + "</td>" + 
                "<td class='resul'>"+"<button type='submit'  class='botonTabla' id='eliminar' onclick='eliminarEstudiantes(\""+inte[ele].carne+"\")'>Eliminar</button>"+"</td>" 
            "</tr>";
  
    }
$(document).ready(function() {
    $('table').DataTable( {
        "language": {
            "paginate": {
                "previous": "Anterior",
                "next": "Siguiente"
            },
            "info": "Mostrando _PAGE_ de _PAGES_ de _MAX_ registros totales",
            "search": "Buscar",
            "lengthMenu": "Mostrar _MENU_ resultados",
            "emptyTable": "No hay datos en la tabla"
        },   
        responsive: {
            details: {
                display: $.fn.dataTable.Responsive.display.modal( {
                    header: function ( row ) {
                        var data = row.data();
                        return 'Detalles del integrante';
                    }
                } ),
                renderer: $.fn.dataTable.Responsive.renderer.tableAll( {
                    tableClass: 'table'
                } )
            }
        }
    } );
} );
}
function eliminarEstudiantes(carne){
$(document).on('click', '#eliminar', function (event) {
    event.preventDefault();
    $(this).closest('tr').remove();
});
        for (var ele in inte){
        if (inte[ele].carne== carne){
            inte.splice(ele,1);
        }
        
    }
    mostrarIntegrantes();
    guardarIntegrantes();
}

//Fin del añadido de integrantes




//Empieza materiales electronicos

function annadirMaterialElec(){

    var materialElec = new Object();
    materialElec.descripcion= document.getElementById("descri").value;
    materialElec.cantidad= document.getElementById("cantidad").value;
    materialElec.marca= document.getElementById("marca").value;
    materialElec.color= document.getElementById("color").value;
    materialElec.identificador= document.getElementById("identi").value;
    materialElec.responsable= document.getElementById("responsable").value;
    matesElec.push(materialElec);
    alert("Se añadió el material electronico, puede añadir otro");
    $('input[type="text"]').val('');
}
function guardarMaterialElec(){
  var objetoElec = new Object();
    objetoElec.nombre = localStorage.getItem("nombreproyectoseleccionado");
    objetoElec.materialeselectronicos = matesElec;
    $.ajax({ 
            url: 'http://localhost:8080/api/materialeslectronicos',
            type: 'POST',
            dataType:'json',
            data: objetoElec,
            success: function(datad, textStatus, xhr){
            alert("Se guardaron los materiales electronicos");
        },
        error: function(xhr, textStaus, errorThrown){
            alert (xhr);
        }
        });
    mostrarMaterialElec();
}
function mostrarMaterialElec(){

    document.getElementById("headerTable").innerHTML =
            "<tr><th class='titulos'>Descripcion</th><th class='titulos'>Cantidad</th><th class='titulos'>Marca</th><th class='titulos'>Color</th><th class='titulos'>Identificador</th><th class='titulos'>Responsable</th><th class='titulos'>Botón</th></tr>";

    for (var ele in matesElec){
        
        document.getElementById("bodyTable").innerHTML = 
        '<tbody>'+
            "<tr>" +
                "<td class='resul'>" + matesElec[ele].identificador + "</td>" +
                "<td class='resul'>" + matesElec[ele].descripcion + "</td>" + 
                "<td class='resul'>" + matesElec[ele].cantidad + "</td>" +
                "<td class='resul'>" + matesElec[ele].marca + "</td>" + 
                "<td class='resul'>" + matesElec[ele].color + "</td>" + 
                "<td class='resul'>" + matesElec[ele].responsable + "</td>" +  
                "<td class='resul'>" +"<button type='submit'  class='botonTabla' id='eliminar' onclick='eliminarMaterialesElec(\""+matesElec[ele].identificador+"\")'>Eliminar</button>" + "</td>" +  
            "</tr>"+
        "</tbody>";    
    }
$(document).ready(function() {
    $('table').DataTable( {
        "language": {
            "paginate": {
                "previous": "Anterior",
                "next": "Siguiente"
            },
            "info": "Mostrando _PAGE_ de _PAGES_ de _MAX_ registros totales",
            "search": "Buscar",
            "lengthMenu": "Mostrar _MENU_ resultados",
            "emptyTable": "No hay datos en la tabla"
        },   
        responsive: {
            details: {
                display: $.fn.dataTable.Responsive.display.modal( {
                    header: function ( row ) {
                        var data = row.data();
                        return 'Detalles del integrante';
                    }
                } ),
                renderer: $.fn.dataTable.Responsive.renderer.tableAll( {
                    tableClass: 'table'
                } )
            }
        }
    } );
} );
}
function eliminarMaterialesElec(id){

    for (var ele in matesElec){
        if (matesElec[ele].identificador == id){
            matesElec.splice(ele,1);
        }
        
    }
    mostrarMaterialElec();
    guardarMaterialElec();
}
function annadirMaterialesElecTabla(nombreproyecto,materiales){
    localStorage.setItem("materialElecProyecto",JSON.stringify(materiales));
    localStorage.setItem("nombreproyectoseleccionado",nombreproyecto);
    window.open('Materiales Electronicos.html')
}
//Fin materiales electronicos



//Empieza el añadido de materiales NO electronicos


function annadirMaterialNoElec(){

    var materialNoElec = new Object();
    materialNoElec.descripcion= document.getElementById("descri").value;
    materialNoElec.cantidad= document.getElementById("cantidad").value;
    materialNoElec.identificador= document.getElementById("identi").value;
    materialNoElec.responsable= document.getElementById("responsable").value;
    materialNoElec.fechaEntrada= document.getElementById("fechaEntrada").value;
    materialNoElec.fechaSalida= document.getElementById("fechaSalida").value;
    matesNoElec.push(materialNoElec);
    alert("Se añadió el material no electronico, puede añadir otro");
    $('input[type="text"],input[type="date"]').val('');
}
function guardarMaterialNoElec(){
  var objetoNoElec = new Object();
    objetoNoElec.nombre = localStorage.getItem("nombreproyectoseleccionado");
    objetoNoElec.materialesnoelectronicos = matesNoElec;
    $.ajax({ 
            //url: 'http://localhost:8080/api/annadematerialnoelectronico',
            url: 'api/annadematerialnoelectronico'
            type: 'POST',
            dataType:'json',
            data: objetoNoElec,
            success: function(datad, textStatus, xhr){
            alert("Se guardaron los materiales no electronicos");
        },
        error: function(xhr, textStaus, errorThrown){
            alert (xhr);
        }
        });
    mostrarMaterialNoElec();
}
function mostrarMaterialNoElec(){

    document.getElementById("tabla").innerHTML =

            "<tr><th class='titulos'>Identificador</th><th class='titulos'>Descripcion</th><th class='titulos'>Cantidad</th><th class='titulos'>Responsable</th><th class='titulos'>Boton</th></tr>";


    for (var ele in matesNoElec){
        
        document.getElementById("tabla").innerHTML += 
        '<tbody>'+
            "<tr>" +
                "<td class='resul'>" + matesNoElec[ele].identificador + "</td>" +
                "<td class='resul'>" + matesNoElec[ele].descripcion + "</td>" + 
                "<td class='resul'>" + matesNoElec[ele].cantidad + "</td>" +
                "<td class='resul'>" + matesNoElec[ele].responsable + "</td>" + 
                "<td class='resul'>"+"<button type='submit' class='botonTabla' onclick='eliminarMaterilesNoElec(\""+matesNoElec[ele].identificador+"\")'>Eliminar</button>"+"</td>" 
            "</tr>"+
        "</tbody>";    
    }
    $(document).ready(function() {
    $('table').DataTable( {
        responsive: true,
        keys: true
    } );
} );

}
function annadirMaterialesNoElecTabla(nombreproyecto,materiales){
    localStorage.setItem("materialNoElecProyecto",JSON.stringify(materiales));
    localStorage.setItem("nombreproyectoseleccionado",nombreproyecto);
    window.open('Materiales No Electronicos.html')
}
function eliminarMaterilesNoElec(id){
    for (var ele in matesNoElec){
        if (matesNoElec[ele].identificador == id){
            matesNoElec.splice(ele,1);
        }     
    }
    mostrarMaterialNoElec();
    guardarMaterialNoElec();
}