import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.scss']
})
export class CuentaComponent implements OnInit {
  ListaDeEmpresas: any;
  display: boolean = false;
  empresa : any ={};
  Salidas: any;
  nombreAccion: string ="";
  categorias: any;
  verEmpresa: number = 1;
  unidad: any ={};
  displayUnidad: boolean = false;
  displayEliminarUnidad: boolean = false;
  unidadEliminar: any ={};
  cabezaEmpresa: any = {EntityID:191,
      nombre: "Raul javier Triveño Leaño",
      categoria_id:1,
      descripcion: "",
      telefono_contacto: "76407971",
      Administrador: "Ninguno",
      Nit:"6451708",
      Razon_Social:"Triveño",
      Tipo: "Cliente"
  };

  row :any;
  displayEliminar: boolean = false;
  estados = [
    { value: 'Cliente', label: 'Cliente' },
    { value: 'Factura', label: 'Factura' },
    ];
    estado: any= 'Cliente';
  listaUnidades=[
    {Unidad_ID:1,Nombre_Unidad:'central',Contacto:'77775586',Telefono:'536258',Detalles:'sin mayonesa'},
    {Unidad_ID:2,Nombre_Unidad:'plaza de granos quillacollo',Contacto:'654654',Telefono:'23184654',Detalles:'sin detalles'},
    {Unidad_ID:3,Nombre_Unidad:'capinota',Contacto:'95432316',Telefono:'745412',Detalles:'esto es un test'}
  ];
  constructor() { }

  ngOnInit(): void {
    this.categorias =[
      {id:1, name:'Regular'},
      {id:2, name:'Bueno'},
      {id:3, name:'importante'},
      {id:4, name:'Premiun'}
    ];
    /*this.httpService.lista_empresas(191).subscribe(
      (res: any) => {
        this.ListaDeEmpresas = res['data'];
        console.log(res.data);
      },
      err => {
        console.log(err);
      })*/

      this.empresa  ={
        EntityID:191,
        nombre: "",
        categoria_id:1,
        descripcion: "",
        telefono_contacto: "",
        Administrador: "",
        Nit:"",
        Razon_Social:"",
        Tipo: ""
      };
     
  }

  eliminar(row){
    this.row =row;
    this.displayEliminar = true;
    
  }
  nuevo(){
    this.display = true;
    this.nombreAccion = "Agregar";
    this.ngOnInit();
  }

  cancelarGuardar(){
    this.ngOnInit();
    this.display = false;
  }

  Guardar(empresa){
    empresa.categoria_id = empresa.categoria_id.id;
    empresa.Tipo = this.estado;
    console.log(empresa);
    console.log(this.estado);
   /*this.httpService.registrar_empresa(empresa).subscribe(
      (res: any) => {
        this.display = false;
        this.ngOnInit();
        console.log(res.data);
      },
      err => {
        console.log(err);
      })*/
  }
  eliminarTrue(){
    console.log(this.row);
    /*this.httpService.eliminar_empresa(this.row.empresa_id).subscribe(
      (res: any) => {
        this.displayEliminar = false;
        this.row={};
        this.ngOnInit();
        console.log(res.data);
      },
      err => {
        console.log(err);
      })*/
  }
  cancelarEliminar(){
    this.row={};
    this.displayEliminar = false;
    this.ngOnInit();
  }
  categoria : any 
  editar(row){
    console.log(row);
    this.empresa = row;
    this.categoria = this.categorias[row.categoria_id-1];
    this.estado = row.Tipo;
    console.log(this.categoria);
    console.log(this.estado);
    console.log(row);
   // this.salidas = this.Salidas[row.Salidas-1];
   // (row.Tipo=="Llamadas")? this.empresa.Tipo = 1 : this.empresa.Tipo = 0;
    this.nombreAccion = "Editar";
    this.display = true;
   
  }

  EditarTrueEmpresa(empresa){
    empresa.categoria_id = empresa.categoria_id.id;
    empresa.Tipo = this.estado;
    empresa.categoria_id = this.categoria.id;
    /*this.httpService.modificar_empresa(empresa).subscribe(
      (res: any) => {
        this.display = false;
        this.row={};
        this.ngOnInit();
        console.log(res.data);
      },
      err => {
        console.log(err);
      })*/
  }

  editarUnidad(row){
    this.nombreAccion = "Editar";
    this.displayUnidad = true;
    this.unidad = row;
    console.log(row);
  }

  nuevoUnidad(){
    this.nombreAccion = "Agregar";
    this.displayUnidad = true;
  }
  volverEmpresas(){
    this.verEmpresa =1;
    this.ngOnInit();
  }

  VerUnidades(row){
    this.cabezaEmpresa = row;
    this.verEmpresa = 0;
    this.unidadesLista(this.cabezaEmpresa.empresa_id);
  }
  
  unidadesLista(empresa_id){
    /*this.httpService.lista_unidades(191,empresa_id).subscribe(
      (res: any) => {
        this.listaUnidades = res['data'];
        console.log(res.data);
      },
      err => {
        console.log(err);
      })*/
  }

  GuardarUnidadTrue(unidad){
  console.log(unidad);
  unidad.empresa_id = this.cabezaEmpresa.empresa_id;
  /*this.httpService.registrar_unidad(unidad).subscribe(
    (res: any) => {
      this.listaUnidades = res['data'];
      this.displayUnidad = false;
      this.unidadesLista(this.cabezaEmpresa.empresa_id);
      this.unidad ={};
      console.log(res.data);
    },
    err => {
      console.log(err);
    })*/
  }

  EditarUnidadTrue(unidad){
    console.log(unidad);
    unidad.empresa_id = this.cabezaEmpresa.empresa_id;
    /*this.httpService.modificar_unidad(unidad).subscribe(
    (res: any) => {
      //this.listaUnidades = res['data'];
      this.displayUnidad = false;
      this.unidadesLista(this.cabezaEmpresa.empresa_id);
      console.log(res.data);
    },
    err => {
      console.log(err);
    })*/
  }

  eliminarUnidad(unidad){
    this.displayEliminarUnidad=true;
    this.unidadEliminar = unidad;
  }

  eliminarTrueUnidad(){
    /*this.httpService.eliminar_unidad(this.unidadEliminar.Unidad_ID).subscribe(
      (res: any) => {
        this.displayEliminarUnidad = false;
        this.unidadEliminar={};
        this.unidadesLista(this.cabezaEmpresa.empresa_id);
        console.log(res.data);
      },
      err => {
        console.log(err);
      })*/
  }
  cancelarEliminarUnidad(){
    this.displayEliminarUnidad=false;
    this.unidadEliminar ={};
  }

  cancelarGuardarUnidad(){
    this.displayUnidad = false;
      this.unidadesLista(this.cabezaEmpresa.empresa_id);
      this.unidad ={};
  }
}
