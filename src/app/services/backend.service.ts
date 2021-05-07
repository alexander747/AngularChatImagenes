import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http:HttpClient) {
    console.log("servicio inyectado");
    
   }

   registro(formulario:any){
      console.log(formulario);
      const form = new FormData();
      form.append('username',formulario.usuario);
      form.append('email',formulario.correo);
      form.append('password',formulario.password);
      form.append('password2',formulario.password2);
     return this.http.post(`http://localhost:8000/api/user/`, form);
      
   }
}
