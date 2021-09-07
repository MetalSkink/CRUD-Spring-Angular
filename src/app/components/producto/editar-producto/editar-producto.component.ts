import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {

  producto: Producto = {
    nombre: "",
    precio: 0
  };

  constructor(private productoService: ProductoService,
              private activatedRoute: ActivatedRoute,
              private toastr: ToastrService,
              private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.productoService.detail(id).subscribe(
      data=> {
        this.producto = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Error',{
          positionClass: 'toast-bottom-right'
        });
        this.router.navigate(['/']);
      }
    )
  }

  onUpdate():void {
    const id = this.activatedRoute.snapshot.params.id;
    this.productoService.update(id,this.producto).subscribe(
      data=>{
        this.toastr.success('Producto actualizado', 'OK',{
          positionClass: 'toast-bottom-right'
        });
        this.router.navigate(['/']);
      },
      err =>{
        this.toastr.error(err.error.mensaje, 'Error',{
          positionClass: 'toast-bottom-right'
        });
        this.router.navigate(['/']);
      }
    )
  }

  volver(): void {
    this.router.navigate(['/'])
  }

}
