import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private URL = 'http://localhost:5000/api/Produto'

constructor(private http: HttpClient) {

 }

getProdutos(): Observable<any> {
  return this.http.get<any>(`${this.URL}`);
}

}
