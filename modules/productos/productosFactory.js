const ProductosFirebase = require('../daos/productos/productosFirebase')
const ProductosArchivos = require('../daos/productos/productosArchivos')
const ProductosMongo = require('../daos/productos/productosMongo')

class ContenedorProductosFactory {

  createContenedor(tipoContenedor, nombreSchema) {
    if (tipoContenedor === 'MONGO') {
      const Productos = require('../../modules/productos/productosModel');
      return new ProductosMongo(Productos);
    }
    if (tipoContenedor === 'FIREBASE') return new ProductosFirebase(nombreSchema);
    if (tipoContenedor === 'ARCHIVOS') return new ProductosArchivos(nombreSchema);
  };
};

module.exports = ContenedorProductosFactory;