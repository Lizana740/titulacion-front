import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { EventMqttService } from 'src/app/core/_services/event-mqtt.service';



@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.component.html',
  styleUrls: ['./visualizar.component.css'],
})
export class VisualizarComponent {

  constructor(private mqttapService: EventMqttService){

    this.mqttapService.getMessages().subscribe((res)=>{
      console.log("RES",res)
    })
  }





}
