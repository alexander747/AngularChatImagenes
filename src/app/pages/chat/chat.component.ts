import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: [
  ]
})
export class ChatComponent implements OnInit {
  public msj:string='';
  public nombre:string = localStorage.getItem('user');
  public id:string = localStorage.getItem('id');


  constructor(private service:ChatService) { }

  ngOnInit(): void {
  }



  enviar(){
      this.service.enviar_msj(this.msj, this.nombre, this.id);
      this.msj='';
  }

}
