export class Productos {

  constructor(_id = '', nombre = '', categoria = '', preciou = ''){
    this._id = _id;
    this.nombre = nombre;
    this.categoria = categoria;
    this.preciou = preciou;
  }

  _id: string;
  nombre: string;
  categoria: string;
  preciou: string;
}
