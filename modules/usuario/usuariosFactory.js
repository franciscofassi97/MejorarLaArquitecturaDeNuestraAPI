const UsuariosFirebase = require('../daos/usuarios/usuariosFirebase')
const UsuariosArchivos = require('../daos/usuarios/usuariosArchivos')
const UsuariosMongo = require('../daos/usuarios/usuariosMongo')

class ContenedorUsuariosFactory {

  createContenedor(tipoContenedor, nombreSchema) {
    if (tipoContenedor === 'MONGO') {
      const Usuario = require('../../modules/usuario/usuariosModel');
      return new UsuariosMongo(Usuario);
    }
    if (tipoContenedor === 'FIREBASE') return new UsuariosFirebase(nombreSchema);
    if (tipoContenedor === 'ARCHIVOS') return new UsuariosArchivos(nombreSchema);
  };
};

module.exports = ContenedorUsuariosFactory;