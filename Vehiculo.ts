import { AutoCine } from "./Autocine"; 
export class Vehiculo {
  protected personas: number;
  protected placa: string;
  private autocine: AutoCine;

  constructor(personas: number, placa: string) {
    this.personas = personas;
    this.placa = placa;
  }

  public getValorAPagar(): number {
    return this.getAutocine().getTarifaEstandar() * this.personas;
  }

  public getPersonas(): number {
    return this.personas;
  }

  public setPersonas(personas: number): void {
    this.personas = personas;
  }

  public getPlaca(): string {
    return this.placa;
  }

  public setPlaca(placa: string): void {
    this.placa = placa;
  }

  public getAutocine(): AutoCine {
    return this.autocine;
  }

  public setAutocine(autocine: AutoCine): void {
    this.autocine = autocine;
  }
}//EndClass

