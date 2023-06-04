import {Vehiculo} from './Vehiculo';

class Motocicleta extends Vehiculo {
  constructor(personas: number, placa: string) {
    super(personas, placa);
  }

  public getValorAPagar(): number {
    let pagar = -1;
    const descuento = (super.getAutocine().getTarifaEstandar() * 10) / 100;

    if (super.getPersonas() === 2) {
      pagar = (super.getAutocine().getTarifaEstandar() - descuento) *super.getPersonas();
    } else if (super.getPersonas() < 2) {
      pagar = super.getAutocine().getTarifaEstandar() *super.getPersonas();
    }

    return pagar;
  }
}//EndClass
