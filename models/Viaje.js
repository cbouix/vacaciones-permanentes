var mongoose = require('mongoose');

var ViajeSchema = new mongoose.Schema({
  nombre: String,
  destino: String
  //destinos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Destino' }]
});

mongoose.model('Viaje', ViajeSchema);
