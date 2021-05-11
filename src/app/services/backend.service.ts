import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


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

   login(formulario:any){
     console.log("conectado");
     const form = new FormData();
     form.append('username',formulario.usuario);
     form.append('password',formulario.password);
     return this.http.post(`http://localhost:8000`, form).pipe(
       map((respuesta:any)=>{
        console.log(respuesta);
        console.log(respuesta['user'].email);
        localStorage.setItem('token', respuesta['token']);
        localStorage.setItem('correo', respuesta['user'].email);
        localStorage.setItem('id', respuesta['user'].id);
        localStorage.setItem('user', respuesta['user'].username);
        return true;
       })
     );
   }
}
