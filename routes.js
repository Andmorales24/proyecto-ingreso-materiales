var Controller = require('./controllerproyecto');
var cors = require('cors');

module.exports = function(app){

    app.use(cors());
    //Devolver todas los personas
    app.post('/api/insertarproyecto', Controller.setProyectoexpo);
    //Crear una nueva persona
    
    app.post('/api/todosProyectosexpo', Controller.getProyectosExpo);
   // app.post('/api/todosProyectosexpo',function(req,res){res.send("hola"); });
    app.post('/api/annadeestudiantes', Controller.annadirintegrantes);
    
    app.post('/api/annadematerialnoelectronico', Controller.annadirmaterialesnoelectronicos);
    
    app.post('/api/materialeslectronicos', Controller.materialeselectronicos);
    
    app.post('/api/proyectopornombre', Controller.getproyectobynombre);
    
    app.post('/api/proyecyoporid', Controller.getproyectobyid);
    
    app.post('/api/eliminarproyecto', Controller.removeProyectoexpo);
    
    app.post('/api/log',function(req,res){
        
    });

}