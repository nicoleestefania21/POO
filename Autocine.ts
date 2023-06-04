import {Vehiculo} from './Vehiculo';
export class AutoCine {
  private tarifaEstandar: number;
  private ingresos: number;
  private autos: Vehiculo[];

  constructor(capacidad: number, tarifaEstandar: number) {
    this.tarifaEstandar = tarifaEstandar;
    this.autos = new Array<Vehiculo>(capacidad);
  }

  public verificarAutomovil(vehiculo: Vehiculo): boolean {
    return vehiculo.getValorAPagar() !== -1;
  }

  public registrarIngreso(vehiculo: Vehiculo): boolean {
    let nextPos = 0;
    let espacio = false;
    let existe = false;

    for (let i = 0; !espacio && !existe && i < this.autos.length; i++) {
      if (!espacio) {
        espacio = this.autos[i] === null;
        if (espacio) nextPos = i;
      }
      if (!existe) {
        if (this.autos[i] !== null) {
          existe = this.autos[i].getPlaca() === vehiculo.getPlaca();
        }
      }
    }

    vehiculo.setAutocine(this);

    if (!existe && espacio) {
      if (this.verificarAutomovil(vehiculo)) {
        this.autos[nextPos] = vehiculo;
        this.ingresos += this.autos[nextPos].getValorAPagar();
      }
    }

    return !existe && espacio && this.verificarAutomovil(vehiculo);
  }

  public getTarifaEstandar(): number {
    return this.tarifaEstandar;
  }

  public setTarifaEstandar(tarifaEstandar: number): void {
    this.tarifaEstandar = tarifaEstandar;
  }

  public getIngresos(): number {
    return this.ingresos;
  }

  public setIngresos(ingresos: number): void {
    this.ingresos = ingresos;
  }
}//EndClass
