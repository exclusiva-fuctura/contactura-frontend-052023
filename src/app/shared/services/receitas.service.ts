import { Injectable } from '@angular/core';
import { Receita } from '../models/receita';
import { Observable, Subject, from } from 'rxjs';
import { DaoService } from '../dao/dao.service';

@Injectable({
  providedIn: 'root'
})
export class ReceitasService {

  private listaDeReceitas: Array<Receita> = [
    {
      id: 1,
      tipo: "salario",
      descricao: "Contracheque mês",
      mensagem: "Opaaa salario caiu",
      data: new Date(),
      valor: 20000.00
    }
  ];

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
}
