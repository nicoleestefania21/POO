import {Vehiculo} from './Vehiculo';

class Carro extends Vehiculo {
  constructor(personas: number, placa: string) {
    super(personas, placa);
  }

  public getValorAPagar(): number {
    let pagar = 0;
    const descuento = (super.getAutocine().getTarifaEstandar() * 5) / 100;

    if (super.getPersonas() > 2) {
      pagar = (super.getAutocine().getTarifaEstandar() - descuento) * super.getPersonas();
    } else {
      pagar = super.getAutocine().getTarifaEstandar() * super.getPersonas();
    }

    return pagar;
  }
}//EndClass
