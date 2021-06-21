const { url } = require('inspector');
const mongoose = require('mongoose');

const URI = 'mongodb://localhost/tienda';


mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(db => console.log('BD conectada'))
    .catch(err => console.error(err));

module.exports = mongoose;