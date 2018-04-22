var Controller = require('./controllerproyecto');
var cors = require('cors');

module.exports = function(app){
   router.delete('api/proyectopornombre' function(req, res) {

    var db = req.db;

    var studentToDelete = req.params.id;

    db.collection('studentcollection').removeById(studentToDelete, function(err, result) {

        res.send((result === 1) ? { msg: '' } : { msg:'error: ' + err });

    });

});
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
    
    app.post('/log',function(req,res){
        
    });

}