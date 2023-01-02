import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { saveAs } from 'file-saver';
@Injectable({
  providedIn: 'root'
})
export class ReporteService {
  private url: string = "/reporte/";
  constructor(private http:HttpClient ) {

  }
  downloadPDF(): any {
    var mediaType = 'application/pdf';
    this.http.get('http://localhost:3000/api/reporte',{ responseType: 'blob' }).subscribe(
        (response) => {
            var blob = new Blob([response], { type: mediaType });
            saveAs(blob, 'report.pdf');
        },
        e => { throw Error(e); }
    );
}
}
