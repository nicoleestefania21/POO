import {Vehiculo} from './Vehiculo';

class Bicicleta extends Vehiculo {
  constructor(personas: number, placa: string) {
    super(personas, placa);
  }

  public getValorAPagar(): number {
    let pagar = -1;
    const descuento = (super.getAutocine().getTarifaEstandar() * 30) / 100;

    if (super.getPersonas() === 1) {
      pagar = super.getAutocine().getTarifaEstandar() * super.getPersonas() - descuento;
    }

    return pagar;
  }
}//EndClass
