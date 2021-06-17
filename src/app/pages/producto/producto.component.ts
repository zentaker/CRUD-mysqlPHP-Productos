import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ProductoModel } from 'src/app/models/producto.model';
import { ServicioproductoService } from 'src/app/services/servicioproducto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  producto: ProductoModel = new ProductoModel();





  constructor(private fb: FormBuilder, private service: ServicioproductoService, private route: ActivatedRoute) {

  }




  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== 'nuevo') {


      this.service.getproducto(id).subscribe((res) => {
        this.producto = res;
        console.log(res);



      })




    }
  }


  guardar( form: NgForm) {

    Swal.fire({
      icon: 'info',
      title: 'Espere',
      text: 'Guardando informacion',
      allowOutsideClick: false,

    });
    Swal.showLoading();


    if (this.producto.id_producto) {
      this.service.updateProducto(this.producto).subscribe( resp  => {
        Swal.fire({
          icon: 'success',
          title: this.producto.productName,
          text: 'Se actualizo correctamente',


        });
      })

    } else {

      this.service.postProducto(this.producto).subscribe(
        resp => {
          console.log(resp);
          this.producto = resp;
          Swal.fire({
            icon: 'success',
            title: this.producto.productName,
            text: 'Se actualizo correctamente',


          });
        }
      )

    }

  }



/*   guardar(values: { productName: any; productCompany: any; productPrice: any; productImage1: any; }) {


    Swal.fire({
      icon: 'info',
      title: 'Espere',
      text: 'Guardando informacion',
      allowOutsideClick: false,

    });
    Swal.showLoading();

    this.service.postProducto(values.productName, values.productCompany, values.productPrice, values.productImage1).subscribe( resp => {

      Swal.fire({
        icon: 'success',
        title: 'se actualizo on el id:' + resp,
        text: 'Se actualizo correctamente',


      });

    })


  } */


}
