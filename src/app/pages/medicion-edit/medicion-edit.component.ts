import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio/servicio.service';

@Component({
  selector: 'ngx-medicion-edit',
  templateUrl: './medicion-edit.component.html',
  styleUrls: ['./medicion-edit.component.scss']
})
export class MedicionEditComponent implements OnInit {

  data: any = {
    anio:{name:'--'},
    mes:{name:'--'}
  };
  anio: any = {};
  mes: any = {};

  constructor(private servicio: ServicioService) {
  }

  settings = {
    columns: {
      idUser: {
        title: 'ID',
        type: 'number',
        // filter: false,
      },
      numero: {
        title: 'Medidor',
        type: 'string',
        filter: false,
      },
      socio: {
        title: 'Socio',
        type: 'string',
        // filter: false,
      },
      estado: {
        title: 'Estado',
        type: 'string',
        filter: false,
      },
      lecturaAnt: {
        title: 'Lectura Anterior',
        type: 'string',
        filter: false,
      },
      lecturaAct: {
        title: 'Ultima Lectura',
        type: 'string',
        filter: false,
      },
      total: {
        title: 'Importe',
        type: 'string',
        filter: false,
      },
    },
    actions: {
      columnTitle: 'Actions',
      add: false,
      edit: false,
      delete: false,
      custom: [
        { name: 'viewrecord', title: '<i class="ion-edit"></i>'},
      ],
      position: 'right',
      // filter:false
    },
  };
  // source: LocalDataSource = new LocalDataSource();
  source: any;
  ngOnInit(): void {
    this.anio = [
      {name: 2021},
      {name: 2022},
      {name: 2023},
      {name: 2024},
      {name: 2025},
      {name: 2026},
      {name: 2027},
      {name: 2028},
      {name: 2029},
      {name: 2030},
      {name: 2031},
      {name: 2032},
    ];
    this.mes = [
      {name: 1},
      {name: 2},
      {name: 3},
      {name: 4},
      {name: 5},
      {name: 6},
      {name: 7},
      {name: 8},
      {name: 9},
      {name: 10},
      {name: 11},
      {name: 12},
    ]
  }
  
  mes1 : any;
  anio1: any;
  buscar(data) {
    console.log(data);
    this.mes1 = data.mes.name;
    this.anio1 = data.anio.name;
    if(data.mes.name!='--' && data.anio.name !='--' ){
      this.servicio.updateMedicionPerido(data.mes.name, data.anio.name).subscribe(
          res => {
            this.source =  res;
            console.log(res);
          },
          err => {
            console.log(err);
          },
      );
    }else{
      this.servicio.showToast( 'danger', 'Notificación', 'Es obligatoria selecionar mes y año');
    }

  }

  onCustomAction(event) {
    switch ( event.action) {
      case 'viewrecord':
        this.viewRecord(event.data);
        break;
      case 'editrecord':
        // this.editRecord(event.data);
    }
  }
  displayVariante: boolean = false;
  socioMedidor: any = {};
  fechaHoy = new Date();
  viewRecord(event) {
    const fechaMedida = new Date(event.fechaUltimaMedicion);
    // if (this.fechaHoy.getMonth() + 1 > fechaMedida.getMonth() + 1 && this.fechaHoy.getFullYear() >= fechaMedida.getFullYear()){
      console.log(event.socio);
      this.socioMedidor = event;
      // this.socioMedidor.fechaMedicion = new Date().toISOString().slice(0, 10);
      this.socioMedidor.periodoMes = new Date(event.fechaMedicion).getMonth() + 1;
      this.socioMedidor.periodoAno = new Date(event.fechaMedicion).getFullYear();
      // this.socioMedidor.total = 0;
      // this.socioMedidor.consumo = 0;
      // this.socioMedidor.flag = 0;
      console.log(this.socioMedidor.fechaMedicion);
      // this.socioMedidor.lectura = 0;
      this.displayVariante = true;
      // console.log(this.servicio.socioMedidor);
      // this.dialogService.open(DialogNamePromptComponent, { context: event});
      //     // .onClose.subscribe(name => name && this.names.push(name));
    // }

    // if ( this.fechaHoy.getMonth() + 1 <= fechaMedida.getMonth() + 1 && this.fechaHoy.getFullYear() <= fechaMedida.getFullYear()){
    //   this.servicio.showToast( 'danger', 'Notificación', 'No se pudo hacer dos lecturas en el mismo periodo modifique la lecturacion de este periodo');
    // };
  }

  gen: any = false;
  generar(lectura) {
    console.log(lectura);
    // if(lectura.lectura)
    if(lectura.lecturaAct > lectura.lecturaAnt){
      this.socioMedidor.consumo = lectura.lecturaAct - lectura.lecturaAnt;
      if (this.socioMedidor.consumo <= 5) {
        this.socioMedidor.total = 20;
      } else {
        this.socioMedidor.total = this.socioMedidor.consumo * 4;
      }
      this.gen = true;
    } else{
      this.servicio.showToast( 'warning', 'Notificación', 'El valor de lectura tiene que ser mayor a la lectura actual');
    }

    // this.socioMedidor.total = 10;
  }

  guardar(socioMedidor) {
    // condicion antes de guardar
    console.log(socioMedidor);
    if(this.gen == true){
    socioMedidor.lecturaAnt = this.socioMedidor.lecturaAnt;
    socioMedidor.lecturaAct = this.socioMedidor.lecturaAct;
    // socioMedidor.pagado = 0;
    socioMedidor.medicions_id = this.socioMedidor.idMedicion;

    // if (socioMedidor.flag == 1) {
      this.servicio.updateMedicion(socioMedidor).subscribe(
          res => {
            this.displayVariante = false;
            this.socioMedidor = {};
            console.log(res);
          },
          err => {
            console.log(err);
          },
      );
    // }
    this.servicio.updateMedicionPerido(this.mes1, this.anio1).subscribe(
        res => {
          this.source =  res;
          console.log(res);
        },
        err => {
          console.log(err);
        },
      );
      this.gen = false;
      }else{
        this.servicio.showToast( 'warning', 'Notificación', 'Pulse el Boton Generara para continuar');
      }



  }

}
