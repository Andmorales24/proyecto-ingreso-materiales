var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var integrantes = new Schema({
    nombre  :   String
  , pa      :   String
  , sa      :   String
});

var materialnoelectronico= new Schema({
    descripcion :   String
   ,cantidad    :   String
   ,estado      :   Number
});

var materialelectronico= new Schema({
    descripcion :   String
   ,cantidad    :   String
   ,marca       :   String
   ,color       :   String
   ,indentificador: String
   ,responsable :   String
   ,estado      :   Number
});

var proyectoexpo = new Schema({
    nombre  :   String
   ,especialidad:String
   ,nivel   :   Number
   ,urllogo :   String
   ,aula: String
   ,seccion: String
   ,codigo: String
   ,integrantes:[integrantes]
   ,materialesnoelectronicos:[materialnoelectronico]
   ,materialeselectronicos:[materialelectronico]
});

module.exports = mongoose.model('Proyectoexpo',proyectoexpo);