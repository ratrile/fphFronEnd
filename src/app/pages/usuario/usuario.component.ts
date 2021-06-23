import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio/servicio.service';

@Component({
  selector: 'ngx-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  ListaDeUsuario: any;
  usuario: any={
    name: "",
    ci: 0,
    direccion: "",
    numero:0
  };
  display: boolean = false;
  deuda : any ={
    EntityID:191,
    Descripcion: "",
    Boton:0,
    Cuotas: "",
    Intervalo:"",
    Monto_Registrado:"",
    Activo:1
  };
  row :any;
  displayEliminar: boolean = false;
  nombreAccion: any;

  constructor(private servicio: ServicioService) { }

  ngOnInit(): void {
    this.servicio.getAllusuario().subscribe(
      (res: any) => {
       // this.display = false;
        this.ListaDeUsuario = res;
        //this.ListaDeCompromisos = res['data'];
        //this.source = this.data.data;
        console.log(res);
      },
      err => {
        console.log(err);
      })
  }

  editar(row){
    console.log(row);
    this.usuario =row;
    this.display = true;
    this.nombreAccion = "Editar"
  }
  nuevo(){
    this.display = true;
    this.nombreAccion = "Agregar";
  }

  cancelarGuardarUsuario(){
    this.display = false;
    this.usuario  ={};
  }

  GuardarUsuarioTrue(usuario){
    console.log(usuario);
    usuario.detalle = "null";
    usuario.estado = 1;
    usuario.fecha = new Date().toISOString().slice(0, 10);

    this.servicio.createUsuario(usuario).subscribe(
      (res: any) => {
        this.display = false;
        this.ngOnInit();
       // this.ListaDeCompromisos = res['data'];
        //this.ListaDeCompromisos = res['data'];
        //this.source = this.data.data;
        console.log(res.data);
      },
      err => {
        console.log(err);
      })
  }
  EditarUsuarioTrue(usuario){
    console.log(usuario);
    this.servicio.updateUsuario(usuario).subscribe(
      (res: any) => {
        this.display = false;
        this.row={};
        this.ngOnInit();
       // this.ListaDeCompromisos = res['data'];
        //this.ListaDeCompromisos = res['data'];
        //this.source = this.data.data;
        console.log(res.data);
      },
      err => {
        console.log(err);
      })
  }
  cancelarEliminar(){
    this.row={};
    this.displayEliminar = false;
  }


}
