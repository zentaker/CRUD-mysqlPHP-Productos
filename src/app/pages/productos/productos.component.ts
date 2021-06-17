import { Component, OnInit } from '@angular/core';
import { ProductoModel } from 'src/app/models/producto.model';

import { ServicioproductoService } from 'src/app/services/servicioproducto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: ProductoModel[]=[];
  cargando = false;


  constructor(private service: ServicioproductoService) { }

  ngOnInit(): void {
    this.cargando = true;
    this.service.getProductos().subscribe(
      resp=> {
        this.productos = resp
        this.cargando = false;

      }
    )
  }

  borrarproducto(producto: ProductoModel, i:number){

    Swal.fire({
      icon: 'question',
      title: 'Esta Seguro?',
      text: `Esta seguro que quiere eliminar ${ producto.productName }`,
      showConfirmButton: true,
      showCancelButton: true
    }).then(resp => {
      if (resp.value) {
        this.productos.splice(i, 1);
        this.service.deleteproducto(producto.id_producto).subscribe();

     }
   })


  }

}
