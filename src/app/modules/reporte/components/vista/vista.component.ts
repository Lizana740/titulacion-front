import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReporteService } from 'src/app/core/_services/reporte.service';
import { saveAs } from 'file-saver';
import { EstacionService } from 'src/app/core/_services/estacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css'],
})
export class VistaComponent implements OnInit {
  display: boolean = false;
  formulario: FormGroup;
  tipo!: number;
  estaciones!:any;
  doc: any = [
    {
      id: 0,
      label: 'Reporte General de Mediciones',
      icon: 'pi pi-file-pdf',
      buttonlabel: 'PDF',
      style: 'danger ',
    },
    {
      id: 1,
      label: 'Reporte de mediciones',
      icon: 'pi pi-file-excel',
      buttonlabel: 'Excel',
      style: 'success ',
    },
  ];
  constructor(
    private reporteServices: ReporteService,
    private _formBuilder: FormBuilder,
    private estacionServices: EstacionService
  ) {
    this.vaciar();
  }

  ngOnInit(): void {
     this.getEstaciones();

  }
  getEstaciones() {
    this.estacionServices.getEstacion().subscribe((res)=>{
      this.estaciones = res.data;
    })
  }

  vaciar() {
    this.formulario = this._formBuilder.group({
      inicio: ['', Validators.required],
      termino: ['', Validators.required],
      id_estacion: ['', Validators.required],
    });
  }

  add(id: number): void {
    this.tipo = id;
    this.display = true;
  }
  generar() {
    switch (this.tipo) {
      case 0:
        console.log(7)
        this.reporteServices.downloadPDF(this.formulario.value).subscribe(
          (response) => {
            var mediaType = 'application/pdf';
            var blob = new Blob([response], { type: mediaType });
            saveAs(blob, 'REPORTE'+new Date().toString().substring(0,10)+'.pdf');
            this.display = false;
            this.vaciar()
            Swal.fire({
              icon: 'success',
              title: 'Reporte generado con éxito!!',
              showConfirmButton: false,
              timer: 1500
            })
          },
          (e) => {
            throw Error(e);
          }
        );
        break;
      case 1:
        this.reporteServices.dowloadExcel(this.formulario.value).subscribe(
          (response) => {
            var mediaType = 'application/pdf';
            var blob = new Blob([response], { type: mediaType });
            saveAs(blob, 'REPORTE'+new Date().toString().substring(0,10)+'.xlsx');
            this.display = false;
            this.vaciar()
            Swal.fire({
              icon: 'success',
              title: 'Documento generado con éxito!!',
              showConfirmButton: false,
              timer: 1500
            })
          },
        )
        break;
    }
  }
}
