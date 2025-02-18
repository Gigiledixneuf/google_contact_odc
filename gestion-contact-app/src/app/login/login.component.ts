import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { UserApiLogin } from '../models/user-api';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  service:UserService = inject(UserService)
  router:Router = inject (Router)
  user!:UserApiLogin
  
  isOpen:boolean= false
  
  applyForm = new FormGroup ({
    email : new FormControl(""),
    password : new FormControl("")
  })

  saveApiLogin(){
    this.service.loginApi(
      this.applyForm.value.email??"",
      this.applyForm.value.password??""
    ).then((userApi: UserApiLogin) => {
          this.user = userApi

          if(userApi.token)
            {
              localStorage.setItem('token', userApi.token.token)
              localStorage.setItem('nom', userApi.user.fullName)
              localStorage.setItem('email', userApi.user.email)
              localStorage.setItem('fonction', userApi.user.fonction)
              
              this.router.navigate(['contact-list']) //route de redirection
            }
            else{
              this.isOpen = true
            }
      }).then(() => { window.location.reload();}); 
    
  }

  close(){
    this.isOpen = false
  }

}
