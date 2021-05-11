import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BackendService } from 'src/app/services/backend.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'
  ]
})
export class LoginComponent implements OnInit {

  public formulario = this.fb.group({
    usuario:['', Validators.required],
    password:['', Validators.required]
  });

  constructor(private fb:FormBuilder, private servicio:BackendService, private router:Router) { }

  ngOnInit(): void {
  }

  loguearse(){
    this.servicio.login(this.formulario.value).subscribe(respuesta=>{
      this.router.navigate(['/chat']);
     
    },
    error=>{
        console.log(error);
        alert(error.error.error);
      }
    );
    
  }

}
