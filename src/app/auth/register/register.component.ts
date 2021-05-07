
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BackendService } from 'src/app/services/backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'
  ]
})
export class RegisterComponent implements OnInit {
  


  public formulario = this.fb.group({
    usuario:['eder', Validators.required],
    correo:['eder@gmail.com', [Validators.required, Validators.email]],
    password:['eder', Validators.required],
    password2:['eder', Validators.required]
  });

  constructor(private fb:FormBuilder, private servicio:BackendService, private router:Router) { }

  ngOnInit(): void {
  }

  registrarse(){
    if( !this.formulario.valid ){
      alert("Revise la información sulicitada e intente de nuevo");
    }else if( this.formulario.value.password != this.formulario.value.password2 ){
      alert("Las contraseñas no coinciden");
    }else{
      this.servicio.registro(this.formulario.value).subscribe(respuesta=>{
       localStorage.setItem('idUsuario',respuesta['id']);
       localStorage.setItem('emailUsuario',respuesta['email']);
       localStorage.setItem('usernameUsuario',respuesta['username']);
       this.router.navigateByUrl('login');
      },
      error=>{
        if(error.error.username){
          alert(error.error.username[0]);
        }
        if(error.error.email){
          alert(error.error.email[0]);
        }
      });
    }



    
  }


}
