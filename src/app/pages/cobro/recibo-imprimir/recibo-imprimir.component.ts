import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {NumerosALetras} from '../../../../../node_modules/numero-a-letras/build/numeroaletras.js';
import { ServicioService } from '../../../servicio/servicio.service';
// import * as jsPDF from 'jspdf';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as moment from 'moment/moment';
import { Router } from '@angular/router';
// import * as jsPDF from "jspdf";


@Component({
  selector: 'ngx-recibo-imprimir',
  templateUrl: './recibo-imprimir.component.html',
  styleUrls: ['./recibo-imprimir.component.scss']
})
export class ReciboImprimirComponent implements OnInit {

  // @ViewChild('imprimir', {static: false}) el!: ElementRef;
  @ViewChild('imprimir')imprimir: ElementRef;

  constructor(public servicio: ServicioService, public router: Router) { }
  letras: any;
  listMedidorMedidicon: any;
  cabezaRecibo: any;
  fechaHoy: any;
  mes: any;
  anio: any;
  public mesArray = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  ngOnInit(): void {

    // this.letras = NumerosALetras(55);
    // this.fechaHoy = new Date().toISOString().slice(0, 10);

    console.log(this.servicio.cobro);
    // this.cabezaRecibo = this.servicio.cobro;
      this.servicio.cabezeraRecibo(this.servicio.cobro.medicion_id).subscribe(
          res => {
              this.cabezaRecibo =  res[0];
              this.cabezaRecibo.fechaHoy = new Date().toISOString().slice(0, 10);  //para guardar
              this.cabezaRecibo.fechaRecivo = moment().format('DD/MM/YYYY');  //solo muestra pdf
              this.cabezaRecibo.mes = this.mesArray[new Date(this.cabezaRecibo.fechaMedicion).getMonth()];
              this.cabezaRecibo.anio = new Date(this.cabezaRecibo.fechaMedicion).getFullYear();
              if (typeof this.cabezaRecibo.mora === 'undefined') {
                  this.cabezaRecibo.mora = 0;
              }
              if (typeof this.cabezaRecibo.corte === 'undefined') {
                  this.cabezaRecibo.corte = 0;
              }
              this.cabezaRecibo.totalFinal = this.cabezaRecibo.total + this.cabezaRecibo.mora + this.cabezaRecibo.corte;
              // this.cabezaRecibo.id =' ';
              this.letras = NumerosALetras(this.cabezaRecibo.totalFinal);
              console.log(this.cabezaRecibo);
          },
          err => {
              console.log(err);
          },
      );

        this.servicio.listaMedidorMedicion(this.servicio.cobro.id_medidor).subscribe(
            res1 => {
              this.listMedidorMedidicon =  res1;
              console.log(res1);
            },
            err => {
              console.log(err);
            },
        );

      //this.servicio.maxId().subscribe(
      //    res2 => {
      //        this.cabezaRecibo.id =  res2[0].max + 1;
      //        console.log(res2);
      //        console.log(this.cabezaRecibo.id);
      //    },
      //    err => {
      //        console.log(err);
      //    },
      //);
  }

  pagar: any = {};
  // pagar: any = {};

  pagarImprimir() {
      console.log(this.servicio.cobro.medicion_id);
      // this.pagar.medicion_id = 8;
    this.pagar.medicion_id = this.servicio.cobro.medicion_id;
    this.pagar.fechaEmision = this.cabezaRecibo.fechaHoy;
    this.pagar.total =  this.cabezaRecibo.totalFinal;
      this.servicio.cobroImprimir(this.pagar).subscribe(
          res => {
              // this.listMedidorMedidicon =  res;
              this.cabezaRecibo.idRecibo = res.id;
              this.servicio.listaMedidorMedicion(this.servicio.cobro.id_medidor).subscribe(
                res1 => {
                  this.listMedidorMedidicon =  res1;
                  this.pdf();
                  console.log(res1);
                },
                err => {
                  console.log(err);
                },
            );
              // this.pdf();
              console.log(res);

          },
          err => {
              console.log(err);
          },
      );
  }

  pdf() {
    // Extraemos el
    const title = this.cabezaRecibo.idRecibo + ".pdf"
    const DATA = document.getElementById('imprimir');
    const doc = new jsPDF('p', 'pt', [624,794]);
    const options = {
      background: 'white',
      scale: 1
    };
    html2canvas(DATA, options).then((canvas) => {

      const img = canvas.toDataURL('image/PNG');

      // Add image Canvas to PDF
      const bufferX = 15;
      const bufferY = 0;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, 397, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save(title);
      setTimeout(()=>{
        this.router.navigate(['/pages/cobro']);
      },1000);
    });
  }

}
