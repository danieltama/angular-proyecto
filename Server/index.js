const express = require('express');
const morgan = require('morgan');
const cors = require('cors');


// Initializations
const app = express();

const { mongoose } = require('./database');



// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

// Routes
app.use('/api/productos',require('./routes/productos.routes'));
app.use('/api/ventas',require('./routes/ventas.routes'));
app.use('/api/caja', require('./routes/caja.routes'));
app.use('/api', require('./routes/index.routes'))


// Starting the server
app.listen(app.get('port'), () => { 
    console.log('Server on port', app.get('port'));
});