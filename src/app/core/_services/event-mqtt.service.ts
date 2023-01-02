import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io  from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class EventMqttService {
  private url = 'ws://broker.mqttdashboard.com:1883';
  private socket:any;

  sendMessage(message:any){
    this.socket.emit('deviceMessage', message);
  }

  getMessages() {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('deviceMessage', (data:any) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }


}
