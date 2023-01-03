import { Component, OnInit, ViewChild,OnDestroy } from '@angular/core';
import { Chart, ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { MessageService } from 'primeng/api';
import { EstacionService } from 'src/app/core/_services/estacion.service';
import { default as Annotation } from 'chartjs-plugin-annotation';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.component.html',
  styleUrls: ['./visualizar.component.css'],
})
export class VisualizarComponent implements OnInit{
  estaciones!: any[];
  label: string = '';
  time: string[] = [];
  meses!: string[];
  datas: any[] = [];
  data!: any;
  num: any[] = [];


  constructor(
    private estacionServices: EstacionService,
    private messageService: MessageService
  ) {
    this.getEstaciones();
    setInterval(()=>{
      console.log("DATA::", this.datas)
    },1000)
    Chart.register(Annotation);
  }


  ngOnInit(): void {}


  setTimer(): void {
    for (var i = 0; i < this.estaciones.length; i++) {
      var estacion = this.estaciones[i];
      for (var j = 0; j < estacion.sensores.length; j++) {
        var sensor = estacion.sensores[j];

        this.datas.push({
          id: sensor.id_sensor,
          label: sensor.tipo,
          data: [],
          time: [],
        });
        setInterval((id) => {
          var data = this.datas.filter((item:any) => item.id === id)[0]
          if (data.data.length < 20) {
            data.data.push(Math.random() * (39 - 30) + 30);
            data.time.push(new Date().toString().substring(0, 11));
            this.chart?.update();
          } else {
            data.data.push(Math.random() * (39 - 30) + 30);
            data.time.push(new Date().toString().substring(0, 11));
            this.chart?.update();
            data.data.shift();
            data.time.shift();

          }

        },500,sensor.id_sensor)


      }
    }
  }

  getEstaciones() {
    this.estacionServices.getEstacion().subscribe(
      (res: any) => {
        this.estaciones = res.data;
        console.log(this.estaciones.length);
        this.setTimer();
      },
      (err: any) => {
        this.messageService.add({
          severity: 'warn',
          detail: 'No se pudo obtener las estaciones',
        });
      }
    );
  }
  change(id: number) {
    this.data = this.datas.filter(
      (item) => item.id == id
    )[0];
    this.label = ' Sensor:: ' + id;
    console.log("GRAP::",this.data);

    this.lineChartData  = {
      datasets: [
        {
          data: this.data.data,
          label: this.data.label,
          backgroundColor: 'rgba(148,159,177,0.2)',
          borderColor: 'rgba(148,159,177,1)',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)',
          fill: 'origin',
        },
      ],
      labels: this.data.time,
    };

  }

  changeSensor(id:number){
    var t= this.datas.filter(
      (item) => item.id == id
    )[0];

    return t[t.length-1]
  }

  public lineChartData: ChartConfiguration['data'];

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5,
      },
    },
    scales: {
      y: { position: 'left' },

    },
  };

  public lineChartType: ChartType = 'line';
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
}
