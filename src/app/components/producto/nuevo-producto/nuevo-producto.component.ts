import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {

  nombre = "";
  precio:number = 0;

  constructor(private productoService: ProductoService,
              private toastr: ToastrService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const producto = new Producto(this.nombre, this.precio);
    this.productoService.save(producto).subscribe(
      data=>{
        this.toastr.success('Producto creado', 'OK',{
          positionClass: 'toast-bottom-right'
        });
        this.router.navigate(['/']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Error',{
          positionClass: 'toast-bottom-right'
        });
        this.router.navigate(['/']);
      }
    )
  }

}
