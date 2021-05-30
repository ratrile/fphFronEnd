import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {NumerosALetras} from '../../../../../node_modules/numero-a-letras/build/numeroaletras.js';
import { ServicioService } from '../../../servicio/servicio.service';
// import * as jsPDF from 'jspdf';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as moment from 'moment/moment';
import { Router } from '@angular/router';


@Component({
  selector: 'ngx-duplicado-recibo',
  templateUrl: './duplicado-recibo.component.html',
  styleUrls: ['./duplicado-recibo.component.scss']
})
export class DuplicadoReciboComponent implements OnInit {

 // @ViewChild('imprimir')imprimir: ElementRef;

  constructor(public servicio: ServicioService, public router: Router) { }

  letras: any;
  listMedidorMedidicon: any;
  cabezaRecibo: any;
  fechaHoy: any;
  mes: any;
  anio: any;
  duplicado: any;

  ngOnInit(): void {

    this.servicio.reciboImprimirDuplicado(this.servicio.cobro.medicion_id).subscribe(
        res => {
          this.duplicado =  res[0];
         // this.cabezaRecibo.fechaHoy = new Date().toISOString().slice(0, 10);  //para guardar
          this.duplicado.fechaRecivo = moment(this.duplicado.fechaEmision).format('DD/MM/YYYY');  //solo muestra pdf
          this.duplicado.mes = new Date(this.duplicado.fechaEmision).getMonth() + 1;;
          this.duplicado.anio = new Date(this.duplicado.fechaEmision).getFullYear();
          if (typeof this.duplicado.mora === 'undefined') {
            this.duplicado.mora = 0;
          }
          if (typeof this.duplicado.corte === 'undefined') {
            this.duplicado.corte = 0;
          }
          this.duplicado.totalFinal = this.duplicado.total + this.duplicado.mora + this.duplicado.corte;
          // this.cabezaRecibo.id =' ';
          this.letras = NumerosALetras(this.duplicado.totalFinal);
          console.log(this.duplicado);
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
  }
  /*pdf(){
    const title = this.duplicado.idRecibo + ".pdf"
    console.log('aqui');
    const doc = new jsPDF('p','pt','a4');
    doc.html(this.imprimir.nativeElement,{
        html2canvas: {
            scale: 0.55,
            width: 10,
            height: 10,
        },
        margin: 5,
        callback: (pdf) => {
            pdf.autoPrint();
            pdf.save(title);
        }
    });
    setTimeout(()=>{
      this.router.navigate(['/pages/cobro']);
    },1000);
  }*/
  pdf() {
    // Extraemos el
    const title = this.duplicado.idRecibo + ".pdf"
    const DATA = document.getElementById('imprimir');
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3
    };
    html2canvas(DATA, options).then((canvas) => {

      const img = canvas.toDataURL('image/PNG');

      // Add image Canvas to PDF
      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save(title);
    });
  }
}
