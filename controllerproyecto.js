var Proyectoexpo = require('./proyectoexpo');

//Obtiene todos los objetos Persona de la base de datos

exports.getProyectosExpo = function(req,res){
    Proyectoexpo.find(
        function(err,proyectoexpo) {
            if (err)
                res.send (err)
                    res.json (proyectoexpo); //devuelve todas las personas en JSON
                }
            );
}

exports.getproyectobynombre = function (req,res) {
    Proyectoexpo.find({nombre:req.body.nombre}, function(err, proyectoexpo){
        if (err)
            res.send(err)
                res.json(proyectoexpo); //devuelve todas las Personas en JSON        
                }
            );
};

exports.getproyectobyid = function(req,res){
    Proyectoexpo.find({_id:req.body._id},function(err,proyectoexpo){
        if (err)
            res.send(err)
                res.json(proyectoexpo); //devuelve todas las Personas en JSON        
            }
        );
};


//Guarda un objeto en Persona en base de datos
exports.setProyectoexpo = function(req,res){
    
    //Creo el objeto Persona
    Proyectoexpo.create(
    {nombre: req.body.nombre,codigo: req.body.codigo,especialidad: req.body.especialidad,nivel:req.body.nivel,aula:req.body.aula,urllogo:req.body.urllogo,integrantes:[],materialesnoelectronicos:[],materialeselectronicos:[],seccion: req.body.seccion},
        function(err, proyectoexpo){
            if(err)
                res.send(err);
            //Obtinene y devuelve todas las peronas tras crear una de ellas
            Proyectoexpo.find(function(err,proyectoexpo){
                if(err)
                    ers.send(err)
                res.json(proyectoexpo);
                console.log(req.body.nombre);
                console.log(req.body.aula);
                console.log(req.body.codigo);
                console.log(req.body.especialidad);
                console.log(req.body.nivel);
                console.log(req.body.urllogo);
                console.log(req.body.seccion);
            });
        });
    
}

//Modificamos un objeto Perosna de la base de datos
exports.annadirintegrantes = function(req, res){
    Proyectoexpo.update( {nombre : req.body.nombre},
                       {$set:{integrantes : req.body.integrantes}},
                        function(err, proyectoexpo) {
                            if(err){
                                res.send(err);
                                console.log(err);
                            console.log(req.body.integrantes);
                            console.log(req.body.nombre);
                            }
                    //Obtiene y devulve todas las personas tras crear una de ellas
                    Proyectoexpo.find(function(err,proyectoexpo){
                        if(err)
                            res.send(err)
                        res.json(proyectoexpo);
                        console.log(proyectoexpo);
                        console.log(req.body.integrantes);
                        console.log(req.body.nombre);
                    });
                });
            }


//Modificamos un objeto Persona de la base de datos
exports.annadirmaterialesnoelectronicos = function(req,res) {
    Proyectoexpo.update( {nombre : req.body.nombre},
                       {$set:{materialesnoelectronicos : req.body.materialesnoelectronicos}},
                        function(err, proyectoexpo){
                            if(err)
                                res.send(err);
                    //Obtiene y devuelve todas las personas tras crear una de ellas
                    Proyectoexpo.find(function(err,proyectoexpo){
                        if(err)
                            res.send(err);
                        res.json(proyectoexpo);
                        req.body.materialesnoelectronicos
                    });
                });
            }

//Modificammos un objeto Persona de la base de datos
exports.materialeselectronicos = function(req, res){
    Proyectoexpo.update( {nombre : req.body.nombre},
                         {$set:{materialeselectronicos : req.body.materialeselectronicos}},
                        function(err,proyectoexpo) {
                            if(err)
                                res.send(err)
                        //Obtiene y devuelve todas las personas tras crear una de ellas
                                Proyectoexpo.find(function(err, proyectoexpo){
                                    if(err)
                                        ers.send(err)
                                    res.json(proyectoexpo)
                                });
                            });
                    }

//Elimino un objeto Persona de la base de datos
exports.removeProyectoexpo = function(req,res){
    Proyectoexpo.remove({nombre : req.body.nombre}, function(req,res){
        if(err)
            res.send(err);
        //Obntiene y devuelve todas las personas tras crear una de ellas
        Proyectoexpo.find(function(err, proyectoexpo){
            if(err)
                res.send(err)
                res.json(proyectoexpo);
        });
    });
}