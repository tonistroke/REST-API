/*
  Elaborar una aplicación de línea de comandos en Python que sirva cuyo propósito sea mantener un diccionario de palabras del slang panameño (xopa, mopri, otras). Las palabras y su significado deben ser almacenadas dentro de una base de datos SQLite. Las opciones dentro del programa deben incluir como mínimo: a) Agregar nueva palabra, c) Editar palabra existente, d) Eliminar palabra existente, e) Ver listado de palabras, f) Buscar significado de palabra, g) Salir
*/

const express = require('express');
const morgan = require('morgan');
const app = express();

// settings
app.set('port', process.env.PORT || 4000);

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.use(require('./routes'));
app.use('/api/words', require('./routes/words'));
app.use('/api/users', require('./routes/users'));

// starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
