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
      'http://ec2-44-212-72-194.compute-1.amazonaws.com:3000/api/reporte/general/pdf/',
      body,
      { responseType: 'blob' }
    );
  }
  dowloadExcel(body: any): any {
    return this.http.post(
      'http://ec2-44-212-72-194.compute-1.amazonaws.com:3000/api/reporte/estacion/excel/',
      body,
      { responseType: 'blob' }
    );

  }

}
