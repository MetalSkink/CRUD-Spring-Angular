import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {

  productos: Producto[] = [];

  constructor(private productoService: ProductoService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void{
    this.productoService.lista().subscribe(
      data=> {
        this.productos = data
      },
      err => {
        console.log(err);
      }
    )
  }

  borrar(id?:number){
    this.productoService.delete(id).subscribe(
      data => {
        this.toastr.success('Producto borrado', 'OK', {
          positionClass: 'toast-bottom-right'
        });
        this.cargarProductos();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Error', {
          positionClass: 'toast-bottom-right'
        });
      }
    )
  }

}
