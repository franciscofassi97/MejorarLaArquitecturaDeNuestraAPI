const MensajesFirebase = require('../daos/Mensajes/MensajesFirebase')
const MensajesArchivos = require('../daos/Mensajes/MensajesArchivos')
const MensajesMongo = require('../daos/Mensajes/MensajesMongo')

class ContenedorMensajesFactory {

  createContenedor(tipoContenedor, nombreSchema) {
    if (tipoContenedor === 'MONGO') {
      const Mensajes = require('../../modules/mensajes/mensajesModel');
      return new MensajesMongo(Mensajes);
    }
    if (tipoContenedor === 'FIREBASE') return new MensajesFirebase(nombreSchema);
    if (tipoContenedor === 'ARCHIVOS') return new MensajesArchivos(nombreSchema);
  };
};

module.exports = ContenedorMensajesFactory;