import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../models/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class ServiciocategoriaService {

  constructor( private http: HttpClient) { }

  getCategorias() {
    const ruta = 'http://localhost/ServiciosPHP/categorias.php';
    return this.http.get<Categoria[]>(ruta);
    
  }
}
