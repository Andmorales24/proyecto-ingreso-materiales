var express = require('express');
var app     = express();                    //utilizamos express
var mongoose= require('mongoose');          //mongoose para mongoDB
var port    = process.env.PORT || 8080;    //Cogemos el puerto 8080
var done = false;
var multer = require('multer');

//configura el multer
app.use(multer({ dest: './Js/logos/',
               rename: function (fieldname,filename){
                   return fieldname;
               },
                limits: {
                    fieldnameSize: 999999999,
                    fieldSize:999999999
                },
                onFileUploadStart: function(file){
                    console.log(file.originalname + 'is starting ...')
                    console.log(file.name);
                },
                onFileUploadComplete: function (file){
                    console.log(file.fieldname + 'Uploaded to ' + file.path)
                    
                    done=true;
                }            
}));
//mongoose.connect('mongodb://localhost:27017/proyectosexpo');          //local      //hacemos la conexiòn a
mongoose.connect('mongodb://<andmorales>:<andresmm2410>@ds153869.mlab.com:53869/proyecto-ingreso-materiales');
var db = mongoose.connection;
db.on('error',console.error.bind(console,'MongoDB error de conexiòn: '));
app.configure(function(){
    app.use(express.static(__dirname + '/'));
    app.use(express.logger('dev'))                                          //activamos el log en modo 'dev'
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    //app.use(bodyParser.json({Limit:'50mb'}));
    //app.use(bodyParser.urlencoded({Limit:'50mb', extended: true}))
});

//Cargamos los endpoints             
require('./routes.js')(app);

//cogemosel puerto para escuchar
app.listen(port);
console.log("APP por el puerto " + port);             