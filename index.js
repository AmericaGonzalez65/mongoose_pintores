// Importamos la dependencias
const express = require ('express');
const hbs = require ('hbs');
const mongoose = require ('mongoose');
//Creamos una constante para el valor de puerto
const PUERTO = process.env.PORT || 3000;

//Emplear las rutas
let pintoresRouter = require('./routes/pintor');

//Sitio web y hbs
const app = express();
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));

//Configurar mis rutas
app.get('/cabanel', (req, res)=>{
    res.render('cabanel', {
        autor : 'America Gonzalez',
        year : new Date().getFullYear(),
        title : 'Alexandre Cabanel'
    });
});

app.get('/gerome', (req, res)=>{
    res.render('gerome', {
        autor : 'America Gonzalez',
        year : new Date().getFullYear(),
        title : 'Jean-León Gerome'
    });
});
app.get('/rousseau', (req, res)=>{
    res.render('rosseau', {
        autor : 'America Gonzalez',
        year : new Date().getFullYear(),
        title : 'Henri Roussau'
    });
});
app.get('/brueghel', (req, res)=>{
    res.render('brueghel', {
        autor : 'America Gonzalez',
        year : new Date().getFullYear(),
        title : 'Pieter Brueghel'
    });
});
app.get('/contact', (req, res)=>{
    res.render('contact', {
        autor : 'America Gonzalez',
        year : new Date().getFullYear(),
        title : 'Contacto'
    });
});

//Vamos a decirle a express la ruta a emplear
app.use('/', pintoresRouter);

//La conexion con mongo db
mongoose.Promise = global.Promise;
const cadena = 'mongodb+srv://TacoConKtsup:65121165@cluster0-mzpms.mongodb.net/ParcialTres?retryWrites=true&w=majority'
mongoose.connect(cadena, {useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>{
        console.log('Se ha conectago con Mongo exitosamente')
})
.catch(err=> console.log(err));

//Arrancar el servidor web
app.listen(PUERTO, ()=>{
    console.log('Escuchando el puerto...');
});
