export class Caja {

  constructor(_id = '', cierrea = '',fechaa = '', saldot = '', hora = '', fechap = '', caja = '', retiro = ''){
    this._id = _id;
    this.cierrea = cierrea;
    this.fechaa = fechaa;
    this.saldot = saldot;
    this.hora = hora;
    this.fechap = fechap;
    this.caja = caja;
    this.retiro = retiro;
  }

  _id: string;
  cierrea: string;
  fechaa: string;
  saldot: string;
  hora: string;
  fechap: string;
  caja: string;
  retiro: string;
}
