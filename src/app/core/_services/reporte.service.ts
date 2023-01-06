import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReporteService {
  private url: string = '/reporte/';
  constructor(private http: HttpClient) {}

  downloadPDF(body: any): any {
    return this.http.post(
      'http://pacheco.chillan.ubiobio.cl:8081/api/reporte/general/pdf/',
      body,
      { responseType: 'blob' }
    );
  }
  dowloadExcel(body: any): any {
    return this.http.post(
      'http://pacheco.chillan.ubiobio.cl:8081/api/reporte/estacion/excel/',
      body,
      { responseType: 'blob' }
    );

  }

}
