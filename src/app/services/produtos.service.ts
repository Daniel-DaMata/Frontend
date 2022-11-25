import { IProduto } from './../components/Model/IProduto.model';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  private URL: string = 'http://localhost:3000/produtos'

  constructor(private http: HttpClient) {
   }

  buscarTodos(): Observable<IProduto[]> {
    return this.http.get<IProduto[]>(this.URL);
  }



}
