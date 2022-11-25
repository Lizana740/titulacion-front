import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/core/_services/usuarios.service';

@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.component.html',
  styleUrls: ['./trabajadores.component.css']
})
export class TrabajadoresComponent implements OnInit {
  lista:any
  trabajadores:any;
  mantenedores:any;
  modalMantenedores:boolean =false;

  selectedCountryAdvanced!: any[];
  countries!: any[];
  groupedCities!: any[];
  filteredCountries!: any[];
  constructor(private usuarioService: UsuariosService) {

  }

  ngOnInit(): void {
    this.getMantenedores();
    this.getTrabajadoresPlanta();

    this.groupedCities = [
      {
        label: "Germany",
        value: "de",
        items: [
          { label: "Berlin", value: "Berlin" },
          { label: "Frankfurt", value: "Frankfurt" },
          { label: "Hamburg", value: "Hamburg" },
          { label: "Munich", value: "Munich" }
        ]
      },
      {
        label: "USA",
        value: "us",
        items: [
          { label: "Chicago", value: "Chicago" },
          { label: "Los Angeles", value: "Los Angeles" },
          { label: "New York", value: "New York" },
          { label: "San Francisco", value: "San Francisco" }
        ]
      },
      {
        label: "Japan",
        value: "jp",
        items: [
          { label: "Kyoto", value: "Kyoto" },
          { label: "Osaka", value: "Osaka" },
          { label: "Tokyo", value: "Tokyo" },
          { label: "Yokohama", value: "Yokohama" }
        ]
      }
    ];
  }
  getTrabajadoresPlanta (){
    this.usuarioService.obtenerUsuariosRol(2).subscribe(res=>{
      this.trabajadores = res.data
    })
  }

  getMantenedores (){
    this.usuarioService.obtenerUsuariosRol(3).subscribe(res=>{
      this.mantenedores = res.data
    })
  }
  modalMantenedor(){
    this.modalMantenedores=true;
  }
  addMantenedor(){

  }

  filterCountry(event:any) {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.countries.length; i++) {
      let country = this.countries[i];
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }

    this.filteredCountries = filtered;
  }

}
