import { Component, OnInit } from '@angular/core';
import { MedicionService } from 'src/app/core/_services/medicion.service';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  loading = false;
  mediciones!:any[];
  constructor(private medicionService:MedicionService) { }

  ngOnInit(): void {
    this.getMedicionServices();
    setInterval(()=> {
      this.getMedicionServices();

    },10000);
  }

  getMedicionServices(){
    this.medicionService.getMediciones().subscribe(res => {
      this.mediciones = res.data;
    });
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
