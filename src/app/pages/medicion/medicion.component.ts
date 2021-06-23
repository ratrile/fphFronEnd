import { Component, OnInit, TemplateRef } from '@angular/core';
import { ServicioService } from '../../servicio/servicio.service';
import { NbDialogService } from '@nebular/theme';
import { DialogNamePromptComponent } from './dialog-lecturacion/dialog-name-prompt.component';

@Component({
  selector: 'ngx-medicion',
  styleUrls: ['./medicion.component.scss'],
  templateUrl: './medicion.component.html',
  providers: [ServicioService],
})
export class MedicionComponent implements OnInit {

    names: string[] = [];

    settings = {
    // add: {
    //   addButtonContent: '<i class="nb-plus"></i>',
    //   createButtonContent: '<i class="nb-checkmark"></i>',
    //   cancelButtonContent: '<i class="nb-close"></i>',
    // },
    // edit: {
    //   editButtonContent: '<i class="nb-edit"></i>',
      // saveButtonContent: '<i class="nb-checkmark"></i>',
      // cancelButtonContent: '<i class="nb-close"></i>',
    // },
    // delete: {
    //   deleteButtonContent: '<i class="nb-trash"></i>',
    //   confirmDelete: true,
    // },
    columns: {
     // medidorId: {
     //   title: 'IDmedidor',
     //   type: 'number',
     //   hide: true,
        // filter: false,
     // },
      idUser: {
        title: 'ID',
        type: 'number',
        // hide: true,
        // filter: false,
      },
      medidor: {
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
      lecturaAct: {
        title: 'Ultima Lectura',
        type: 'string',
        filter: false,
      },

      // custom: {
      //   name: 'viewrecord', title: '<i class="ion-edit"></i>'
      // },
//         custom: {
//           title:'Detail',
//           type:'html',
//           name: 'viewrecord',
//           valuePrepareFunction :(cell,row)=>{
//                return `<a title="See Detail Product" > <i class="ion-edit"></i></a>`;
//              // return `<a style="padding: inherit;" icon="edit-outline" (click)="editarAtri(row,cell)"></a>
// //                                <a style="padding: inherit;" icon="trash-2-outline" (click)="showDialogoVariante(row, cell)"></a>`
//           },
// //           custom: [
// //               { name: 'viewrecord', title: '<i class="ion-edit"></i>'},
// //               { name: 'editrecord', title: '&nbsp;&nbsp;<i class="ion-edit"></i>' }
// //           ],
// //           filter:false
//       },
    },
        actions: {
            columnTitle: 'Actions',
            add: false,
            edit: false,
            delete: false,
            custom: [
                { name: 'viewrecord', title: '<i class="ion-android-clipboard"></i>'},
                { name: 'editrecord', title: '<i class="ion-edit"></i>'},
            ],
            position: 'right',
            // filter:false
        },
  };
    // source: LocalDataSource = new LocalDataSource();
  source: any;
  //
  // data = [
  //     // {id:1,name:"raul","ci":"123456","direccion":"las lomas","detalle":"ninguno"},
  //     // {id:2,"name":"sandra","ci":"654321","direccion":"los piyos","detalle":"ninguno"}
  //     ];
  data: any ;

  constructor(private servicio: ServicioService, private dialogService: NbDialogService /*, private router: Router*/) {
    // this.servicio.getAllusuario().subscribe(
    // 	res=>{
    // 		console.log(res);
    // 	},
    // 	err=>{
    // 		console.log(err);
    //         // this.servicio.showToast('danger', 'Notificación', 'Ocurrio un error al obtener los datos');
    // 	}
    // 	);

    // this.source = new LocalDataSource(this.data);
  }

  ngOnInit(): void {
    // this.socioMedidor.fechaMedicion = new Date();
    // console.log(this.socioMedidor.fechaMedicion);
    this.servicio.getAllMedidores().subscribe(
        res => {
          this.source =  res;
          console.log(res);
        },
        err => {
          console.log(err);
        },
    );
    // this.source.load(this.data);
    // console.log(this.source);
  }

onCustomAction(event) {
    switch ( event.action) {
        case 'viewrecord':
            this.viewRecord(event.data);
            break;
        case 'editrecord':
            this.editRecord(event.data);
    }
}
    displayVariante: boolean = false;
    socioMedidor: any = {};
    fechaHoy = new Date();
    viewRecord(event) {
     console.log( Number(new Date('1985-01-01')));
     
        const fechaMedida = new Date(event.fechaUltimaMedicion);
        console.log( Number(fechaMedida));
        if ( this.fechaHoy.getMonth()+1 > fechaMedida.getMonth()+1 && this.fechaHoy.getFullYear() >= fechaMedida.getFullYear()){
            console.log(event);
            this.socioMedidor = event;
            this.socioMedidor.fechaMedicion = new Date().toISOString().slice(0, 10);
            this.socioMedidor.periodoMes = new Date().getMonth() + 1;
            this.socioMedidor.periodoAno = new Date().getFullYear();
            this.socioMedidor.total = 0;
            this.socioMedidor.consumo = 0;
            this.socioMedidor.flag = 0;
            console.log(this.socioMedidor.fechaMedicion);
            // this.socioMedidor.lectura = 0;
            this.displayVariante = true;
            // console.log(this.servicio.socioMedidor);
            // this.dialogService.open(DialogNamePromptComponent, { context: event});
            //     // .onClose.subscribe(name => name && this.names.push(name));
        }
        
        if( this.fechaHoy.getMonth() + 1 <= fechaMedida.getMonth() + 1 && this.fechaHoy.getFullYear() <= fechaMedida.getFullYear()){
            this.servicio.showToast( 'danger', 'Notificación', 'No se pudo hacer dos lecturas en el mismo periodo modifique la lecturacion de este periodo');
        };
        console.log(fechaMedida);
        console.log(new Date('1985-01-01'));
        if(Number(fechaMedida) == Number(new Date('1985-01-01'))){
          console.log(event);
          this.socioMedidor = event;
          this.socioMedidor.fechaMedicion = new Date().toISOString().slice(0, 10);
          this.socioMedidor.periodoMes = new Date().getMonth() + 1;
          this.socioMedidor.periodoAno = new Date().getFullYear();
          this.socioMedidor.total = 0;
          this.socioMedidor.consumo = 0;
          this.socioMedidor.flag = 0;
          console.log(this.socioMedidor.fechaMedicion);
          // this.socioMedidor.lectura = 0;
          this.displayVariante = true;
        }
    }

    editRecord(event) {
        console.log(event);
        const fechaMedida = new Date(event.fechaUltimaMedicion);
        if (this.fechaHoy.getMonth() + 1 == fechaMedida.getMonth() + 1 && this.fechaHoy.getFullYear() == fechaMedida.getFullYear()){
            console.log(event.socio);
            this.socioMedidor = event;
            this.socioMedidor.fechaMedicion = new Date().toISOString().slice(0, 10);
            this.socioMedidor.periodoMes = new Date().getMonth() + 1;
            this.socioMedidor.periodoAno = new Date().getFullYear();
            this.socioMedidor.lectura = this.socioMedidor.lecturaAct;
            this.socioMedidor.lecturaAct = this.socioMedidor.lecturaAnt;
            this.socioMedidor.flag = 1;
            // console.log(this.socioMedidor.fechaMedicion);
            // this.socioMedidor.lectura = 0;
            this.displayVariante = true;
            // console.log(this.servicio.socioMedidor);
            // this.dialogService.open(DialogNamePromptComponent, { context: event});
            //     // .onClose.subscribe(name => name && this.names.push(name));
        }

        if( this.fechaHoy.getMonth() + 1 > fechaMedida.getMonth() + 1 && this.fechaHoy.getFullYear() >= fechaMedida.getFullYear()){
            this.servicio.showToast( 'danger', 'Notificación', 'No se puede modificar sin hacer una lecturacion previa');
        };
        if(Number(fechaMedida) == Number(new Date('1985-01-01'))){
          this.servicio.showToast( 'danger', 'Notificación', 'No se puede modificar sin hacer una lecturacion previa');
        };
    }
    
    gen: any = false;
    generar(lectura) {
        console.log(lectura);
        // if(lectura.lectura)
        if(lectura.lectura >= lectura.lecturaAct){
            this.socioMedidor.consumo = lectura.lectura - lectura.lecturaAct;
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
        if(this.gen == true){
        console.log(socioMedidor);
        socioMedidor.lecturaAnt = this.socioMedidor.lecturaAct;
        socioMedidor.lecturaAct = this.socioMedidor.lectura;
        socioMedidor.pagado = 0;
        socioMedidor.medidor_id = this.socioMedidor.medidorId;
        if (socioMedidor.flag == 0) {
            this.servicio.postMedicion(socioMedidor).subscribe(
                res => {
                    this.displayVariante = false;
                    this.socioMedidor = {};
                    console.log(res);
                },
                err => {
                    console.log(err);
                },
            );
        }

        if (socioMedidor.flag == 1) {
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
        }

        this.servicio.getAllMedidores().subscribe(
          res => {
            this.source =  res;
            console.log(res);
          },
          err => {
            console.log(err);
          },
      );
      this.gen = false;
      }
        else{
          this.servicio.showToast( 'warning', 'Notificación', 'Pulse el Boton Generara para continuar');
        }
    }


    onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
