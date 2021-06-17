import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ProductoModel } from '../models/producto.model';
import { map, delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ServicioproductoService {

  constructor(private http: HttpClient) { }

  getProductos() {
    const ruta = 'http://localhost/ServiciosPHP/productos.php';
    return this.http.get<ProductoModel[]>(ruta);
  }



  postProducto(producto:ProductoModel) {
    const ruta = 'http://localhost/ServiciosPHP/PostProducto.php';
    const formData: FormData = new FormData();

    formData.append("productName",producto.productName)
    formData.append("productCompany",producto.productcompany)
    formData.append("productPrice",producto.productPrice)
    formData.append("productImage1",producto.productImage1)

    return this.http.post(ruta,formData).pipe(
      map((resp:any) => {
        producto.id_producto = resp
        //regresa toda la instancia del producto con su id
        return producto;
      })
    )
  }
  updateProducto(producto:ProductoModel) {

    const ruta = 'http://localhost/ServiciosPHP/updateproducto.php';
    const formData: FormData = new FormData();

    formData.append("id_producto",producto.id_producto)
    formData.append("productName",producto.productName)
    formData.append("productCompany",producto.productcompany)
    formData.append("productPrice",producto.productPrice)
    formData.append("productImage1",producto.productImage1)

    return this.http.post(ruta,formData)


  }

  getproducto(id: any) {
    const ruta = 'http://localhost/ServiciosPHP/selecionarproducto.php';
    const formData: FormData = new FormData();
    formData.append("prod", id)

    return this.http.post(ruta, formData).pipe(
      map( (res:any)=> {

        const resp = res[0]



        return resp
      })
    )
  }

  deleteproducto(id:any) {
    console.log(id);

    const ruta = 'http://localhost/ServiciosPHP/eliminatproducto.php';

    const formData: FormData = new FormData();
    formData.append("id_producto", id)

    return this.http.post(ruta, formData)


  }
}


