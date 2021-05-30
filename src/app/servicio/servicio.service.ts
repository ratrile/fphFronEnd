import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import {
  NbComponentStatus,
  NbGlobalPhysicalPosition,
  NbToastrService,
} from '@nebular/theme';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  cobro: any = {};

  constructor(private http: HttpClient,  private toastrService: NbToastrService) { }

  getAllusuario():Observable<any> {
    return this.http.get(`api/usuario`);
  }

  getAllMedidores():Observable<any> {
    return this.http.get(`api/medidores`);
  }

  postMedicion(obj: any):Observable<any> {
    return this.http.post(`api/medicion/lectura` , obj);
  }

  updateMedicion(obj: any):Observable<any> {
    return this.http.put(`api/medicion/lecturaModifica` , obj);
  }

  updateMedicionPerido(mes, anio):Observable<any> {
    // console.log(mes, anio);
    return this.http.get(`api/medicion/editar/${mes}/${anio}`);
  }

  listaMedidorUsuario():Observable<any> {
    return this.http.get(`api/medicion/lista-ususrio-medidor`);
  }

  listaMedidorMedicion(idMedidor):Observable<any> {
    return this.http.get(`api/recibo/lista-medidor-medicion/${idMedidor}`);
  }

  cabezeraRecibo(idMedicion):Observable<any> {
    return this.http.get(`api/recibo/cobro/cuerpo/${idMedicion}`);
  }

  cobroImprimir(obj: any): Observable<any> {
    return this.http.post(`api/recibo/cobro` , obj);
  }
  // modificarMedicionPagado(obj: any): Observable<any> {
  //   return this.http.put(`api/recibo/cobro` , obj);
  // }
  maxId():Observable<any> {
    return this.http.get(`api/recibo/cobro/max-id`);
  }

  reciboImprimirDuplicado(idMedicion):Observable<any> {
    return this.http.get(`api/recibo/impimirCopia/${idMedicion}`);
  }
  showToast(type: NbComponentStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: true,
      duration: 4000,
      hasIcon: true,
      position: NbGlobalPhysicalPosition.TOP_RIGHT,
      preventDuplicates: false,
    };
    const titleContent = title ? `${title}` : '';

    this.toastrService.show(
        body,
        `${titleContent}`,
        config);
  }
}
