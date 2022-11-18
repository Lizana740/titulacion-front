import { Component, OnInit } from '@angular/core';
import { MedicionService } from 'src/app/core/_services/medicion.service';

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

}
