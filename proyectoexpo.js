var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var integrantes = new Schema({
    nombre  :   String
  , pa      :   String
  , sa      :   String
  , foto    :   String
  , carne   :   String
  , seccion :   String
});

var materialnoelectronico= new Schema({
    descripcion :   String
    
   ,cantidad    :   String
   ,indentificador: String
   ,fechaEntrada:   String
   ,fechaSalida :   String
   ,estado      :   Number
});

var materialeselectronicos= new Schema({
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
   ,idproyecto: String
   ,especialidad:String
   ,nivel   :   String
   ,seccion   :   String
   ,codigo   :   String
   ,aula    :   String
   ,urllogo :   String
   ,integrantes:[integrantes]
   ,materialesnoelectronicos:[materialnoelectronico]
   ,materialeselectronicos:[materialeselectronicos]
});

module.exports = mongoose.model('Proyectoexpo',proyectoexpo);