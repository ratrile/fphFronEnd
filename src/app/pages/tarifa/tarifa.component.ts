import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio/servicio.service';

@Component({
  selector: 'ngx-tarifa',
  templateUrl: './tarifa.component.html',
  styleUrls: ['./tarifa.component.scss']
})
export class TarifaComponent implements OnInit {

  ListaDeTarifas: any;
  tarifaEdit: any={
    minimo: "",
    costoMinimo:"",
    costoAdicional: "",
 
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
    this.servicio.listaTarifas().subscribe(
      (res: any) => {
       // this.display = false;
        this.ListaDeTarifas = res;
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
    this.tarifaEdit =row;
    this.display = true;
    this.nombreAccion = "Editar"
  }
  nuevo(){
    this.display = true;
    this.nombreAccion = "Agregar";
    this.tarifaEdit = {};
  }

  cancelarGuardarTarifa(){
    this.display = false;
    this.tarifaEdit  ={};
  }

  GuardarTarifaTrue(tarifa){
    console.log(tarifa);
    tarifa.activo = 1;
    this.servicio.crearTarifa(tarifa).subscribe(
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
  EditarTarifaTrue(tarifa){
    console.log(tarifa);
    this.servicio.editarTarifa(tarifa).subscribe(
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

  seleccionar(row){
    this.servicio.ElegirTarifa(row).subscribe(
      (res: any) => {
        //this.display = false;
        //this.row={};
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


}
