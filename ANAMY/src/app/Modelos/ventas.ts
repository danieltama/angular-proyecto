export class Ventas {

  constructor(_id = '', cantidad = '', producto = '', total = ''){
    this._id = _id;
    this. cantidad = cantidad;
    this. producto = producto;
    this.total = total;
  }

  _id: string;
  cantidad: string;
  producto: string;
  total: string;
}
