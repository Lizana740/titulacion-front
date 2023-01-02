import { Component, OnInit } from '@angular/core';
import { ReporteService } from 'src/app/core/_services/reporte.service';
import * as mqttt from 'mqtt';


@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css'],
})
export class VistaComponent implements OnInit {
  constructor(private reporteServices: ReporteService) {
    var client = mqttt.connect('mqtt://test.mosquitto.org')

    client.on('connect', function () {
      client.subscribe('presence', function (err) {
        if (!err) {
          client.publish('presence', 'Hello mqtt')
        }
      })
    })

    client.on('message', function (topic, message) {
      // message is Buffer
      console.log(message.toString())
      client.end()
    })
  }

  ngOnInit(): void {
    this.reporteServices.downloadPDF();
  }
}
