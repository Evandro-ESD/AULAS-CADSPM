export class Autor {
  private nome: string;
  private sobreNome: string;

  constructor(nome: string, sobreNome: string) {
    this.nome = nome;
    this.sobreNome = sobreNome;
  }

  public getNome(): string {
    return this.nome;
  }

  public setNome(nome: string): void {
    this.nome = nome;
  }
  
  public getSobreNome(): string {
    return this.sobreNome;
  }  
  
  public setSobreNome(sobreNome: string): void {
    this.sobreNome = sobreNome;
  }

  getNomeCompleto():string{
        return this.nome + this.sobreNome
  }

  getMenssagem():string{
    return `${this.getNomeCompleto()}`
  }

}
