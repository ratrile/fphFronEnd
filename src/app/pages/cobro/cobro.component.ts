import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio/servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-cobro',
  templateUrl: './cobro.component.html',
  styleUrls: ['./cobro.component.scss']
})
export class CobroComponent implements OnInit {

  constructor(private servicio: ServicioService, private router: Router) { }

  ngOnInit(): void {
    this.servicio.listaMedidorUsuario().subscribe(
        res => {
          this.source =  res;
          console.log(res);
        },
        err => {
          console.log(err);
        },
    );
  }

  settings = {
    columns: {
      medidorId: {
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
        filter: false,
      },
    },
    actions: {
      columnTitle: 'Actions',
      add: false,
      edit: false,
      delete: false,
      custom: [
        { name: 'viewrecord', title: '<i class="ion-android-clipboard"></i>'},
        // { name: 'editrecord', title: '<i class="ion-edit"></i>'},
      ],
      position: 'right',
      // filter:false
    },
  };
  source: any;
  data: any;
  listMedidorMedidicon: any;
    displayVariante: any;

  onCustomAction(event) {
   console.log(event.data);
   this.displayVariante = true;
    this.servicio.listaMedidorMedicion(event.data.medidorId).subscribe(
        res => {
          this.listMedidorMedidicon =  res;
          console.log(res);
        },
        err => {
          console.log(err);
        },
    );
  }

    editar(row){
      console.log(row);
    }


    showDialog(row){
        this.servicio.cobro = row;
        console.log(this.servicio.cobro);
        this.router.navigate(['/pages/recibo']);
    }

    duplicadoRecibo(row){
      this.servicio.cobro = row;
      console.log(this.servicio.cobro);
      this.router.navigate(['/pages/duplicado']);
    }

}
