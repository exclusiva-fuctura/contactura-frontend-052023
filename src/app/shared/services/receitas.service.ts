import { Injectable } from '@angular/core';
import { Receita } from '../models/receita';

@Injectable({
  providedIn: 'root'
})
export class ReceitasService {

  private listaDeReceitas: Array<Receita> = [];

  public getReceitas(): Array<Receita> {
    return this.listaDeReceitas;
  }

  public get receitas(): Array<Receita> {
    return this.listaDeReceitas;
  }

  public setReceita(receita: Receita): void {
    this.listaDeReceitas.push(receita)
  }

  public set receita(receita: Receita) {
    this.listaDeReceitas.push(receita)
  }

  public set receitas(receitas: Receita[]) {
    this.listaDeReceitas = receitas
  }

  public setReceitas(receitas: Receita[]): void {
    this.listaDeReceitas = receitas
  }
}
