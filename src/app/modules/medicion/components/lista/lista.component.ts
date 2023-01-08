import { Component, OnInit } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { MedicionService } from 'src/app/core/_services/medicion.service';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  loading = true;
  mediciones!:any[];
  constructor(private medicionService:MedicionService,private messageService: MessageService,private primengConfig: PrimeNGConfig) {

   }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.getMedicionServices(true);
    setInterval(()=> {
      this.getMedicionServices(false);

    },10000);
  }

  getMedicionServices(message){
    this.medicionService.getMediciones().subscribe(res => {
      this.mediciones = res.data;
      this.loading= false;
    },(error:any)=> {
      if(message){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No se pudieron obtener los datos de las mediciones!'
        })
      }
      this.loading= false;
    }
    );
  }

  name = 'ExcelSheet.xlsx';
  exportToExcel(): void {
    let element = document.getElementById('season-tble');
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');
    XLSX.writeFile(book, this.name);
  }


}
