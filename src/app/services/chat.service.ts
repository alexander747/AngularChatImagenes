import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mensaje } from 'src/app/interface/chat.interface';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public chats:any[] = [];
  public socket;
  public mensajesRecibidos:any[];

  

  constructor( private http:HttpClient ) {
    this.socket = new WebSocket('ws://127.0.0.1:8000/chat/');
    this.socket.onopen = this.websocket_conexion_ok;
    this.socket.onmessage = this.cargarMsjs;
  
   }

  
  websocket_conexion_ok(e){
    console.log(e.data);

    console.log("conexion establecida");
    
  }

  enviar_msj(mensaje:string, nombre:string, id:string){
    let mensajeEnviar:Mensaje={
      mensaje:mensaje,
      nombre:nombre,
      id:id
    }

    this.socket.send(JSON.stringify(mensajeEnviar));

  }

  cargarMsjs(e){
    // this.mensajesRecibidos.push(JSON.parse(e.data));
    // console.log("mensaje recibido "+this.mensajesRecibidos);
    console.log(JSON.parse(e.data));
    

  }



}
